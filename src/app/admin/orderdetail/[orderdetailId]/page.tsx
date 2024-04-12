"use client"
import { useState } from 'react';
import { NavbarAdmin } from '../../components/navbarAdmin';
import styles from './orderdetail.module.css';

interface IOrderData {
    id: number;
    description: string;
    receive_at: string;
    status: string;
    items: {
        id: number;
        name: string;
        quantity: number;
        price: number;
    }[];
}

interface IOrderDetailProps {
    orderId: number;
}

const statusOptions = ["ordered", "waiting for payment", "cancel", "finished"];

export default function OrderDetail(props: IOrderDetailProps) {
    const [data, setData] = useState<IOrderData>({
        id: props.orderId,
        description: "No chilli pls",
        receive_at: "2024-04-20",
        status: "waiting for payment",
        items: [
            { id: 1, name: "kapao", quantity: 2, price: 10 },
            { id: 2, name: "kaopat", quantity: 1, price: 15 },
            { id: 3, name: "kaidao", quantity: 3, price: 10 },
        ],
    });

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(data.status);

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value);
        setEditMode(false);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleCancel = () => {
        setEditMode(false);
        setStatus(data.status);
    };

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <NavbarAdmin />
            </div>
            <div className={styles.orderDetails}>
                <div className={styles.orderList}>
                    <h2 id={styles.h2}>Order</h2>
                    <div className={styles.section}>
                        <h3>Order lists</h3>
                        <table className={styles.itemTable}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.items.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>฿{item.price * item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.otherDetails}>
                    <h2 id={styles.h2}>Details</h2>
                    <div className={styles.section}>
                        <h3>Total Price</h3>
                        <p>฿{data.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</p>
                    </div>
                    <div className={styles.section}>
                        <h3>Description</h3>
                        <p>{data.description}</p>
                    </div>
                    <div className={styles.section}>
                        <h3>Receive at</h3>
                        <p>{data.receive_at}</p>
                    </div>
                    <div className={styles.section}>
                        <h3>Status</h3>
                        {editMode ? (
                            <div className={styles.dropdown}>
                                <select value={status} onChange={handleStatusChange}>
                                    {statusOptions.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        ) : (
                            <p>{status}</p>
                        )}
                    </div>
                </div>
                <div className={styles.section}>
                    {editMode ? (
                        <div>
                            <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
                        </div>
                    ) : (
                        <button className={styles.editButton} onClick={toggleEditMode}>Edit</button>
                    )}
                </div>
            </div>
        </div>
    );
}

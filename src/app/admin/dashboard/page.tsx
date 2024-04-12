"use client"
import { NavbarAdmin } from "../components/navbarAdmin";
import { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Link from "next/link";

interface Row {
    ID: number;
    dates: string;
    firstName: string;
    lastName: string;
    phoneno: string;
    status: string;
    editMode: boolean;
}

const statusOptions = ["ordered", "waiting for payment", "cancel", "finished"];

export default function Dashboard() {
    const [rows, setRows] = useState<Row[]>([]);

    const initialRows: Row[] = [
        { ID: 1, dates: '2024-04-15', firstName: 'Ingkamon', lastName: 'Chatree', phoneno: '0950473789', status: 'waiting for payment', editMode: false },
        { ID: 2, dates: '2024-04-16', firstName: 'Chatree', lastName: 'Ingkaon', phoneno: '0854859709', status: 'completed', editMode: false },
        { ID: 3, dates: '2024-04-16', firstName: 'Q', lastName: 'Q', phoneno: '0854851548', status: 'completed', editMode: false }
    ];

    useEffect(() => {
        setRows(initialRows);
    }, []);

    const handleStatusChange = (id: number, newStatus: string) => {
        const updatedRows = rows.map(row => {
            if (row.ID === id) {
                return { ...row, status: newStatus, editMode: false };
            }
            return row;
        });
        setRows(updatedRows);
    };

    const toggleEditMode = (id: number) => {
        setRows(rows.map(row => row.ID === id ? { ...row, editMode: !row.editMode } : row));
    };

    const handleCancel = (id: number) => {
        toggleEditMode(id);
    };

    return (
        <div className={styles.container}>
            <div className={styles.Navbar}>
                <NavbarAdmin />
            </div>
            <div className={styles.content}>
                <div className={styles.headerAdmin}>
                    <div className={styles.Info}>
                        <p>Order Information</p>
                    </div>
                </div>
                <div className={styles.adminTable}>
                    <div className={styles.tableContainer}>
                        <table className={styles.customTable}>
                            <thead>
                                <tr>
                                    <th>Date&Time</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone no</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    <th>View details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map(row => (
                                    <tr key={row.ID}>

                                        <td>{row.dates}</td>
                                        <td>{row.firstName}</td>
                                        <td>{row.lastName}</td>
                                        <td>{row.phoneno}</td>
                                        <td>
                                            <div className={styles.dropdown}>
                                                {row.editMode ? (
                                                    <select
                                                        className={styles.select}
                                                        value={row.status}
                                                        onChange={e => handleStatusChange(row.ID, e.target.value)}
                                                    >
                                                        {statusOptions.map(option => (
                                                            <option key={option} value={option}>{option}</option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <p>{row.status}</p>
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            {row.editMode && (
                                                <button
                                                    className={styles.cancelButton}
                                                    onClick={() => handleCancel(row.ID)}
                                                >
                                                    Cancel
                                                </button>
                                            )}
                                            {!row.editMode && (
                                                <button
                                                    className={styles.editButton}
                                                    onClick={() => toggleEditMode(row.ID)}
                                                >
                                                    Edit
                                                </button>
                                            )}
                                        </td> 
                                        <Link href={`/admin/orderdetail/${row.ID}`}>
                                            <td>
                                                <button className={styles.editButton}>View</button>
                                            </td>
                                        </Link>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

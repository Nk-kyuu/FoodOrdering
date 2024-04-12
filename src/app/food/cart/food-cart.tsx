"use client";
import { Paper } from "@/app/components/paper/paper";
import { CartItem } from "./cart-item";
import style from "./food-cart.module.css";
import Input from "@/app/components/input/input";
import { ChangeEvent, useState } from "react";
import { CouponIcon } from "@/app/components/icon/coupon-icon";

export function FoodCart() {
    const [coupon, setCoupon] = useState('');
    const [selectMode, setSelectMode] = useState(1);
    const [showTimepicker, setShowTimepicker] = useState(false);
    const [timeSelected, setTimeSelected] = useState('');

    const onChangeCoupon = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCoupon(e.target.value);
    }

    const pickupSelectHandler = (mode: number) => {
        if (mode === 1) {
            setSelectMode(1);
            setShowTimepicker(false);
        } else if (mode === 2) {
            setShowTimepicker(true);
            setSelectMode(2);
        }
    }

    const timeSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTimeSelected(e.target.value);
    }

    const onUseCouponHandler = () => {
        console.log(coupon)
    }

    const onOrderHandler = () => {
        console.log(coupon)
    }

    return (
        <div className={style.cart_wrapper}>
            <Paper height="100%">
                <ul className={style.cart_itemlist}>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </ul>
                <div className={style.receive_selector}>
                    <button onClick={() => pickupSelectHandler(1)} className={`${style.pickup_btn} ${selectMode === 1 ? style.selected : ''}`}>Pick up now</button>
                    <div className={style.timepicker_wrap}>
                        <button onClick={() => pickupSelectHandler(2)} className={`${style.pickup_btn} ${selectMode === 2 ? style.selected : ''}`}>Pick up later</button>
                        {showTimepicker && <input value={timeSelected} defaultChecked={true} type="time" onChange={timeSelectedHandler} />}
                    </div>

                </div>
                <div className={style.couponwrap}>
                    <div className={style.icon_wrap}>
                        <CouponIcon color="#1191bc"/>
                    </div>
                    <div className={style.couponinput_wrap}>
                        <Input type="text" value={coupon} label="Coupon" onChange={(e) => setCoupon(e.target.value)} />
                    </div>
                    <button className={style.couponbtn} onClick={onUseCouponHandler}>Use</button>
                </div>
                <div className={style.checkout_wrap}>
                    <div className={style.total_price}>
                        <div className={style.label}>
                            Total price
                        </div>
                        <div className={style.price}>
                            1000 บาท
                        </div>
                    </div>
                    <div className={style.purchasewrap}>
                        <button className={style.purchasebtn} onClick={onOrderHandler}>Order</button>
                    </div>
                </div>
            </Paper>
        </div>
    )
}
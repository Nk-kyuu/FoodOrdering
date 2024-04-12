"use client";
import style from "./navigation-bar.module.css";
import { UserIcon } from "../../components/icon/user-icon";
import { useRef, useState } from "react";
import { useOutsideDetect } from "../hooks/useOutsideDetect";
import Link from "next/link";

export function Usermenu() {
    const [show, setShow] = useState(false);
    const menuBar = useRef<HTMLUListElement>(null);

    const onClickHandler = () => {
        setShow(prev => !prev);
    }

    return (
        <>
            <div className={style.iconBtn} onClick={onClickHandler}>
                <UserIcon color="#1191bc" />
            </div>
            {show && <ul className={style.menu_bar} ref={menuBar} onMouseLeave={() => setShow(false)}>
                <Link href={"/food/order"}>
                    <li className={style.menu_bar_item}>Order</li>
                </Link>
                <Link href={"/user/edituser"}>
                    <li className={style.menu_bar_item}>Edit user</li>
                </Link>
                <li className={style.menu_bar_item}>Logout</li>
            </ul>}
        </>
    )
}
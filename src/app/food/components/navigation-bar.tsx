import { Typography } from "@/app/components/typography/typography";
import { CartIcon } from "../../components/icon/cart-icon";
import style from "./navigation-bar.module.css";
import Link from "next/link";
import { Usermenu } from "./user-menu";

export function NavigationBar(){
    return (
        <nav className={style.container}>
            <div className={style.logo}>
                <Link href="/food/dashboard">
                    <Typography size="h3">
                        FOOD APP
                    </Typography>
                </Link>
            </div>
            <div className={style.controller}>
                <Link href="/food/cart">
                    <div className={style.iconBtn}>
                        <CartIcon color="#1191bc"/>
                    </div>
                </Link>
                <Usermenu />
            </div>
        </nav>
    );
}
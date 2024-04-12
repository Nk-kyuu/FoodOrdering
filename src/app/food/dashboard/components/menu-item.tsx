import { Typography } from "@/app/components/typography/typography";
import { IMenuItem } from "./menu.interface";
import Image from 'next/image'
import style from "./menu-item.module.css";


export function MenuItem(props: IMenuItem) {
    return (
        <li className={style.menu_item_root}>
            <div className={style.menu_item_image}>
                <Image src={props.image} fill alt="menu" sizes="100%" priority/>
            </div>
            <div className={style.menu_item_head}>
                <Typography size="h5">{props.name}</Typography>
                <Typography size="h5">ราคา {props.price} บาท</Typography>
            </div>
        </li>
    );
}
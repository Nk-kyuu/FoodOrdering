
import { SubtractIcon } from "@/app/components/icon/subtract-icon";
import style from "./cart-item.module.css";
import Image from "next/image";
import { AddIcon } from "@/app/components/icon/add-icon";
const testImage = "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKFRA9Hw1ddaiN8vczDH5awGUi4JQ7XTjwF2YTlnGfAZTGUAcQDXv.jpg"
export function CartItem(){

    return (
        <li className={style.cart_item_root}>
            <div className={style.cart_iteminfo}>
                <div className={style.cart_image}>
                    <Image src={testImage} alt={"cart"} fill sizes="100%" priority/>
                </div>
                <div className={style.cart_itemname}>ชื่อเมนู 1</div>
                <div className={style.cart_itemdesc}>description</div>
            </div>
            <div className={style.cart_itemsubinfo}>
                <div className={style.cart_itemprice}>500 บาท ต่อชิ้น</div>
                <div className={style.cart_amountcontroller}>
                    <button className={style.icon_wrap}>
                        <SubtractIcon />
                    </button>
                    <div className={style.cart_amountbox}>
                        1
                    </div>
                    <button className={style.icon_wrap}>
                        <AddIcon />
                    </button>
                </div>
            </div>
        </li>
    )
}
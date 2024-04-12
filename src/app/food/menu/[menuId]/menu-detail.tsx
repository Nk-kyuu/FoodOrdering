import { Paper } from "@/app/components/paper/paper";
import style from "./menu-detail.module.css";
import Image from "next/image";
import { IMenuData, IMenuDetailProps } from "./menu-detail.interface";
import { AddCartButton } from "./add-cart-button";

const testImage = "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKFRA9Hw1ddaiN8vczDH5awGUi4JQ7XTjwF2YTlnGfAZTGUAcQDXv.jpg"

export async function MenuDetail(props: IMenuDetailProps){
    const data = {} as IMenuData;
    data.name = props.menuId;
    data.price = 1000;
    data.description = "unk";
    data.category = "unk@";
    
    await new Promise((resolve) => setTimeout(() => resolve(0), 1000));

    return (
        <div className={style.wrapper}>
            <Paper>
                <div className={style.info}>
                    <div className={style.image_wrap}>
                        <Image src={testImage} alt={"food"} fill sizes="100%" priority/>
                    </div>
                    <div className={style.text_info_wrap}>
                        <div>Name: {data.name}</div>
                        <div>Category: {data.category}</div>
                        <div>Price: {data.price}</div>
                    </div>
                </div>
                <fieldset className={style.description}>
                    <legend>Description</legend>
                    <label>{data.description}</label>
                </fieldset>
                <AddCartButton menuId={props.menuId} />
            </Paper>
        </div>
    )
}
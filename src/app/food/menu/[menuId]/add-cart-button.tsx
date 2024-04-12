"use client";
import style from "./menu-detail.module.css";

interface AddCartButtonProp{
    menuId: string;
}

export function AddCartButton(props: AddCartButtonProp){

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(props)
    }

    return <button className={style.cartbtn} onClick={onClickHandler}>Add to cart</button>
}
import { IMenu } from "./menu.interface";
import style from "./menu.module.css";

export function Menu(props: IMenu){
    return <ul className={`${style.menu_item_root} ${props.inline ? style.inline : ''}`}>{props.children}</ul>
}
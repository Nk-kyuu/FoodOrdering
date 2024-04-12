import { IDropdown } from "./dropdown.interface";
import { ChangeEvent } from "react";
import style from "./dropdown.module.css";

export function Dropdown(props: IDropdown){
    const { onChange } = props;
    const onChangeInner = (e: ChangeEvent<HTMLSelectElement>) => {
        if(onChange){
            onChange(e.target.value);
        }
    }

    return <select className={style.select} onChange={onChangeInner}>{props.children}</select>
}
import { useState } from "react"
import style from "./Input.module.css"
import { IInput } from "./input.interface";

export const Input = (props: IInput) => {
    const [focus, setfocus] = useState(false);

    return (
        <div className={`${style.wrapper} ${focus || (props.value !== '') ? style.focus : ''}`}>
            <label className={style.placeholder}>{props.label}</label>
            <input onChange={props.onChange} value={props.value} type={props.type} className={style.inputbox} onFocus={() => setfocus(true)} onBlur={() => setfocus(false)} disabled={props.disable}/>
        </div>
    )
}

export default Input;
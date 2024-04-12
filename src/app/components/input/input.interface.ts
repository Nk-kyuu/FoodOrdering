import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export interface IInput{
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string | number;
    label?: string | number;
    type?: HTMLInputTypeAttribute;
    disable?: boolean;
}
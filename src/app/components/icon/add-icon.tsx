import { IIcon } from "./icon.interface";

export function AddIcon(props: IIcon){
    return (
        <svg viewBox="0 0 512 512"><g><path d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z" fill={props.color} opacity="1" data-original="#000000"></path></g></svg>
    )
}
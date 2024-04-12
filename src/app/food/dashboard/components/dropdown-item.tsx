import { IDropdownItem } from "./dropdown.interface";

export function DropdownItem(props: IDropdownItem){
    return <option value={props.value}>{props.children}</option>
}
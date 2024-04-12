import { IIcon } from "./icon.interface";

export function UserIcon(props: IIcon) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
    )
}
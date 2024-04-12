
export interface IDropdown{
    onChange?: (value: string | number) => void;
    children?: React.ReactNode;
}

export interface IDropdownItem{
    value?: string | number;
    children?: React.ReactNode;
}
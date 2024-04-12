export interface IMenu{
    children?: React.ReactNode;
    inline?: boolean;
}

export interface IMenuItem{
    name: string;
    image: string;
    price: number;    
}
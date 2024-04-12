export function Typography(props: ITypography){
    const DynamicTag = `${props.size}` as keyof JSX.IntrinsicElements;
    
    return <DynamicTag>{props.children}</DynamicTag>
}
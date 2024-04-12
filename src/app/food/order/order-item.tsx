import style from "./order.module.css";

export function OrderItem(){
    return (
        <li className={style.order_item}>
            <div className={style.order_info}>
                <div className={style.top_wrap}>
                    <div className={style.order_top}>Order id: 123456</div>
                    <div className={style.order_top}>Order at: 20/01/2024</div>
                    <div className={style.order_top}>Price: 10000</div>
                </div>
                <ul className={style.order_detail}>
                    <li> AAAAAAAAAAA </li>
                    <li> BBBBBBBBBBBBBBBB </li>
                    <li> CCCCCCCCCCCCCCCCCCCCCCC </li>
                </ul>
            </div>
            <div className={style.order_status}>Waiting</div>
        </li>
    )
}
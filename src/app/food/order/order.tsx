import { Paper } from "@/app/components/paper/paper";
import style from "./order.module.css";
import { OrderItem } from "./order-item";

export function Order() {
    return (
        <ul className={style.order_list}>
            <Paper mx="2rem" my="2rem">
                <OrderItem />
            </Paper>
            <Paper mx="2rem" my="2rem">
                <OrderItem />
            </Paper>
        </ul>

    )
}
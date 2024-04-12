import { Loading } from "@/app/components/loading/loading";
import { Suspense } from "react";
import { FoodCart } from "./food-cart";

export default function Page(){

    return (
        <Suspense fallback={<Loading />}>
            <FoodCart />
        </Suspense>
    )
}
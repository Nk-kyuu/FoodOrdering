import { MenuDetail } from "./menu-detail"
import { Suspense } from "react"
import { Loading } from "../../../components/loading/loading"

interface DynamicMenu{
    params: {  menuId: string };
}

export default async function Page(props: DynamicMenu){
    const menuId = props.params.menuId;

    return (
        <Suspense fallback={<Loading />}>
            <MenuDetail menuId={menuId}/>
        </Suspense>
    )
}
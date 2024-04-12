import { Suspense } from "react";
import { Dashboard } from "./dashboard";
import { Loading } from "../../components/loading/loading";

export default function Page(){
    return (
        <Suspense fallback={<Loading />}>
            <Dashboard />
        </Suspense>
    )
}
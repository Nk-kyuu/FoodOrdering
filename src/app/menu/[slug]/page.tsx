"use client";
import { useParams } from "next/navigation"
import { MenuDetail } from "./menu-detail"
// import { Suspense } from "react"
import { Loading } from "../../components/loading/loading"

export default function Page(){
    return (

            <p>Post: {router.query.slug}</p>


    )
}
"use client";

import { Typography } from "@/app/components/typography/typography";
import Link from "next/link";
import { Menu } from "../dashboard/components/menu";
import { MenuItem } from "../dashboard/components/menu-item";
import { Paper } from "@/app/components/paper/paper";
import style from "./random-menu.module.css";
import { AddIcon } from "@/app/components/icon/add-icon";
import { SubtractIcon } from "@/app/components/icon/subtract-icon";
import { useState } from "react";
import { RandomIcon } from "@/app/components/icon/random-con";
const testImage = "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKFRA9Hw1ddaiN8vczDH5awGUi4JQ7XTjwF2YTlnGfAZTGUAcQDXv.jpg"

export default function Page() {
    const [amount, setAmount] = useState(1);

    const onDecrease = () => {
        if (amount > 1) {
            setAmount(prev => prev - 1);
        }
    }

    const onIncrease = () => {
        setAmount(prev => prev + 1);
    }

    const onRandom = () => {
        console.log("Random")
    }

    return (
        <Paper mx="1rem" my="1rem">
            <Typography size="h2">Random</Typography>
            <div className={style.amountcontroller}>
                <Typography size="h5">Enter amount to random</Typography>
                <div className={style.amountwrap}>
                    <button className={style.icon_wrap} onClick={onDecrease}>
                        <SubtractIcon />
                    </button>
                    <div className={style.cart_amountbox}>
                        {amount}
                    </div>
                    <button className={style.icon_wrap} onClick={onIncrease}>
                        <AddIcon />
                    </button>
                </div>
                <div className={style.randombtn} title="Random" onClick={onRandom}>
                    <div>
                        <RandomIcon color="#currentColor" />
                    </div>
                    <div>Random</div>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <Menu inline>
                    <Link href={"/food/menu/a"}>
                        <MenuItem name={"ชื่อเมนู1"} price={500} image={testImage} />
                    </Link>
                    <Link href={"/food/menu/b"}>
                        <MenuItem name={"ชื่อเมนู2"} price={1500} image={testImage} />
                    </Link>
                    <Link href={"/food/menu/c"}>
                        <MenuItem name={"ชื่อเมนู3"} price={15000} image={testImage} />
                    </Link>
                    <Link href={"/food/menu/d"}>
                        <MenuItem name={"ชื่อเมนู4"} price={150000} image={testImage} />
                    </Link>
                    <Link href={"/food/menu/e"}>
                        <MenuItem name={"ชื่อเมนู5"} price={2500} image={testImage} />
                    </Link>
                </Menu>
            </div>
        </Paper>
    )
}
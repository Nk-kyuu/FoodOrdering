"use client";
import { useState } from "react";
import Input from "../../components/input/input";
import { Typography } from "../../components/typography/typography";
import { Dropdown } from "./components/dropdown";
import { DropdownItem } from "./components/dropdown-item";
import style from "./dashboard.module.css";
import { Menu } from "./components/menu";
import { MenuItem } from "./components/menu-item";
import Link from "next/link";
import { Paper } from "@/app/components/paper/paper";
import { RandomIcon } from "@/app/components/icon/random-con";
const testImage = "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKFRA9Hw1ddaiN8vczDH5awGUi4JQ7XTjwF2YTlnGfAZTGUAcQDXv.jpg"

export function Dashboard() {
    const [searchValue, setSearchValue] = useState('');
    const [selectCategory, setSelectCategory] = useState(0);

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }
    const onCategoryChange = (value: string | number) => {
        console.log(value);
    }

    return (

        <Paper mx="1rem" my="1rem">

            <div className={style.header_wrap}>
                <Typography size="h2" >Menu</Typography>
            </div>
            <div className={style.filter_wrapper}>
                <Input type="text" onChange={onSearch} label="Search" value={searchValue} />
                <div className={style.sub_filter_wrapper}>
                    <Link href={'/food/random'}>
                        <div className={style.randombtn} title="Random">
                            <RandomIcon color="#currentColor"/>
                        </div>
                    </Link>
                </div>
            </div>
            <ul className={style.category}>
                {["All", "TestA", "TestB", "TestC", "TestD"].map((label, index) => {

                    return <li key={index} onClick={() => setSelectCategory(index)} className={`${selectCategory === index && style.active}`}>{label}</li>
                })}
                
            </ul>
            <div className={style.content_wrapper}>
                <Menu inline>
                    <Link href={"/food/menu/a"}>
                        <MenuItem name={"ชื่อเมนู1ชื่อเมนู1ชื่อเมนู1ชื่อเมนู1"} price={500} image={testImage} />
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

    );
}
"use client";
import LoginStyles from "./login.module.css"
import { useEffect } from "react";

interface LoginButtonProps {
    onClick: () => void;
}
export function LoginButton({ onClick }: LoginButtonProps) {
    useEffect(() => {

    }, [])
    return (
        <button onClick={onClick} type="button" className={LoginStyles.loginButton}>login</button>
    )
}
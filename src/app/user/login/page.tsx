"use client";
import { LoginButton } from "./login-button";
import LoginStyles from "./login.module.css"
import { useState } from "react";
import Link from 'next/link'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login with:', username, password);
    }

    return (
        <div className={LoginStyles.loginContainer}>
            <h2 className={LoginStyles.loginTitle}>Login</h2>
            <form onSubmit={handleSubmit} className={LoginStyles.loginForm}>
                <div className={LoginStyles.formGroup}>
                    <label htmlFor="username">Username</label><br />
                    <input className={LoginStyles.formInput} type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className={LoginStyles.formGroup}>
                    <label htmlFor="password">Password</label><br />
                    <input className={LoginStyles.formInput} type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <p style={{ fontSize: 13, marginTop: -9}}>forgot password?</p>
                <LoginButton onClick={handleSubmit} />
            </form>
            <Link href="/user/register">
                <button className={LoginStyles.registerButton}>register</button>
            </Link>
            
        </div>
    );
}

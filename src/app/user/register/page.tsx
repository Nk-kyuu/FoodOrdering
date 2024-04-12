"use client"
import RegisterStyles from "./register.module.css"
import { RegisterButton } from "./register-button";
import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register with:', username, password, firstname, lastname, phoneno, email);
    }

    return (
        <div className={RegisterStyles.registerContainer}>
            <h2 className={RegisterStyles.loginTitle}>Registration</h2>
            <form onSubmit={handleSubmit} className={RegisterStyles.loginForm}>
                <div className={RegisterStyles.formGroup}>
                    <label htmlFor="username">Username</label><br />
                    <input className={RegisterStyles.formInput} type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className={RegisterStyles.formGroup}>
                    <label htmlFor="password">Password</label><br />
                    <input className={RegisterStyles.formInput} type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={RegisterStyles.formGroup}>
                    <div className={RegisterStyles.inline}>
                        <div>
                            <label htmlFor="firstname">First name</label><br />
                            <input className={RegisterStyles.formInput} type="text" name="firstname" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="lastname">Last name</label><br />
                            <input className={RegisterStyles.formInput} type="text" name="lastname" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className={RegisterStyles.formGroup}>
                    <label htmlFor="phoneno">Phone no</label><br />
                    <input className={RegisterStyles.formInput} type="text" name="phoneno" id="phoneno" value={phoneno} onChange={(e) => setPhoneno(e.target.value)}/>
                </div>
                <div className={RegisterStyles.formGroup}>
                    <label htmlFor="email">Email</label><br />
                    <input className={RegisterStyles.formInput} type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <RegisterButton onClick={handleSubmit}/>
            </form>
        </div>
    );
}

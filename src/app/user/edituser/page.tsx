"use client"
import EditStyles from "./edit.module.css"
import { EditButton } from "./edit-buttoon";
import { useState } from "react";

export default function Edituser() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
            phoneno: data.get('phoneno'),
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div className={EditStyles.editContainer}>
            <h2 className={EditStyles.editTitle}>Edit user</h2>
            <form onSubmit={handleSubmit} className={EditStyles.editForm}>
                <div className={EditStyles.formGroup}>
                    <div className={EditStyles.inline}>
                        <div>
                            <label htmlFor="firstname">First name</label><br />
                            <input className={EditStyles.formInput} type="text" name="firstname" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="lastname">Last name</label><br />
                            <input className={EditStyles.formInput} type="text" name="lastname" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className={EditStyles.formGroup}>
                    <label htmlFor="phoneno">Phone no</label><br />
                    <input className={EditStyles.formInput} type="text" name="phoneno" id="phoneno" value={phoneno} onChange={(e) => setPhoneno(e.target.value)}/>
                </div>
                <div className={EditStyles.formGroup}>
                    <label htmlFor="email">Email</label><br />
                    <input className={EditStyles.formInput} type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={EditStyles.formGroup}>
                    <label htmlFor="password">Password</label><br />
                    <input className={EditStyles.formInput} type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <EditButton/>
            </form>
        </div>
    );
}

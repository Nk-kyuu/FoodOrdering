"use client"
import { useEffect } from 'react';
import RegisterStyles from "./register.module.css"

interface RegisterButtonProps {
    onClick: () => void;
}

export function RegisterButton({ onClick }: RegisterButtonProps) {
    useEffect(() => {
        
    }, [])
    return(
        <button onClick={onClick} type="button" className={RegisterStyles.registerFormButton}>register</button>
    )         
}
    

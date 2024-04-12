"use client"
import { useEffect } from 'react';
import EditStyles from "./edit.module.css"

interface EditButtonProps {
    onClick?: () => void;
}

export function EditButton({ onClick }: EditButtonProps) {
    useEffect(() => {
        
    }, [])
    return(
        <button onClick={onClick} type="submit" className={EditStyles.editFormButton}>Edit</button>
    )         
}
import Link from 'next/link'
import NavStyles from "./navbarAdmin.module.css"

export function NavbarAdmin() {
    return(
        <div className={NavStyles.NavbarAdmin}>
            <div className={NavStyles.logo}>
                <h4> Admin Dashboard</h4>
            </div>
            <div className={NavStyles.item}>
                <ul className={NavStyles.item1}>
                    <li>
                        <Link href="/user/login">
                        <button className={NavStyles.logoutButton}>Logout</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
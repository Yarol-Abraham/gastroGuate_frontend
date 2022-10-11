import { NextPage } from "next";
import styles from './user.module.css';
import Link from "next/link";

const User: NextPage  = function () 
{
    return (
        <div className={styles.container_user}>
            <Link href="/">
                <a className={styles.a}>Mi perfil</a>
            </Link>
            <Link href="/">
                <a className={styles.a}>Cerrar Sesión</a>
            </Link>
            <Link href="/login">
                <a className={styles.a}>Login</a>
            </Link>   
        </div>
    )    
}

export default User;
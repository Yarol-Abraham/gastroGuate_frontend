import { NextPage } from "next";
import styles from './user.module.css';
import Link from "next/link";

import { useContext, useEffect } from 'react';
import AuthContext from '../../../../context/autenticacion/authContext';
import PropsAuth from '../../../../context/autenticacion/authReducer';

const User: NextPage  = function () 
{
    const _AuthContext = useContext(AuthContext);


    return (
        <div className={styles.container_user}>
           {
            _AuthContext?.tokenUser != "" ? (
                <>
                 <Link href="/">
                    <a className={styles.a}>Mi perfil</a>
                </Link>
                <Link href="/">
                    <a className={styles.a}>Cerrar Sesión</a>
                </Link>
                </>
            ) :   <Link href="/login">
            <a className={styles.a}>Login</a>
        </Link> 
           }  
        </div>
    )    
}

export default User;
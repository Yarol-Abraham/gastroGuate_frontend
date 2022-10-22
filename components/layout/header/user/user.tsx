import { NextPage } from "next";
import styles from './user.module.css';
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from 'react';
import AuthContext from '../../../../context/autenticacion/authContext';

const User: NextPage  = function () 
{
    const router = useRouter();
    const _AuthContext = useContext(AuthContext);

    const handleCerrarSesion = function () { _AuthContext?.cerrarSesion(); }

    useEffect(()=> {
        if(_AuthContext?.tokenUser == "") router.push("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_AuthContext?.tokenUser])

    return (
        <div className={styles.container_user}>
           {
            _AuthContext?.tokenUser != "" ? (
                <>
                 <Link href="/">
                    <a className={styles.a}>Mi perfil</a>
                </Link>
                <a onClick={handleCerrarSesion} href="#" className={styles.a}>Cerrar Sesión</a>
                </>
            ) :   <Link href="/login">
            <a className={styles.a}>Login</a>
        </Link> 
           }  
        </div>
    )    
}

export default User;
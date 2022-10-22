import { NextPage } from "next";
import { useRouter } from 'next/router'
import styles from '../autenticacion.module.css';
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/autenticacion/authContext";


const LoginComponent: NextPage = function () 
{
    const router = useRouter();
    const _AuthContext = useContext(AuthContext);
    
    const [data, setData ] = useState({
        usuario: "",
        password: ""
    });

    const handleLogin = function (e: any) 
    {
        e.preventDefault();
        
        if(data.usuario == "" || data.password == "" )
        {
            alert("Usuario o Contraseña incorrectas");
            return;
        }

        _AuthContext?.login(data);    
    }

    useEffect(()=> {
        if(_AuthContext?.tokenUser != "" ) router.push("/menu")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_AuthContext?.tokenUser, _AuthContext?.user])

    return (
        <main className={styles.main}>
            <div className={`container ${styles.container_login} ${styles.container_body}`}>
                <h1 className={styles.title}>Bienvenido a GastroGuate</h1>
                <p className={styles.paragraph}>Ingresa tus credenciales para continuar.</p>
                <div className={styles.container_content}>
                   <form className={styles.form}>
                       {
                        _AuthContext?.message != "" ?
                            <div className="alert alert-danger">
                                <p>{_AuthContext?.message}</p>
                            </div>
                            : null
                       }
                        <div className={styles.form_item}>
                            <label htmlFor="usuario">Usuario</label>
                            <input 
                                type="text" 
                                name="usuario"
                                placeholder="Ingresa tu usuario" 
                                className={styles.form_item_input} 
                                onChange={(e)=> setData({ ...data, usuario: e.target.value }) }   
                            />
                        </div>
                        <div  className={styles.form_item}>
                            <label htmlFor="usuario">Contraseña</label>
                            <input 
                                type="password"
                                name="password" 
                                placeholder="Ingresa tu contraseña" 
                                className={styles.form_item_input} 
                                onChange={(e)=> setData({ ...data, password: e.target.value })}   
                           />
                        </div>
                        <button 
                            type="submit"
                            className={`custom_btn_2  ${styles.btn_color_login}`}
                            onClick={(e)=> handleLogin(e)}    
                        >Iniciar Sesión</button>
                        <Link href="/register">
                            <a className={styles.link}>No tienes cuenta?, crea una</a>
                        </Link>
                   </form>
                </div>
            </div>
        </main>
    )    
}

export default LoginComponent
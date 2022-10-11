import { NextPage } from "next";
import styles from './login.module.css';
import Link from "next/link";

const LoginComponent: NextPage = function () 
{
    return (
        <main className={styles.main}>
            <div className={`container ${styles.container_login}`}>
                <h1 className={styles.title}>Bienvenido a GastroGuate</h1>
                <p className={styles.paragraph}>Ingresa tus credenciales para continuar.</p>
                <div className={styles.container_content}>
                   <form className={styles.form}>
                        <div className={styles.form_item}>
                            <label htmlFor="usuario">Usuario</label>
                            <input 
                                type="text" 
                                placeholder="Ingresa tu usuario" 
                                className={styles.form_item_input}    
                            />
                        </div>
                        <div  className={styles.form_item}>
                            <label htmlFor="usuario">Contraseña</label>
                            <input 
                                type="password" 
                                placeholder="Ingresa tu contraseña" 
                                className={styles.form_item_input}    
                           />
                        </div>
                        <button type="submit" className={`custom_btn_2  ${styles.btn_color_login}`}>Iniciar Sesión</button>
                        <Link href="/">
                            <a className={styles.link}>No tienes cuenta?, crea una</a>
                        </Link>
                   </form>
                </div>
            </div>
        </main>
    )    
}

export default LoginComponent
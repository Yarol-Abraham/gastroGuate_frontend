import { NextPage } from "next";
import Link from "next/link";
import styles from '../autenticacion.module.css';

const RegisterComponent: NextPage = function () 
{
    return(
        <main className={styles.main_register}>
            <div className={`container ${styles.container_register}`}>
                <h1 className={styles.title}>Bienvenido a GastroGuate</h1>
                <p className={styles.paragraph}>Ingresa tus datos para continuar.</p>
                <div className={styles.container_register_content}>
                    <form className={styles.form}>
                       <div className={styles.form_content}>
                            <div className={styles.form_item}>
                                <label htmlFor="nombre">Nombre</label>
                                <input 
                                    type="text" 
                                    placeholder="Ingresa tu nombre" 
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="Apellido">Apellido</label>
                                <input 
                                    type="text" 
                                    placeholder="Ingresa tu apellido" 
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={`${styles.form_item}  ${styles.form_item_usuario}`}>
                                <label htmlFor="usuario">Usuario</label>
                                <input 
                                    type="text" 
                                    placeholder="Ingresa tu Usuario" 
                                    className={`${styles.form_item_input}`}    
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
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Confirmar contraseña</label>
                                <input 
                                    type="password" 
                                    placeholder="Confirma tu contraseña" 
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Identificación</label>
                                <input 
                                    type="number" 
                                    placeholder="Ingresa tu Identificación (DPI)" 
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Correo</label>
                                <input 
                                    type="email" 
                                    placeholder="Ingresa tu correo" 
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Departamento</label>
                                <select className={styles.form_item_select}>
                                    <option value="1">Alta Verapaz</option>
                                    <option value="2">Baja Verapaz</option>
                                    <option value="3">Guatemala</option>
                                </select>
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Municipio</label>
                                <select className={styles.form_item_select}>
                                    <option value="1" style={{ padding: '1rem' }}>Alta Verapaz</option>
                                    <option value="2">Baja Verapaz</option>
                                    <option value="3">Guatemala</option>
                                </select>
                            </div>
                       </div>
                        <button type="submit" className={`custom_btn_2  ${styles.btn_color_login}`}>Registrarme</button>
                        <Link href="/login">
                            <a className={styles.link}>Ya tienes una cuenta?, inicia sesión</a>
                        </Link>
                    </form>
                </div>
            </div>
        </main>
    )    
}

export default RegisterComponent

import { NextPage } from "next";
import Link from "next/link";
import styles from '../autenticacion.module.css';
import { useContext, useEffect, useState } from "react";
import RegionesContext from "../../../context/regiones/regionesContext";
import AuthContext from "../../../context/autenticacion/authContext";
import { useRouter } from "next/router";
const RegisterComponent: NextPage = function () 
{
    const _RegionesContext = useContext(RegionesContext);
    const _AuthContext = useContext(AuthContext);
    const router = useRouter();
    

    const [ data, setData ] = useState({
        nombre: "",
        apellido: "",
        usuario: "",
        password: "",
        passwordConfirmar: "",
        identificacion: "",
        idTipoUsuario: 4,
        idMunicipio: 0,
        correo: ""
    });
    
    const handleRegister = function (e: any) 
    {
        e.preventDefault();
        
        if(
            data.nombre == "" || data.apellido == "" || data.usuario == "" || 
            data.password == "" || data.passwordConfirmar == "" || data.identificacion == "" ||
            data.idMunicipio == 0 || data.correo == ""
        )
        {
            alert("Todos los campos son obligatorios");
            return;
        }

        if(data.password != data.passwordConfirmar)
        {
            alert("Las contraseñas deben de ser iguales");
            return;    
        }

        _AuthContext?.register(data);
        
    }

    useEffect(()=>{
        if(_AuthContext?.status) router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_AuthContext?.status])

    return(
        <main className={styles.main_register}>
            <div className={`container ${styles.container_register}`}>
                <h1 className={styles.title}>Bienvenido a GastroGuate</h1>
                <p className={styles.paragraph}>Ingresa tus datos para continuar.</p>
                <div className={styles.container_register_content}>
                    <form 
                        className={styles.form}
                        onSubmit={(e) => handleRegister(e)}
                    >
                       <div className={styles.form_content}>
                            <div className={styles.form_item}>
                                <label htmlFor="nombre">Nombre</label>
                                <input 
                                    type="text" 
                                    placeholder="Ingresa tu nombre" 
                                    name="nombre"
                                    value={data.nombre}
                                    onChange={(e)=> setData({ ...data, nombre: e.target.value }) }   
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="Apellido">Apellido</label>
                                <input 
                                    type="text" 
                                    placeholder="Ingresa tu apellido" 
                                    name="apellido"
                                    value={data.apellido}
                                    onChange={(e)=> setData({ ...data, apellido: e.target.value }) }   
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={`${styles.form_item}  ${styles.form_item_usuario}`}>
                                <label htmlFor="usuario">Usuario</label>
                                <input 
                                    type="text" 
                                    placeholder="Ingresa tu Usuario"
                                    name="usuario"
                                    value={data.usuario}
                                    onChange={(e)=> setData({ ...data, usuario: e.target.value }) }    
                                    className={`${styles.form_item_input}`}    
                                />
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Contraseña</label>
                                <input 
                                    type="password" 
                                    placeholder="Ingresa tu contraseña" 
                                    name="password"
                                    value={data.password}
                                    onChange={(e)=> setData({ ...data, password: e.target.value }) }    
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Confirmar contraseña</label>
                                <input 
                                    type="password" 
                                    placeholder="Confirma tu contraseña" 
                                    name="passwordConfirmar"
                                    value={data.passwordConfirmar}
                                    onChange={(e)=> setData({ ...data, passwordConfirmar: e.target.value }) }    
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Identificación</label>
                                <input 
                                    type="number" 
                                    placeholder="Ingresa tu Identificación (DPI)" 
                                    name="identificacion"
                                    value={data.identificacion}
                                    onChange={(e)=> setData({ ...data, identificacion: e.target.value }) }    
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Correo</label>
                                <input 
                                    type="email" 
                                    placeholder="Ingresa tu correo" 
                                    name="correo"
                                    value={data.correo}
                                    onChange={(e)=> setData({ ...data, correo: e.target.value }) }    
                                    className={styles.form_item_input}    
                                />
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Departamento</label>
                                <select className={styles.form_item_select}>
                                    {
                                        _RegionesContext?.departamentos.map(el => (
                                            <option key={el.id} value={el.id}>{el.nombre}</option>    
                                        ))
                                    }
                                </select>
                            </div>
                            <div  className={styles.form_item}>
                                <label htmlFor="usuario">Municipio</label>
                                <select 
                                    className={styles.form_item_select}
                                    name="idMunicipio"
                                    value={data.idMunicipio}
                                    onChange={(e)=> setData({ ...data, idMunicipio: Number(e.target.value) }) }    
                                >
                                    <option value="0">Seleccionar Opcion</option>
                                    {
                                        _RegionesContext?.municipios.map(el => (
                                            <option key={el.id} value={el.id}>{el.nombre}</option>    
                                        ))
                                    }
                                </select>
                            </div>
                       </div>
                        <button 
                            type="submit" 
                            className={`custom_btn_2  ${styles.btn_color_login}`}
                        >Registrarme</button>
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
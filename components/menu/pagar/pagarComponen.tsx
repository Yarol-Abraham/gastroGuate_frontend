import { NextPage } from "next";
import styles from './pagar.module.css';
import Image from "next/image";
import AuthContext from "../../../context/autenticacion/authContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import PedidosContext from "../../../context/pedidos/pedidosContext";

const PagarComponent: NextPage  = function () 
{
    const _AuthContext = useContext(AuthContext);
    const _PedidosContext = useContext(PedidosContext);
    const router = useRouter();
    const [ data, setData ] = useState({
        ubicacion: "",
        descripcion: ""
    })

    useEffect(()=>{
        if(_AuthContext?.tokenUser == "") router.push("/");
        if(_PedidosContext?.pedidos.length == 0) router.push("/menu");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_AuthContext?.tokenUser, _PedidosContext?.pedidos])

    const handlePedido = function (e: any) 
    {
        e.preventDefault();

        if(data.descripcion == "" || data.ubicacion == "")
        {
            alert("todos los campos son obligatorios");
            return;
        }
        
        let pedidos = _PedidosContext?.pedidos || [];
        if(pedidos.length > 0)
        {
            pedidos?.forEach(el => {
                el.id_usuario = Number(_AuthContext?.user.id);
                el.descripcion = data.descripcion;
                el.ubicacion = data.ubicacion;
            })
            _PedidosContext?.realizarPedido(pedidos, _AuthContext?.tokenUser || "");
        }

    }

    return (
        <>
            {
            _AuthContext?.tokenUser != "" ? (
                <main className={`${styles.main_content} main_normal container`}>
                    <form 
                        className={styles.main_item}
                        onSubmit={(e) => handlePedido(e)}
                    >
                        <label htmlFor="nombre" className={styles.main_item_label}>Nombre Completo</label>
                        <input type="text" name="nombre" className={styles.form_item_input} value={`${_AuthContext?.user.nombre} ${_AuthContext?.user.apellido}`} disabled />
                        <label htmlFor="identificacion" className={styles.main_item_label}>Identificación</label>
                        <input type="text" name="identificacion" className={styles.form_item_input} value={_AuthContext?.user.identificacion} disabled />
                        <label htmlFor="correo" className={styles.main_item_label}>Correo</label>
                        <input type="text" name="correo" className={styles.form_item_input} value={_AuthContext?.user.correo} disabled />
                        <label htmlFor="ubicacion"  className={styles.main_item_label} >Escribe tu ubicacion</label>
                        <input 
                            type="text" 
                            name="ubicacion" 
                            onChange={(e)=> setData({ ...data, ubicacion: e.target.value }) } 
                            className={styles.form_item_input} 
                        />

                        <label htmlFor="descripcion"  className={styles.main_item_label} >Datos Adicionales (Referencia, telefono, para ubicarte lo más rapido posible)</label>
                        <input 
                            type="text" name="descripcion" 
                            onChange={(e)=> setData({ ...data, descripcion: e.target.value }) } 
                            className={styles.form_item_input} 
                        />
                        <h3 className={styles.title_total}>Total a cancelar Q {_PedidosContext?.total}</h3>
                        <button type="submit" className={`custom_btn_2  ${styles.btn_color_shopping}`}>Realizar Pedido</button>
                    </form>
                    <div className={styles.main_item}>
                        <Image 
                            width={500}
                            height={500}
                            src="/image/cart.png"
                            alt="imagen"
                        />
                        <h1 className={styles.title}>Ya casi terminamos!</h1>
                    </div>
                </main>
                ) : (
                    <main  className={`main_normal container`}>
                          <h2 className={styles.title}>Cargando...!</h2>
                    </main>
                )
            }
        </>
        
    )
}

export default PagarComponent;
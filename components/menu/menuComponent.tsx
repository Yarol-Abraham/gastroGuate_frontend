import { NextPage } from "next";
import Categorias from "./categorias/categorias";
import Platillos from "./platillos/platillos";
import styles from './menu.module.css';
import PedidosContext from "../../context/pedidos/pedidosContext";
import AuthContext from "../../context/autenticacion/authContext";
import { useContext, useEffect, useState } from "react";

const MenuComponent: NextPage = function () 
{
    const _AuthContext = useContext(AuthContext);
    const _PedidosContext = useContext(PedidosContext);

    useEffect(()=>{
        _PedidosContext?.updateMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_PedidosContext?.message])
    
    return (
        <main className={`${styles.menu} main_normal container`}>
            <div className={styles.main_categoria}>
                <Categorias />
            </div>

            <div className={styles.main_content} >
             
                <div className={styles.main_content_buscador}>
                {
                        _AuthContext?.tokenUser != "" ?
                        (<h1>
                            Bienvenido, {_AuthContext?.user.nombre} {_AuthContext?.user.apellido}
                        </h1>
                        ) : null
                    }
                    {
                        _PedidosContext?.message != "" ? (
                            <div className="alert alert-success">
                                <p>{_PedidosContext?.message}</p>
                            </div>
                        ) : null
                    }
                </div>
                <div className={styles.main_content_platillos}>
                    <Platillos />
                </div>
            </div>
           
        </main>
    )    
}

export default MenuComponent;
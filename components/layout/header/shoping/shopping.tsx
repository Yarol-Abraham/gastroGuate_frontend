import { NextPage } from "next";
import { useContext } from "react";
import styles from './shopping.module.css';
import ShoppingItem from './item/shoppingItem'
import AuthContext from '../../../../context/autenticacion/authContext';
import PedidosContext from '../../../../context/pedidos/pedidosContext';
import { v4 } from "uuid";

interface Props {
    shoping: boolean,
    handleShoping: Function
}

const Shopping: NextPage<Props> = function ({ shoping, handleShoping }) 
{
    const _AuthContext = useContext(AuthContext);
    const _PedidosContext = useContext(PedidosContext);

    const handleShopingClick = function () 
    {

        if(_AuthContext?.tokenUser == "")
        {
            alert("No hay sesión activa para continuar con el proceso de compra");
            return; 
        }

        if(_PedidosContext?.pedidos.length == 0)
        {
            alert("No hay platillos agregados para realizar la compra");
            return; 
            
        }

        console.log("pasar a la siguiente etapa del pago")


    }

    //TODO: AGREGAR CANTIDAD A CADA ITEM Y REALIZAR LOGIN DE USUARIO

    /*

        TAREAS PENDIENTES:
            TERMINAR EL PROCESO DE COMPRA
            TERMINAR EL PROCESO DE REGISTRO DE USUARIO
            DASHBOARD PARA VER LOS PEDIDOS ENVIADOS - COMPRA
            DASHBOARD PARA VER LOS PEDIDOS RECIBIDOS - CREAR PEDIDO - VENDE
            CERRAR SESION
    */


    return(
        <div className={`${styles.shoping_bg} ${shoping ? '' : styles.hidden}`}>
            <div className={styles.shoping}>
                <div className={styles.shoping_header}>
                    <h4>Carrito</h4>
                    <button type="button" className={`${styles.btn_color} custom_btn`} onClick={()=>handleShoping()} >
                       <p> Cerrar</p>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                {
                    _PedidosContext?.pedidos.map(el => (
                        <ShoppingItem 
                            key={v4()}
                            descripcion= {el.descripcion}
                            cantidad={el.cantidad}
                            total={el.total}
                            ubicacion={el.ubicacion}
                            id_usuario={el.id_usuario}
                            id_platillo= {el.id_platillo}
                            precio_platillo= {el.precio_platillo}
                            cantidad_platillo= {el.cantidad_platillo}
                            image_url={el.image_url}
                        />
                    ))
                }
                <div className={styles.shopping_footer}>
                   <button onClick={handleShopingClick} className={`custom_btn_2  ${styles.btn_color_shopping}`}>Procesar Compra</button>
                </div>
            </div>
        </div>
    )
}

export default Shopping; 
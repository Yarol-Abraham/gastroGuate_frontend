import { NextPage } from "next";
import styles from './shoppingItem.module.css';
import { pedido } from '../../../../../context/pedidos/pedidosInterface';
import PedidosContext from "../../../../../context/pedidos/pedidosContext";
import { useContext, useState } from "react";

const ShoppingItem: NextPage<pedido> = function (pedido: pedido) 
{
    const _PedidosContext = useContext(PedidosContext);
    const { id_platillo, precio_platillo, descripcion, cantidad_platillo, image_url, cantidad } = pedido;
    const [ quantity, setQuantity ] = useState(cantidad);

    const handleDeletePlatillo = function (id_platillo: number) 
    {
        _PedidosContext?.deletePlatillo(id_platillo);
    }

    const handleMinusPlatillo = function () 
    { 
        if(quantity > 1) 
        {
            setQuantity(quantity - 1); 
            let buscarPedido = _PedidosContext?.pedidos.filter(el => el.id_platillo == id_platillo) || [];
            if(buscarPedido.length > 0)
            {
                let pedido = buscarPedido[0];
                pedido.cantidad = quantity - 1;
                pedido.total = pedido.cantidad * pedido.precio_platillo;
                _PedidosContext?.updateDataPedido(pedido);
            }
        }
    }

    const handlePlusPlatillo = function ()
    {
        if(quantity < cantidad_platillo)
        {
            setQuantity(quantity + 1);
            let buscarPedido = _PedidosContext?.pedidos.filter(el => el.id_platillo == id_platillo) || [];
            if(buscarPedido.length > 0)
            {
                let pedido = buscarPedido[0];
                pedido.cantidad = quantity + 1;
                pedido.total = pedido.cantidad * pedido.precio_platillo;
                _PedidosContext?.updateDataPedido(pedido);
            }
        }
    }

    return (
        <div className={styles.shoping_item}>
            <div className={styles.shoping_item_img}>
                { /* eslint-disable-next-line @next/next/no-img-element */ }
                <img src={`http://localhost:8000/media/${image_url}`} alt="item shoping" />
            </div>
            <div className={styles.shoping_content}>
                <h4>{descripcion}</h4>
                <p>Precio Q{precio_platillo}</p>
                <p>Disponible: {cantidad_platillo}</p>
               <div className={styles.shoping_content_quantity}>
                    <button type="button" onClick={handleMinusPlatillo} className={`custom_btn_2 ${styles.shoping_button_color}`} >-</button>
                    <input type="number" min={1} max={cantidad_platillo} value={quantity} disabled className={styles.shopping_content_input}/>
                    <button type="button" onClick={handlePlusPlatillo} className={`custom_btn_2 ${styles.shoping_button_color}`} >+</button>
               </div>
            </div>
            <div className={styles.shoping_icons}>
            <button type="button" onClick={(e)=> handleDeletePlatillo(id_platillo) }> 
                    <i className="fa-solid fa-xmark"></i>
            </button>
            </div>
        </div>
    )    
}

export default ShoppingItem
import { NextPage } from "next";
import styles from './shoppingItem.module.css';
import { pedido } from '../../../../../context/pedidos/pedidosInterface';

const ShoppingItem: NextPage<pedido> = function (pedido: pedido) 
{
    const {  precio_platillo, descripcion, image_url } = pedido;
    return (
        <div className={styles.shoping_item}>
            <div className={styles.shoping_item_img}>
                { /* eslint-disable-next-line @next/next/no-img-element */ }
                <img src={`http://localhost:8000/media/${image_url}`} alt="item shoping" />
            </div>
            <div className={styles.shoping_content}>
                <h4>{descripcion}</h4>
                <p>Q{precio_platillo}</p>
            </div>
            <div className={styles.shoping_icons}>
            <button type="button"> 
                    <i className="fa-solid fa-xmark"></i>
            </button>
            </div>
        </div>
    )    
}

export default ShoppingItem
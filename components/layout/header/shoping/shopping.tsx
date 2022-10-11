import { NextPage } from "next";
import styles from './shopping.module.css';
import ShoppingItem from './item/shoppingItem'

interface Props {
    shoping: boolean,
    handleShoping: Function
}

const Shopping: NextPage<Props> = function ({ shoping, handleShoping }) 
{
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
                <ShoppingItem />
                <ShoppingItem />
                <ShoppingItem />
                <div className={styles.shopping_footer}>
                   <button className={`custom_btn_2  ${styles.btn_color_shopping}`}>Procesar Compra</button>
                </div>
            </div>
        </div>
    )
}

export default Shopping; 
import { NextPage } from "next";
import styles from './shoping.module.css';

interface Props {
    shoping: boolean,
    handleShoping: Function
}

const Shoping: NextPage<Props> = function ({ shoping, handleShoping }) 
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
                <div className={styles.shoping_item}>
                    <div className={styles.shoping_item_img}>
                        { /* eslint-disable-next-line @next/next/no-img-element */ }
                        <img src="/image/item_2.jpg" alt="item shoping" />
                    </div>
                    <div className={styles.shoping_content}>
                        <h4>Tercera Mano para Soldar con Lupa, KS-901208</h4>
                        <p>1 x Q55</p>
                    </div>
                    <div className={styles.shoping_icons}>
                       <button type="button"> 
                            <i className="fa-solid fa-xmark"></i>
                       </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shoping; 
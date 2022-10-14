import { NextPage } from "next";
import styles from './categorias.module.css';

const Categorias:NextPage = function () 
{
    return(
        <ul className={styles.ul}>
            <li className={styles.li}>
                <p>Desayunos</p>
                <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className={styles.li}>
                <p>Almuerzos</p>
                <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className={styles.li}>
                <p>Cenas</p>
                <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className={styles.li}>
                <p>Bebidas</p>
                <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className={styles.li}>
                <p>Postres</p>
                <i className="fa-solid fa-angle-right"></i>
            </li>
        </ul>
    )    
}

export default Categorias
import { NextPage } from "next";
import styles from './categorias.module.css';
import CategoriasContext from "../../../context/categorias/categoriasContext";
import { useContext } from "react";

const Categorias:NextPage = function () 
{
    const _CategoriasContext = useContext(CategoriasContext);

    if(_CategoriasContext?.categorias.length == 0) return <p>No hay categorias disponibles....</p>

    return(
        <ul className={styles.ul}>
            {
                _CategoriasContext?.categorias.map(el => (
                   
                    <li key={el.id} className={styles.li}>
                        <p>{el.tipo}</p>
                        <i className="fa-solid fa-angle-right"></i>
                    </li>
                ))
            }
            {/* <li className={styles.li}>
                <p>Desayunos</p>
                <i className="fa-solid fa-angle-right"></i>
            </li>
             */}
        </ul>
    )    
}

export default Categorias
import { NextPage } from "next";
import styles from './categorias.module.css';
import CategoriasContext from "../../../context/categorias/categoriasContext";
import PlatillosContext from "../../../context/platillos/platillosContext";
import { useContext } from "react";
import { filterCategoria } from "../../../context/categorias/categoriasInterface";

const Categorias:NextPage = function () 
{
    const _CategoriasContext = useContext(CategoriasContext);
    const _PlatillosContext = useContext(PlatillosContext);

    const handleCategoria = function({ id_categoria }:filterCategoria) 
    {
        _PlatillosContext?.getPlatillos({ id_categoria });
    }

    if(_CategoriasContext?.categorias.length == 0) return <p>No hay categorias disponibles....</p>

    return(
        <ul className={styles.ul}>
            {
                _CategoriasContext?.categorias.map(el => (
                   
                    <li onClick={()=>handleCategoria({id_categoria: el.id})} key={el.id} className={styles.li}>
                        <p>{el.tipo}</p>
                        <i className="fa-solid fa-angle-right"></i>
                    </li>
                ))
            }
            <li onClick={()=>handleCategoria({id_categoria: 0})}  className={styles.li}>
                <p>Todas las categorias</p>
                <i className="fa-solid fa-angle-right"></i>
            </li>
        </ul>
    )    
}

export default Categorias
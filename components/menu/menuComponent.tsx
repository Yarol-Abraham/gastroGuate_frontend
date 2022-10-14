import { NextPage } from "next";
import Categorias from "./categorias/categorias";
import Platillos from "./platillos/platillos";
import styles from './menu.module.css';

const MenuComponent: NextPage = function () 
{
    return (
        <main className={`${styles.menu} main_normal container`}>
            <div className={styles.main_categoria}>
                <Categorias />
            </div>

            <div className={styles.main_content} >
                <div className={styles.main_content_buscador}>
                    buscador
                </div>
                <div className={styles.main_content_platillos}>
                    <Platillos />
                </div>
            </div>
           
        </main>
    )    
}

export default MenuComponent;
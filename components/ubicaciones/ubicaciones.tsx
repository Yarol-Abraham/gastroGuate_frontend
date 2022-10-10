import { NextPage } from "next";
import styles from './ubicaciones.module.css';
import Image from "next/image";

const Ubicaciones: NextPage = function() 
{
    return (
        <section  className={`container`}>
           <div className={styles.section}>
                <div className={styles.section_item}>
                    <h2 className={styles.title}>Encuentra tus platillos en todo el país.</h2>
                    <p className={styles.paragraph}>No dejes de comprar tus platillos favoritos en cualquier lado del país.</p>
                    <p className={styles.paragraph}>Te facilitamos la busqueda de tus platillos que mas te gustan de una manera facil.</p>
                    <span className={styles.spacing}></span>
                </div>
                <div className={styles.section_imagen}>
                    <Image
                        src="/image/guatemala.png"
                        alt="Imagen de guatemala"
                        width={500}
                        height={500}
                    />
                </div>
           </div>
        </section>
    )
}

export default Ubicaciones
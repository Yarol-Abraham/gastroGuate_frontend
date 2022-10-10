import type { NextPage } from 'next'
import styles from './compras.module.css'
import Card from './pasos/card'

const Compras: NextPage = function () {
    return (
        <section className={`container ${styles.section}`}>
            <h2 className={styles.title}>Proceso de Compra</h2>
            <p className={styles.paragraph}>Sigue los siguientes pasos para realizar una compra.</p>
            <p className={styles.paragraph}>De manera facil y en tan solo unos click, tendras tu orden lista para ser entregada</p>
            <div className={styles.container_cards}>
                <Card 
                    title={"Escoge y Ordena"} 
                    paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, numquam! Tempora quis quisquam perspiciatis facilis voluptates quam facere dignissimos consectetur."}
                    imagen={"eleccion.png"}
                />
               <Card 
                    title={"Identifica tu Ubicación"} 
                    paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, numquam! Tempora quis quisquam perspiciatis facilis voluptates quam facere dignissimos consectetur."}
                    imagen={"ubicacion.png"}
                />
                <Card 
                    title={"Paga y Listo"} 
                    paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, numquam! Tempora quis quisquam perspiciatis facilis voluptates quam facere dignissimos consectetur."}
                    imagen={"dinero.png"}
                />
            </div>
        </section>
    )
}

export default Compras;
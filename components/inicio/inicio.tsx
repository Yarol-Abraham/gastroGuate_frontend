import type { NextPage } from 'next';
import styles from './inicio.module.css';

const Inicio: NextPage = () => {
  
  return (
    <>
        <main className='main container'>
            <h1 className={styles.title}>¡Vos, Vamos a Comer Puees!</h1>
            <p className={styles.paragraph}>Aqui puedes encontrar de todo tipo de comida bien chilera,barata y sobre todo chapina.</p>
            <div className="text-box">
              <a href="#" className={`${styles.btn} ${styles.btn_white} ${styles.btn_animate} `}>Ir al menú</a>
            </div>
        </main>
    </>
  )
}

export default Inicio

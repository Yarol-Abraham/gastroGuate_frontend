import type { NextPage } from 'next';
import styles from './inicio.module.css';

const Inicio: NextPage = () => {
  
  return (
    <>
        <main className='main container'>
          <div className={styles.overlay_main}></div>
            <h1 className={styles.title}>¡Vos Vamos a Comer Puees!</h1>
            <p className={styles.paragraph}>Aqui puedes encontrar de todo tipo de comida bien chilera,barata y sobre todo chapina.</p>
        </main>
    </>
  )
}

export default Inicio

import type { NextPage } from 'next'
import { useState } from 'react';
import styles from './header.module.css';
import Shoping from './shoping/shoping';

/*
_ = indica que es una variable (solo aplica si ya existe otra variable o funcion con el nombre deseado)
*/

const Header: NextPage = () => {

  const [ _menu, setmenu ] = useState(false)
  const [ shoping, setShoping ] = useState(false);

  const handleShoping = ()=> setShoping(!shoping);  

  return (
    <>
    <header className={styles.header}>
      <a href="#" className={styles.logo}><i className="fas fa-utensils"></i>GastroGuate.</a>

      <nav className={`${styles.navbar} ${_menu ? styles.active : ''} `}>
          <a className={styles.active} href="#home">Inicio</a>
          <a href="#">Menu</a>
          <a href="#dishes">Regiones</a>
          <a href="#about">Ofertas</a>
          <a href="#menu">Vendedores</a>
      </nav>

      <div className={styles.icons}>
          <i className={`${styles.i} fas fa-bars ${styles.menu_bars}`} onClick={() => setmenu(!_menu)}></i>
          {/* <i className="fas fa-search" id="search-icon"></i> */}
          <a href="#" className="fas fa-shopping-cart" onClick={handleShoping}></a>
          <a href="#" className="fas fa-user"></a>
          <Shoping shoping={shoping} handleShoping={handleShoping} />
      </div>

    </header> 
    </>
  )
}

export default Header


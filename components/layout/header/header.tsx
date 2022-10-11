import type { NextPage } from 'next'
import { useState } from 'react';
import styles from './header.module.css';
import Shopping from './shoping/shopping';
import User from './user/user';

/*
_ = indica que es una variable (solo aplica si ya existe otra variable o funcion con el nombre deseado)
*/

const Header: NextPage = () => {

  const [ _menu, setmenu ] = useState(false);
  const [ shoping, setShoping ] = useState(false);
  const [ user, setUser ] = useState(false);

  const handleShoping = ()=> setShoping(!shoping);  
  const handleUser = ()=> setUser(!user);  

  return (
    <>
    <header className={styles.header}>
      <a href="#" className={styles.logo}><i className="fas fa-utensils"></i>GastroGuate.</a>

      <nav className={`${styles.navbar} ${_menu ? styles.active : ''} `}>
          <a className={`${styles.a} ${styles.active}`} href="#home">Inicio</a>
          <a href="#" className={styles.a}>Menu</a>
          <a href="#dishes" className={styles.a}>Regiones</a>
          <a href="#about" className={styles.a}>Ofertas</a>
          <a href="#menu" className={styles.a}>Vendedores</a>
      </nav>

      <div className={styles.icons}>
          <i className={`${styles.i} fas fa-bars ${styles.menu_bars}`} onClick={() => setmenu(!_menu)}></i>
          <a className={`${styles.a} fas fa-shopping-cart`} onClick={handleShoping}></a>
          <a className={`${styles.a} fas fa-user`} onClick={handleUser}></a>
          <Shopping shoping={shoping} handleShoping={handleShoping} />
          { user ? <User /> : null }
      </div>

    </header> 
    </>
  )
}

export default Header


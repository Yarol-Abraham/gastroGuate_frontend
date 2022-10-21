import type { NextPage } from 'next'
import { useState } from 'react';
import styles from './header.module.css';
import Shopping from './shoping/shopping';
import User from './user/user';
import Link from 'next/link';

const Header: NextPage = () => {

  const [ _menu, setmenu ] = useState(false);
  const [ shoping, setShoping ] = useState(false);
  const [ user, setUser ] = useState(false);

  const handleShoping = ()=> setShoping(!shoping);  
  const handleUser = ()=> setUser(!user);  

  return (
    <>
    <header className={styles.header}>
      <Link href={"/"}> 
        <a className={styles.logo}><i className="fas fa-utensils"></i>GastroGuate.</a>
      </Link>

      <nav className={`${styles.navbar} ${_menu ? styles.active : ''} `}>
          <Link href={"/"}>
            <a className={`${styles.a} ${styles.active}`}>Inicio</a>
          </Link>
          <Link href={"/menu"}>
            <a className={styles.a}>Menu</a>
          </Link>
          <a href="#dishes" className={styles.a}>Departamentos</a>
          {/* <a href="#about" className={styles.a}>Ofertas</a> */}
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


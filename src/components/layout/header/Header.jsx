import React, {useState} from 'react';
import { navLinksHeader } from '@data/navLinksHeader.js';
import styles from "@layout/header/header.module.scss";

import { CartButton } from '@buttons/CartButton/CartButton.jsx';

export function Header() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/">
        <img src="/src/assets/images/logo/logo.svg" alt="logo" className={styles.logo} />
        </a>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <div className={styles.navLinksHeader}>
            {navLinksHeader.map((link,index ) => (
              <a key={index} href={link.link}>{link.name}</a>
            ))}
          </div>

         <CartButton></CartButton>
          
        </nav>

        <button className={styles.sidebar} onClick={() => setIsOpen(!isOpen)}>
            <img src="./src/assets/images/icons/burger_menu.svg" alt="Sidebar"/>
        </button>
          
       </div>
    </header>
  )
}

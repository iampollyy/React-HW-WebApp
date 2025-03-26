import React, {useState} from 'react';
import { navLinksHeader } from '@data/navLinksHeader.js';
import styles from "@layout/header/header.module.scss";

import { CartButton } from '@buttons/cartButton/CartButton.jsx';
import { BurgerMenuButton } from '@buttons/burgerMenu/BurgerMenuButton.jsx';
import Logo from '@images/logo/logo.svg';

export function Header() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/">
          <img src={Logo} alt="logo" className={styles.logo} />
        </a>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <div className={styles.navLinksHeader}>
            {navLinksHeader.map((link,index ) => (
              <a key={index} href={link.link} id={styles.a}>{link.name}</a>
            ))}
          </div>

         <CartButton/>
          
        </nav>

       
        <BurgerMenuButton onClick={() => setIsOpen(!isOpen)} />
          
       </div>
    </header>
  )
}

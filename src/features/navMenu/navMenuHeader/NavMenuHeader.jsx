import React, {useState} from 'react';

import styles from './navMenuHeader.module.scss';


import { navLinksHeader } from '@config/navLinksHeader.js';
import { Cart } from '@features/cart/Cart.jsx';
import { BurgerMenuButton } from '@features/navMenu/burgerMenu/BurgerMenuButton.jsx';

import {useAuth} from "@context/authContext";

export const NavMenuHeader = () =>{
const {user, logout} = useAuth();

  const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    }


    return (
      <div className={styles.mainMenu}>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <div className={styles.navLinksHeader}>
            {navLinksHeader.map((link, index) => {
               if (user && link.name === 'Login') return null
               return (<a key={index} href={link.link} id={styles.a}>{link.name}</a>)
            })}
            {user && (<button id={styles.a} onClick={logout}>Logout</button>)}
          </div>
          <Cart />
        </nav>

        <BurgerMenuButton isOpen={isOpen} onClick={handleClick} />
      </div>
    );
  }


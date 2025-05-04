import React, { useState } from 'react';
import styles from './navMenuHeader.module.scss';

import { navLinksHeader } from '@config/navLinksHeader.js';
import { Cart } from '@features/cart/Cart.jsx';
import { BurgerMenuButton } from '@features/navMenu/burgerMenu/BurgerMenuButton.jsx';

export const NavMenuHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.mainMenu}>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <div className={styles.navLinksHeader}>
          {navLinksHeader.map((link, index) => (
            <a key={index} href={link.link} id={styles.a}>
              {link.name}
            </a>
          ))}
        </div>
        <Cart />
      </nav>

      <BurgerMenuButton isOpen={isOpen} onClick={handleClick} />
    </div>
  );
};

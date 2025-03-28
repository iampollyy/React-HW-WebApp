import React, { useState } from 'react';
import { navLinksHeader } from '@data/navLinksHeader.js';
import styles from '@ui/navMenuHeader/navMenuHeader.module.scss';

import { CartButton } from '@buttons/cartButton/CartButton.jsx';
import { BurgerMenuButton } from '@buttons/burgerMenu/BurgerMenuButton.jsx';

export function NavMenuHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mainMenu}>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <div className={styles.navLinksHeader}>
          {navLinksHeader.map((link, index) => (
            <a key={index} href={link.link} id={styles.a}>{link.name}</a>
          ))}
        </div>
        <CartButton />
      </nav>

      <BurgerMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
}

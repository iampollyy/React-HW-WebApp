import React, { Component } from 'react';

import styles from './navMenuHeader.module.scss';


import { navLinksHeader } from '@config/navLinksHeader.js';
import { Cart } from '@features/cart/Cart.jsx';
import { BurgerMenuButton } from '@features/navMenu/burgerMenu/BurgerMenuButton.jsx';

export class NavMenuHeader extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  
  handleClick = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
   

    return (
      <div className={styles.mainMenu}>
        <nav className={`${styles.nav} ${this.state.isOpen ? styles.navOpen : ''}`}>
          <div className={styles.navLinksHeader}>
            {navLinksHeader.map((link, index) => (
              <a key={index} href={link.link} id={styles.a}>{link.name}</a>
            ))}
          </div>
          <Cart />
        </nav>

        <BurgerMenuButton isOpen={this.state.isOpen} onClick={this.handleClick} />
      </div>
    );
  }
}

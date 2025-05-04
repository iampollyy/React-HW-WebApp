import React, { Component } from 'react';


import { CartContext } from '@context/CartContext';
import { ButtonPattern } from '@ui/button/ButtonPattern';
import Cart_img from '@images/icons/cart.svg';
import styles from './cart.module.scss';

export class Cart extends Component {
  static contextType = CartContext;

  render() {
    const { cart } = this.context;
    const cartCount = Object.values(cart).reduce((acc, amount) => acc + amount, 0);

    return (
      <ButtonPattern
        type="button"
        variant="primary"
        size="sm"
        className={styles.cart}
      >
        <img src={Cart_img} alt="cart" />
        <div className={styles.counter}>
          <p className={styles.counter__value}>{cartCount}</p>
        </div>
      </ButtonPattern>
    );
  }
}

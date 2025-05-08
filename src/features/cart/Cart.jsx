import React, { useContext } from 'react';

import { CartContext } from '@context/CartContext';
import { ButtonPattern } from '@ui/button/ButtonPattern';
import Cart_img from '@images/icons/cart.svg';
import styles from './cart.module.scss';

export const Cart = () => {
  const { cart } = useContext(CartContext);

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
};

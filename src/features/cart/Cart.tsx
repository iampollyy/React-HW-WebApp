import React from 'react';
import { useCart } from '@hooks';
import { ButtonPattern } from '@ui';
import Cart_img from '@images/icons/cart.svg';
import styles from './cart.module.scss';

const Cart: React.FC = () => {
    const { cart } = useCart();

    const cartCount = cart.reduce((acc, item) => acc + item.amount, 0);

    return (
        <ButtonPattern
            type="button"
            variant="primary"
            size="sm"
            className={styles.cart}
        >
            <img src={Cart_img} alt="cart" />
            {cartCount > 0 && (
                <div className={styles.counter}>
                    <p className={styles.counter__value}>{cartCount}</p>
                </div>
            )}
        </ButtonPattern>
    );
};

export default Cart;

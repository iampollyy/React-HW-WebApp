import React, { Component } from 'react';
import { CartContext } from '@context/CartContext';
import { ButtonPattern } from '@ui/button/ButtonPattern';
import { Input } from '@ui/input/Input';
import styles from './productCard.module.scss';

export class ProductCard extends Component {
  static contextType = CartContext;

  state = {
    amount: 0,
  };

  handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    this.setState({ amount: value >= 0 ? value : 0 });
  };

  handleAddToCart = () => {
    const { addToCart } = this.context;
    const { amount } = this.state;
    const { item } = this.props;
    if (amount > 0) {
      addToCart(item.id, amount);
      this.setState({ amount: 0 });
    }
  };

  render() {
    const { item } = this.props;
    const { amount } = this.state;

    return (
      <div className={styles.card}>
        <div className={styles.container}>
          <img src={item.img} alt={item.meal} className={styles.image} />
          <div className={styles.aboutBurger}>
            <div className={styles.title__price}>
              <p className={styles.title}>{item.meal}</p>
              <p className={styles.price}>${item.price} USD</p>
            </div>
            <p className={styles.description}>
              {item.instructions.slice(0, 120)}
            </p>
            <div className={styles.add_to_cart__actions}>
              <Input
                size="md"
                type="number"
                onChange={this.handleChange}
              />
              <ButtonPattern
                variant="primary"
                size="md"
                className={styles.add_to_cart}
                onClick={this.handleAddToCart}
              >
                Add to cart
              </ButtonPattern>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

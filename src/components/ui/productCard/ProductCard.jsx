import React from 'react';
import { burgerList } from '@data/burgerList';
import { ButtonPattern } from "@buttons/ButtonPattern";
import { Input } from '@ui/input/Input';
import styles from '@ui/productCard/productCard.module.scss';

export function ProductCard() {
  
  
  return (
    <>
      {burgerList.map((burger, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.container}>
            <img src={burger.image} alt={burger.alt}className={styles.image} />
            <div className={styles.aboutBurger}>
              <div className={styles.title__price}>
                <p className={styles.title}>{burger.title}</p>
                <p className={styles.price}>$ {burger.price} USD</p>
              </div>
              <p className={styles.description}>{burger.description}</p>
              <div className={styles.add_to_cart__amount}>
                <Input
                  size="md"
                  type="number"
                  min={0}
                  max={100}
                />
                <ButtonPattern
                  variant="primary"
                  size="md"
                  className={styles.add_to_cart}
                >
                  Add to cart
                </ButtonPattern>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

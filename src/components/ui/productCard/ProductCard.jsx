import React from 'react';
import { ButtonPattern } from "@buttons/ButtonPattern";
import { Input } from '@ui/input/Input';
import styles from '@ui/productCard/productCard.module.scss';

export function ProductCard({item, index}) {
  
  
  return (
    <>
        <div key={index} className={styles.card}>
          <div className={styles.container}>
            <img src={item.image} alt={item.alt}className={styles.image} />
            <div className={styles.aboutBurger}>
              <div className={styles.title__price}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.price}>$ {item.price} USD</p>
              </div>
              <p className={styles.description}>{item.description}</p>
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

    </>
  );
}

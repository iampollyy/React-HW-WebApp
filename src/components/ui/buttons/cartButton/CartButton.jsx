import React from "react";
import { ButtonPattern } from "../ButtonPattern";
import styles from "@buttons/cartButton/CartButton.module.scss";

export function CartButton({ onClick }) {
  return (
  
      <ButtonPattern onClick={onClick} className={`${styles.button} ${styles.primary} ${styles.sm} ${styles.cart}`}>
        <img src="src/assets/images/icons/cart.svg" alt="cart" />
        <div className={styles.counter}>
        <p className={styles.counter__value}>0</p>
      </div>
      </ButtonPattern>

     
  
   
  );
}
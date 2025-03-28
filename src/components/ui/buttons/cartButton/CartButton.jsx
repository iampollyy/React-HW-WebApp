import React from "react";

import styles from "@buttons/cartButton/CartButton.module.scss";

import { ButtonPattern } from "../ButtonPattern";
import Cart from "@images/icons/cart.svg";  

export function CartButton(props) {
  return (
  
      <ButtonPattern onClick={props.onClick}  type ='button' variant='primary' size ='sm' className={styles.cart}>
        <img src={Cart} alt="cart" />
        <div className={styles.counter}>
        <p className={styles.counter__value}>0</p>
      </div>
      </ButtonPattern>

     
  
   
  );
}
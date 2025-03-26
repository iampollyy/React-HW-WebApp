import React, {useState} from "react";


import styles from "./burgerMenuButton.module.scss";

export function BurgerMenuButton({ onClick}) { 

  return (
   <button className={styles.sidebar} onClick={onClick}>
       <img src="/src/assets/images/icons/burger_menu.svg" alt="Sidebar"/>
  </button>
  );
}
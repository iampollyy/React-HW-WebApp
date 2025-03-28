import React from "react";
import styles from "./burgerMenuButton.module.scss";

import SideBar from "@images/icons/burger_menu.svg";


export function BurgerMenuButton({onClick }) { 
  return (
    <button className={styles.sidebar} onClick={onClick}>
      <img src={SideBar} alt="Menu Toggle" />
    </button>
  );
}

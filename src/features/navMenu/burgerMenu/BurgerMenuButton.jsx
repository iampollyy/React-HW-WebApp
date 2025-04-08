import React, {Component} from "react";
import styles from "./burgerMenuButton.module.scss";

import SideBar from "@images/icons/burger_menu.svg";


export class BurgerMenuButton extends Component {
  render() {
    const {onClick} = this.props;
    return (
      <button className={styles.sidebar} onClick={onClick}>
        <img src={SideBar} alt="Menu Toggle" />
      </button>
    );
  }
}

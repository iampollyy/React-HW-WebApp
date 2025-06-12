import React from "react";
import styles from "./burgerMenuButton.module.scss";

import SideBar from "@images/icons/burger_menu.svg";

interface BurgerMenuButtonProps {
    isOpen: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

 const BurgerMenuButton: React.FC<BurgerMenuButtonProps> = ({onClick }) => {
    return (
        <button className={styles.sidebar} onClick={onClick}>
            <img src={SideBar} alt="Menu Toggle" />
        </button>
    );
};

export default BurgerMenuButton;

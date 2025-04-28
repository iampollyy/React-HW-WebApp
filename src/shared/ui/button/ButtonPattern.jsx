import React from "react";
import styles from "./ButtonPattern.module.scss";

export const ButtonPattern = ({children, onClick, type = "button", variant = "primary", size = "md", className = "", ...rest
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            data-variant={variant}
            data-size={size}
            className={`${styles.button} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

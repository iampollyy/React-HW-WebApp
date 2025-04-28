import React from "react";
import styles from "./input.module.scss";

export const Input = ({
  type = 'text',
  size = 'md',
  className = '',
  ...props
 }) => {
     return (
      <input
        type={ type }
        className={`${styles.input} ${styles[size]} ${className}`}
        {...props}
      />
    );
  }


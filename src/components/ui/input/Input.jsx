import React from "react";
import styles from "@ui/input/input.module.scss";


export function Input({ type, size, className, value, ...props }) {
  
  return (
    <input
      type={type}
      className={`${styles.input} ${styles[size]} ${className}`}
      {...props}
    />
  );
}
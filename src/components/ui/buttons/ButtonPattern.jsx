import React from "react";
import styles from "@buttons/ButtonPattern.module.scss";

export function ButtonPattern({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

import React from "react";
import styles from "@ui/tooltip/tooltip.module.scss";

export const Tooltip = ({ children, text }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles.tooltip__text}>{text}</div>
    </div>
  );
}

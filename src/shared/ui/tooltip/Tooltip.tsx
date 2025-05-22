import React from "react";
import styles from "@ui/tooltip/tooltip.module.scss";

interface ITooltipProps {
    children: React.ReactNode;
    text: string;
}

 const Tooltip = ({ children, text }:ITooltipProps) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles.tooltip__text}>{text}</div>
    </div>
  );
}

export default Tooltip;

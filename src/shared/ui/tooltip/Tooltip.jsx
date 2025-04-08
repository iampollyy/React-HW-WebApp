import React, {Component} from "react";
import styles from "@ui/tooltip/tooltip.module.scss";

export class Tooltip extends Component {
  render() {
    const { children, text } = this.props;
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles.tooltip__text}>{text}</div>
    </div>
  );
}
}
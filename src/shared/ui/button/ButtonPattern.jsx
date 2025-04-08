import React, { Component } from "react";
import styles from "./ButtonPattern.module.scss";

export class ButtonPattern extends Component {
  static defaultProps = {
    type: "button",
    variant: "primary",
    size: "md",
    className: "",
  };

  render() {
    const { type, onClick, variant, size, className, children, ...restProps } = this.props;

    return (
      <button
        type={type}
        onClick={onClick}
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
        {...restProps} 
      >
        {children}
      </button>
    );
  }
}

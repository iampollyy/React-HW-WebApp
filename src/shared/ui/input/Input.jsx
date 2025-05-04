import React, { Component } from "react";
import styles from "./input.module.scss";

export class Input extends Component {
  render() {
    return (
      <input
        type={this.props.type || "text"}
        className={`${styles.input} ${styles[this.props.size || "md"]} ${this.props.className || ""}`}
        {...this.props}
      />
    );
  }
}

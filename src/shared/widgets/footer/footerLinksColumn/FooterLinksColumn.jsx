import React from "react";

import styles from "./footerLinksColumn.module.scss";

export const FooterLinksColumn = ({links, title}) => {
    return (
      <div className={styles.column}>
        <h4 className={styles.column__title}>{title}</h4>
        <ul className={styles.column__list}>
          {links.map((item, index) => (
            <li key={index}>
              <a href={item.url} className={styles.li_a}>{item.label}</a>
            </li>
          ))}
        
        </ul>
      </div>
    );
  }



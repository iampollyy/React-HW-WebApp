import React from 'react';
import styles from "./header.module.scss";

import Logo from '@images/logo/logo.svg';
import { NavMenuHeader } from '@features/navMenu/navMenuHeader/navMenuHeader.jsx';

export const Header = () => {

    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="/">
            <img src={Logo} alt="logo" className={styles.logo} />
          </a>
 
          <NavMenuHeader />

        </div>
      </header>
    )
  }


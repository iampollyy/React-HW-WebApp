import React, {useState} from 'react';
import styles from "@layout/header/header.module.scss";

import Logo from '@images/logo/logo.svg';
import { NavMenuHeader } from '@ui/navMenuHeader/navMenuHeader';

export function Header() {

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

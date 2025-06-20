import React, { useState } from 'react';
import styles from './navMenuHeader.module.scss';

import { navLinksHeader } from '@config';
import { Cart, logout } from '@features';
import { BurgerMenuButton } from '@features';

import { DarkMode } from '@ui';

import { useAppDispatch, useAppSelector } from '@hooks'
import { NavLink } from 'react-router-dom';


const NavMenuHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

    
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = (): void => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.mainMenu}>
            <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
                <div className={styles.navLinksHeader}>
                    {navLinksHeader.map((link, index) => {
                        if (user && link.name === 'Login') return null;
                        return (
                            <NavLink key={index} to={link.link} className={({ isActive }) => `${styles.a} ${isActive ? styles.active : ''}` }>
                                {link.name}
                            </NavLink>
                        );
                    })}
                    {user && (
                        <button className={`${styles.a} ${styles.button}`} onClick={() => dispatch(logout())}>
                            Logout
                        </button>
                    )}
                </div>
                <DarkMode />
                <Cart />
            </nav>

            <BurgerMenuButton isOpen={isOpen} onClick={handleClick} />
        </div>
    );
};

export default NavMenuHeader;

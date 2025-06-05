import React, { useState } from 'react';
import styles from './navMenuHeader.module.scss';

import { navLinksHeader } from '@config';
import { Cart, logout } from '@features';
import { BurgerMenuButton } from '@features';

import { useAppDispatch, useAppSelector } from '@hooks'


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
                            <a key={index} href={link.link} id={styles.a}>
                                {link.name}
                            </a>
                        );
                    })}
                    {user && (
                        <button id={styles.a} onClick={() => dispatch(logout())}>
                            Logout
                        </button>
                    )}
                </div>
                <Cart />
            </nav>

            <BurgerMenuButton isOpen={isOpen} onClick={handleClick} />
        </div>
    );
};

export default NavMenuHeader;

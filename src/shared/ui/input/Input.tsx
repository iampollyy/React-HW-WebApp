import React from "react";
import styles from "./input.module.scss";

interface IInputProps {
    type?: 'text' | 'password' | 'email' | 'number';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    [x: string]: any;
}

const Input: React.FC<IInputProps> = ({
                                          type = 'text',
                                          size = 'md',
                                          className = '',
                                          ...props
                                      }) => {
    return (
        <input
            type={type}
            className={`${styles.input} ${styles[size]} ${className}`}
            {...props}
        />
    );
};

export default Input;


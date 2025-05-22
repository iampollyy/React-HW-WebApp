import styled from "styled-components";
import React from "react";

type TButtonSize = "sm" | "md" | "lg";
type TButtonVariant = "primary" | "secondary";
type  TButtonPatternProps = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>)=> void;
    type?: "button" | "submit" | "reset";
    variant?: TButtonVariant;
    size?: TButtonSize;
    className?: string;
    [key: string]: any;
}

const StyledButton = styled.button<{$variant:TButtonVariant;
$size:TButtonSize}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.36px;
  transition: all 0.3s ease;

  
  ${({ $variant }) => $variant === "primary" && `
    background-color: var(--button-primary-bg);
    color: var(--button-primary-text);

    &:hover {
      background-color: var(--button-primary-hover-bg);
    }

    &:focus-visible {
      outline: 1px solid var(--button-primary-focus-bg);
    }
    &:active {
     transform: scale(0.98); }
  `}

  ${({ $variant }) => $variant === "secondary" && `
    outline: 1px solid var(--button-secondary-border-color);
    color: var(--button-secondary-text);
    background-color: var(--button-secondary-bg);

    &:hover {
      background-color: var(--accent-primary-hover);
      color: var(--button-primary-text);
    }

    &:active {
      background-color: var(--accent-primary);
      color: var(--button-primary-text);
      transform: scale(0.98); 
    }

    &:focus-visible {
      outline: 1px solid var(--button-secondary-border-color);
    }
  `}

  
  ${({ $size }) => $size === "sm" && `
    padding: 10px 12px;
    font-size: 14px;

    @media screen and (max-width: 768px) {
      padding: 8px 10px;
      font-size: 12px;
    }
  `}

  ${({ $size }) => $size === "md" && `
    padding: 10px 27px;

    @media screen and (max-width: 768px) {
      padding: 8px 16px;
      font-size: 14px;
    }
  `}

  ${({ $size }) => $size === "lg" && `
    padding: 1rem 2.88rem;
    font-size: 18px;

    @media screen and (max-width: 768px) {
      padding: 12px 20px;
      font-size: 16px;
    }
  `}
`;

const ButtonPattern = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "md",
    className = "",
    ...rest
  } : TButtonPatternProps) => {
    return (
      <StyledButton
        type={type}
        $variant={variant}
        $size={size}
        className={className}
        onClick={(e) => {
          onClick?.(e);
          e.currentTarget.blur(); 
        }}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  };

export default ButtonPattern;

  
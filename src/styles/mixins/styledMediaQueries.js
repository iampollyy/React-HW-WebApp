import { css } from 'styled-components';

const sizes = {
    'phone-only': '768px',
    'desktop-up': '1200px',
    'big-desktop-up': '1800px',
};

export const forSize = (size) => {
    const breakpoint = sizes[size];
    if (!breakpoint) return () => '';

    return (...args) => css`
        @media (${size === 'phone-only' ? 'max-width' : 'min-width'}: ${breakpoint}) {
            ${css(...args)}
        }
    `;
};

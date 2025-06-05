import { css, CSSObject } from 'styled-components';

type SizeKey = 'phone-only' | 'desktop-up' | 'big-desktop-up';

const sizes: Record<SizeKey, string> = {
    'phone-only': '768px',
    'desktop-up': '1200px',
    'big-desktop-up': '1800px',
};

const forSize = (size: SizeKey) => {
    const breakpoint = sizes[size];
    if (!breakpoint) return () => '';

    return (...args: [CSSObject | TemplateStringsArray, ...any[]]) => css`
        @media (${size === 'phone-only' ? 'max-width' : 'min-width'}: ${breakpoint}) {
            ${css(...args)}
        }
    `;
};

export default forSize;
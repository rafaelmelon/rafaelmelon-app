import baseStyled, { ThemedStyledInterface, css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export const theme = {
  media: {
    desktop: (...args) => css`
      @media (max-width: ${sizes.desktop / 16}em) {
        ${css(...args)}
      }
    `,
    tablet: (...args) => css`
      @media (max-width: ${sizes.tablet / 16}em) {
        ${css(...args)}
      }
    `,
    phone: (...args) => css`
      @media (max-width: ${sizes.phone / 16}em) {
        ${css(...args)}
      }
    `,
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    jaffa: '#F08545',
    confetti: '#EAEB5C',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

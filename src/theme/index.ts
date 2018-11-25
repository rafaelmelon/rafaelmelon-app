import baseStyled, {
  ThemedStyledInterface,
  css,
  createGlobalStyle,
} from 'styled-components';

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
  fonts: {
    montserrat: '"Montserrat", sans-serif',
    openSans: '"Open Sans", sans-serif',
  },
  fontSize: {
    xl: '2.4rem',
    lg: '1.8rem',
    md: '1.3rem',
    nm: '1rem',
    sm: '0.75rem',
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Open+Sans');
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
  h1, h2 {
    margin: 0;
  }
`;

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

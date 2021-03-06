import baseStyled, {
  createGlobalStyle,
  css,
  ThemedStyledInterface,
} from 'styled-components';

import { VIEWPORT } from '@utils/index';
import reset from './reset';

const mediaQueries = Object.keys(VIEWPORT).reduce(
  (acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (max-width: ${VIEWPORT[label]}px) {
          ${css(literals, ...placeholders)};
        }
      `.join('');
    return acc;
  },
  {} as Record<
    keyof typeof VIEWPORT,
    (l: TemplateStringsArray, ...p: any[]) => string
  >,
);

export const theme = {
  media: {
    ...mediaQueries,
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    jonquil: '#DBFF8E',
    anakiwa: '#A7E4FF',
    goldenrod: '#FFCD70',
    swamp: '#00161C',
    red: '#FF0000',
  },
  fonts: {
    montserrat: '"Montserrat", sans-serif',
    openSans: '"Open Sans", sans-serif',
  },
  fontSize: {
    xxxl: '6rem',
    xxl: '4.6rem',
    xl: '2.8rem',
    lg: '1.8rem',
    md: '1.3rem',
    nm: '1rem',
    sm: '0.75rem',
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  iconSize: {
    x4: '150px',
    x3: '100px',
    x2: '40px',
    x1: '30px',
  },
  helpers: {
    transitionAll: 'all 0.3s ease-out',
    borderDashedAlpha: color => `4px dashed ${color}20`,
    borderSolid: color => `4px solid ${color}`,
    borderSolidAlpha: color => `4px solid ${color}20`,
    borderDottedAlpha: color => `4px dotted ${color}20`,
    borderTransparent: '4px solid transparent',
    boxShadow: color => `2px 2px 0 0px ${color}`,
    boxShadowInset: color => `inset 2px 2px 0 0px ${color}`,
    radius10: '10px',
  },
};

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Open+Sans');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:700,800');
    font-family: ${theme.fonts.openSans};
    color: ${theme.colors.black};
    letter-spacing: 0.02rem;
  }
  h3 {
    line-height: 1;
  }
`;

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

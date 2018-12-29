import { styled } from '@theme/index';

export const Container = styled.span`
  background-color: ${({ theme }) => theme.colors.confetti};
  &.home-appear {
    opacity: 0.01;
  }
  &.home-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
  ${({ theme }) =>
    theme.media.desktop`background-color: ${theme.colors.jaffa};`}
      ${({ theme }) =>
        theme.media.tablet`background-color: ${theme.colors.confetti};`}
      ${({ theme }) =>
        theme.media.phone`background-color: ${theme.colors.jaffa};`}
`;

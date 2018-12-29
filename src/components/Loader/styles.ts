import { styled } from '@theme/index';

interface LoaderStyle {
  viewport: {
    height: number | null;
    width: number | null;
  };
}

export const Container = styled.div<LoaderStyle>`
  height: ${({ viewport }) => viewport.height}px;
  width: ${({ viewport }) => viewport.width}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.loader-appear {
    opacity: 0.01;
  }
  &.loader-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
  background-color: ${({ theme }) => theme.colors.confetti};
  ${({ theme }) =>
    theme.media.desktop`background-color: ${theme.colors.jaffa};`}
      ${({ theme }) =>
        theme.media.tablet`background-color: ${theme.colors.confetti};`}
      ${({ theme }) =>
        theme.media.phone`background-color: ${theme.colors.jaffa};`}
`;

import { styled } from '@theme/index';

export const Container = styled.div`
  width: ${({ theme }) => theme.windowSize.width};
  height: ${({ theme }) => theme.windowSize.height};
  background-color: ${({ theme }) => theme.colors.confetti};
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
`;

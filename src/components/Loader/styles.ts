import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100vh;
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

import { styled } from '@theme/index';

export const Container = styled.div`
  &.home-appear {
    opacity: 0.01;
  }
  &.home-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
`;

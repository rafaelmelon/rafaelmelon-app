import { styled } from '@theme/index';

interface ContainerStyle {
  bgColor: string;
}

export const Container = styled.div<ContainerStyle>`
  background-color: ${({ bgColor }) => bgColor};
  transition: background-color 0.5s linear;
  &.home-appear {
    opacity: 0.01;
  }
  &.home-appear-active {
    opacity: 1;
    transition: opacity 0.5 ease;
  }
`;

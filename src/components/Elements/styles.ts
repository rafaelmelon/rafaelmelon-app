import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.confetti};
  display: flex;
  padding: 16px 10px;
`;

export const ContainerElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
`;

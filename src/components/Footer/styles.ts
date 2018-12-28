import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.confetti};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

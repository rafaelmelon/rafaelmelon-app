import { styled } from '@theme/index';

export const Container = styled.div`
  width: ${({ theme }) => theme.windowSize.width};
  height: ${({ theme }) => theme.windowSize.height};
  background-color: ${({ theme }) => theme.colors.confetti};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

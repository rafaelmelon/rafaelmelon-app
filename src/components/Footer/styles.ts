import { styled } from '@theme/index';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.confetti};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
`;

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 800;
  margin-bottom: 20px;
`;

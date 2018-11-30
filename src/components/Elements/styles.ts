import { styled } from '@theme/index';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

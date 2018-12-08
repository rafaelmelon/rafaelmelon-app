import { styled } from '@theme/index';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

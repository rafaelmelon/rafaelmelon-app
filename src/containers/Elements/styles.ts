import { styled } from '@theme/index';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 10px;
  margin: 5px;
`;

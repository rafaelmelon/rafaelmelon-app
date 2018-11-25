import { styled } from '@theme/index';

export const CustomLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

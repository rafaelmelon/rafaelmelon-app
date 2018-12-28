import { styled } from '@theme/index';

interface LinkStyle {
  fontSize?: string;
}

export const CustomLink = styled.a<LinkStyle>`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? fontSize : theme.fontSize.nm};
  transition: ${({ theme }) => theme.helpers.transitionAll};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`;

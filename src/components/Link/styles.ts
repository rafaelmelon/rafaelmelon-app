import { styled } from '@theme/index';

interface LinkStyle {
  fontSize?: string;
}

export const CustomLink = styled.a<LinkStyle>`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? fontSize : theme.fontSize.nm};
  transition: ${({ theme }) => theme.helpers.transitionAll};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`;

export const LinkButton = styled.a`
  padding: 5px;
  border: ${({ theme }) => theme.helpers.borderSolidAlpha(theme.colors.black)};
  border-radius: ${({ theme }) => theme.helpers.radius10};
  transition: ${({ theme }) => theme.helpers.transitionAll};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.helpers.borderSolid(theme.colors.black)};
    box-shadow: ${({ theme }) => theme.helpers.boxShadow(theme.colors.black)};
    transform: translate(-2px, -2px);
  }
`;

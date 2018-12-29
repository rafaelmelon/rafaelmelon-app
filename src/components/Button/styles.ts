import { styled } from '@theme/index';

interface ButtonStyle {
  icon?: boolean;
}

export const CustomButton = styled('button')<ButtonStyle>`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  padding: ${({ icon }) => (icon ? '5px' : '10px 30px')};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  border: ${({ icon, theme }) =>
    icon
      ? theme.helpers.borderAlpha
      : theme.helpers.borderDashed(theme.colors.black)};
  background: none;
  border-radius: ${({ theme }) => theme.helpers.radius10};
  transition: ${({ theme }) => theme.helpers.transitionAll};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.helpers.borderSolid(theme.colors.black)};
    box-shadow: ${({ theme }) => theme.helpers.boxShadow(theme.colors.black)};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

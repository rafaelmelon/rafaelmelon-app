import { styled } from '@theme/index';

interface ButtonPropsStyle {
  icon?: boolean;
}

export const CustomButton = styled('button')<ButtonPropsStyle>`
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
    border: ${({ theme }) => theme.helpers.borderSolid(theme.colors.black)};
    box-shadow: ${({ theme }) => theme.helpers.boxShadow(theme.colors.black)};
  }
`;

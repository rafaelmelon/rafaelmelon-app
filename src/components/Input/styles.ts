import { styled } from '@theme/index';

interface InputStyle {
  error: string;
}

export const CustomInput = styled.input<InputStyle>`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  padding: 10px 30px;
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme, error }) =>
    error
      ? theme.helpers.borderSolid(theme.colors.red)
      : theme.helpers.borderDashed(theme.colors.black)};
  background: none;
  border-radius: ${({ theme }) => theme.helpers.radius10};
  transition: ${({ theme }) => theme.helpers.transitionAll};
  cursor: pointer;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
  }
  &:hover {
    border: ${({ theme }) => theme.helpers.borderSolid(theme.colors.black)};
    box-shadow: ${({ theme }) => theme.helpers.boxShadow(theme.colors.black)};
  }
  &:focus {
    border: ${({ theme }) => theme.helpers.borderSolid(theme.colors.white)};
    box-shadow: ${({ theme }) => theme.helpers.boxShadow(theme.colors.white)};
    &::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

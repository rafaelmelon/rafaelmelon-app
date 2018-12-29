import { styled } from '@theme/index';

interface TextAreaStyle {
  error: string;
}

export const CustomTextarea = styled.textarea<TextAreaStyle>`
  min-height: 100px;
  font-family: ${({ theme }) => theme.fonts.montserrat};
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
  padding: 10px 30px;
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

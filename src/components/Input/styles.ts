import { styled } from '@theme/index';

export const Container = styled.div``;

export const CustomInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  padding: 10px 30px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme }) => theme.helpers.borderDashed(theme.colors.black)};
  background: none;
  border-radius: ${({ theme }) => theme.helpers.radius10};
  transition: ${({ theme }) => theme.helpers.transitionAll};
  cursor: pointer;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
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

export const Error = styled.span``;

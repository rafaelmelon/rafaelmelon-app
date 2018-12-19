import { styled } from '@theme/index';

export const Container = styled.div``;

export const CustomInput = styled.input`
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: 10px 30px;
  border: 4px dashed rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: ${({ theme }) => theme.transitions.primary};
  cursor: pointer;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
  &:focus {
    outline: 0;
    border: 4px solid ${({ theme }) => theme.colors.black};
    &::placeholder {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const Error = styled.span``;

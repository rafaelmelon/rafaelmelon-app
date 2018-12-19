import { styled } from '@theme/index';

export const CustomButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: 10px 30px;
  display: inline-block;
  text-transform: uppercase;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  border: 4px dashed rgba(0, 0, 0, 0.1);
  background: none;
  cursor: pointer;
  border-radius: 10px;
  transition: ${({ theme }) => theme.transitions.primary};
  &:hover {
    border: 4px solid ${({ theme }) => theme.colors.black};
  }
`;

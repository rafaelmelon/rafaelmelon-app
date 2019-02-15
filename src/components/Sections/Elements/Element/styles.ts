import { styled } from '@theme/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.helpers.borderSolid(theme.colors.black)};
  box-shadow: ${({ theme }) => theme.helpers.boxShadow(theme.colors.black)};
  border-radius: ${({ theme }) => theme.helpers.radius10};
  margin: 10px;
  padding: 10px;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin: 0;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  a {
    margin-left: 10px;
  }
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

import { styled } from '@theme/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: space-between;
  border: ${({ theme }) => theme.helpers.borderSolid(theme.colors.black)};
  box-shadow: ${({ theme }) => theme.helpers.boxShadow(theme.colors.black)};
  border-radius: ${({ theme }) => theme.helpers.radius10};
  margin: 4px 10px;
  padding: 5px 10px;
  transition: ${({ theme }) => theme.helpers.transitionAll};
  &:hover {
    border: ${({ theme }) =>
      theme.helpers.borderSolidAlpha(theme.colors.black)};
  }
  ${({ theme }) => theme.media.phone`margin: 10px;`}
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.md};
  ${({ theme }) => theme.media.phone`margin-bottom: 40px;`}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0;
`;

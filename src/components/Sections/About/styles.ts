import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 150px 40px;
  ${({ theme }) =>
    theme.media
      .phone`padding: 150px 20px; border-bottom: ${theme.helpers.borderDottedAlpha(
      theme.colors.black,
    )};`}
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.media.tablet`flex-direction: column;`}
`;

export const ColumnOne = styled.div`
  flex: 1;
  padding: 0 20px 0 0;
  ${({ theme }) => theme.media.tablet`padding: 0; margin-bottom: 40px;`}
`;

export const ColumnTwo = styled.div`
  flex: 1;
  padding: 0 0 0 20px;
  ${({ theme }) => theme.media.tablet`padding: 0px;`}
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 1;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 30px;
  ${({ theme }) => theme.media.tablet`font-size: ${theme.fontSize.nm};`}
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  background-position: center;
  border: ${({ theme }) => theme.helpers.borderSolid(theme.colors.black)};
  box-shadow: ${({ theme }) => theme.helpers.boxShadow(theme.colors.black)};
  border-radius: ${({ theme }) => theme.helpers.radius10};
  padding: 20px 30px 0 30px;
`;

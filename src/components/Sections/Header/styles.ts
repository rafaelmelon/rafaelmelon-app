import { styled } from '@theme/index';

export const Container = styled.div`
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
    )}; text-align: center;`}
`;

export const Welcome = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 20px;
  ${({ theme }) =>
    theme.media.phone`display: flex; flex-direction: column; font-size: ${
      theme.fontSize.xl
    };`}
  span {
    &:last-child {
      font-weight: ${({ theme }) => theme.fontWeight.extraBold};
    }
  }
`;

export const Description = styled.h2`
  max-width: 700px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-bottom: 30px;
  ${({ theme }) => theme.media.tablet`font-size: ${theme.fontSize.nm};`}
`;

import { Button } from '@components/index';
import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
  ${({ theme }) =>
    theme.media
      .phone`padding: 150px 20px; border-bottom: ${theme.helpers.borderDottedAlpha(
      theme.colors.black,
    )}; text-align: center;`}
`;

export const ButtonLogo = styled(Button)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Welcome = styled.div``;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xxl};
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
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 30px;
  ${({ theme }) => theme.media.tablet`font-size: ${theme.fontSize.nm};`}
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 20px;
  right: 20px;
  ${({ theme }) =>
    theme.media.phone`border-left: ${theme.helpers.borderDottedAlpha(
      theme.colors.black,
    )};`}
`;

export const ButtonMedia = styled(Button)`
  margin-left: 20px;
`;

export const ButtonBottom = styled(Button)`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 20px;
  ${({ theme }) => theme.media.phone`display: none`}
`;

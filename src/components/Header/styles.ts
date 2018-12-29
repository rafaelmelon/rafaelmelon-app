import { styled } from '@theme/index';
import { Button } from '@components/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.confetti};
  ${({ theme }) =>
    theme.media.desktop`background-color: ${theme.colors.jaffa};`}
      ${({ theme }) =>
        theme.media.tablet`background-color: ${theme.colors.confetti};`}
      ${({ theme }) =>
        theme.media.phone`background-color: ${
          theme.colors.jaffa
        };padding: 150px 20px;`}
`;

export const ButtonLogo = styled(Button)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Welcome = styled.div``;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-bottom: 20px;
  ${({ theme }) => theme.media.tablet`font-size: ${theme.fontSize.xl};`}
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
`;

export const ButtonMedia = styled(Button)`
  margin-left: 20px;
`;

export const ButtonBottom = styled(Button)`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 20px;
`;

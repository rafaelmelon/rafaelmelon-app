import { styled } from '@theme/index';
import { Button } from '@components/index';

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.confetti};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
  &.header-appear {
    opacity: 0.01;
  }
  &.header-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
`;

export const ButtonLogo = styled(Button)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Welcome = styled.div``;

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-bottom: 20px;
`;

export const Description = styled.h2`
  max-width: 700px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 30px;
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

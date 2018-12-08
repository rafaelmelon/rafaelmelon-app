import { styled } from '@theme/index';

export const Container = styled.div`
  height: ${({ theme }) => theme.windowSize.height};
  background-color: ${({ theme }) => theme.colors.confetti};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  &.header-appear {
    opacity: 0.01;
  }
  &.header-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Welcome = styled.div``;

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 800;
  margin-bottom: 20px;
`;

export const Description = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.nm};
  margin-bottom: 40px;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
`;

import { styled } from '@theme/index';

export const Container = styled.div`
  width: ${({ theme }) => theme.windowSize.width};
  height: ${({ theme }) => theme.windowSize.height};
  background-color: ${({ theme }) => theme.colors.confetti};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  &.header-appear {
    opacity: 0.01;
  }
  &.header-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 20px;
`;

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

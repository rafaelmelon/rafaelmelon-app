import { styled } from '@theme/index';

interface NotFoundStyle {
  viewport: {
    height: number | null;
    width: number | null;
  };
}

export const Container = styled.div<NotFoundStyle>`
  height: ${({ viewport }) => viewport.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
  &.notfound-appear {
    opacity: 0.01;
  }
  &.notfound-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
`;

export const Welcome = styled.div``;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
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

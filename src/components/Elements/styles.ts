import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 16px 10px;
  background-color: ${({ theme }) => theme.colors.confetti};
  ${({ theme }) =>
    theme.media.desktop`background-color: ${theme.colors.jaffa};`}
      ${({ theme }) =>
        theme.media.tablet`background-color: ${theme.colors.confetti};`}
      ${({ theme }) =>
        theme.media.phone`background-color: ${theme.colors.jaffa};`}
`;

export const ContainerElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
`;

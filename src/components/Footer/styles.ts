import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
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

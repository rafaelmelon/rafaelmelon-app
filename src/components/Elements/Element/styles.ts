import { styled } from '@theme/index';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.confetti};
  ${({ theme }) =>
    theme.media.desktop`background-color: ${theme.colors.jaffa};`}
  ${({ theme }) =>
    theme.media.tablet`background-color: ${theme.colors.confetti};`}
  ${({ theme }) => theme.media.phone`background-color: ${theme.colors.jaffa};`}
  padding: 5px 10px;
  margin-bottom: 20px;
`;

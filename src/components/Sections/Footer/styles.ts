import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  ${({ theme }) => theme.media.phone`padding: 150px 20px;`}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.nm};
  margin-top: 10px;
  ${({ theme }) => theme.media.tablet`font-size: ${theme.fontSize.nm};`}
`;

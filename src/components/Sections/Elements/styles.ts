import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 16px 10px;
  ${({ theme }) => theme.media.phone`padding: 150px 10px; border-bottom: ${theme.helpers.borderDottedAlpha(theme.colors.black)};`}
`;

export const ContainerElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
`;

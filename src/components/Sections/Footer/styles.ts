import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  ${({ theme }) => theme.media.phone`padding: 150px 20px;`}
`;
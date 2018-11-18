import { styled } from '@theme/index';

export const Container = styled.div`
  background-color: papayawhip;
  ${({ theme }) => theme.media.desktop`background-color: dodgerblue;}
  ${({ theme }) => theme.media.tablet`background-color: mediumseagreen;}
  ${({ theme }) => theme.media.phone`background-color: palevioletred;}
`;

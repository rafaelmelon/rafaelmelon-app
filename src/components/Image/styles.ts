import { styled } from '@theme/index';

interface StyleProps {
  iconWidth?: string;
}

export const Img = styled.img`
  width: ${({ iconWidth }: StyleProps) => (iconWidth ? iconWidth : '100%')};
  height: auto;
  max-width: 100%;
`;

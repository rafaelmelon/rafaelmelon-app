import { styled } from '@theme/index';
import { Link } from '@components/index';

export const ContainerLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: ${({ theme }) => theme.fontSize.md};
  border-radius: 10px;
  ${({ theme }) =>
    theme.media.desktop`background-color: ${theme.colors.jaffa};`}
  ${({ theme }) =>
    theme.media.tablet`background-color: ${theme.colors.confetti};`}
  ${({ theme }) => theme.media.phone`background-color: ${theme.colors.jaffa};`}
  border: 4px dashed rgba(0, 0, 0, 0.1);
  transition: ${({ theme }) => theme.transitions.primary};
  text-transform: uppercase;
  padding: 10px;
  &:hover {
    border: 4px solid ${({ theme }) => theme.colors.black};
  }
`;

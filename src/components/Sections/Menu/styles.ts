import { Button } from '@components/index';
import { styled } from '@theme/index';

export const Logo = styled.span`
  margin-left: 5px;
  img {
    transition: transform 0.5s;
  }
  &:hover {
    img {
      transform: rotate(45deg);
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex: 1;
  padding: 20px;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  ${({ theme }) =>
    theme.media.phone`border-left: ${theme.helpers.borderDottedAlpha(
      theme.colors.black,
    )};`}
`;

export const ButtonMedia = styled(Button)`
  margin-left: 20px;
`;

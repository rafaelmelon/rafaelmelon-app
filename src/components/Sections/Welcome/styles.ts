import { Button } from '@components/index';
import { styled } from '@theme/index';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;

export const Title = styled.h1`
  font-size: 8.6vh;
  font-weight: 700;
  margin: 60px 0 5px 0;
  line-height: 1;
`;

export const Description = styled.h2`
  font-size: 3vh;
  font-weight: 500;
  margin: 0;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonMedia = styled(Button)`
  margin-left: 20px;
`;

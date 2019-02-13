import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 20px;
  ${({ theme }) => theme.media.phone`padding: 150px 20px;`}
`;

export const Feedback = styled.div``;

export const FeedbackText = styled.h2`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

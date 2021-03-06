import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
  &.contact-appear {
    opacity: 0.01;
  }
  &.contact-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
  ${({ theme }) => theme.media.phone`height: 100%; padding: 150px 20px;`}
`;

export const ContainerForm = styled.div`
  ${({ theme }) => theme.media.phone`width: 100%;`}
`;

export const Feedback = styled.div``;

export const FeedbackText = styled.h2`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const MenuContact = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex: 1;
  padding: 20px;
`;

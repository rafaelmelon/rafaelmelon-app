import { styled } from '@theme/index';
import { Button } from '@components/index';

interface ContactStyle {
  windowHeight: number | null;
}

export const Container = styled.div<ContactStyle>`
  height: ${({ windowHeight }) => windowHeight}px;
  background-color: ${({ theme }) => theme.colors.confetti};
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
`;

export const ContainerForm = styled.div``;

export const SuccessContainer = styled.div``;

export const Success = styled.h2`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ButtonLogo = styled(Button)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ButtonClose = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

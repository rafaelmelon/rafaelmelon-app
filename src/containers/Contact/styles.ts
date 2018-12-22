import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
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

export const GroupForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 40px;
  width: 40px;
  padding: 5px;
  border-radius: 10px;
  border: 4px dashed ${({ theme }) => theme.colors.confetti};
  display: flex;
  justify-content: center;
  align-content: center;
  transition: ${({ theme }) => theme.helpers.transitionAll};
  &:hover {
    border: 4px solid ${({ theme }) => theme.colors.black};
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 40px;
  width: 40px;
  padding: 5px;
  border-radius: 10px;
  border: 4px dashed ${({ theme }) => theme.colors.confetti};
  display: flex;
  justify-content: center;
  align-content: center;
  transition: ${({ theme }) => theme.helpers.transitionAll};
  &:hover {
    border: 4px solid ${({ theme }) => theme.colors.black};
  }
`;

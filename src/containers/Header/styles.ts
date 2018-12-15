import { styled } from '@theme/index';

export const Container = styled.div`
  height: ${({ theme }) => theme.windowSize.height};
  background-color: ${({ theme }) => theme.colors.confetti};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
  &.header-appear {
    opacity: 0.01;
  }
  &.header-appear-active {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  > a {
    height: 40px;
    width: 40px;
    padding: 5px;
    border-radius: 10px;
    border: 4px dashed ${({ theme }) => theme.colors.confetti};
    display: flex;
    justify-content: center;
    align-content: center;
    transition: ${({ theme }) => theme.transitions.primary};
    &:hover {
      border: 4px solid ${({ theme }) => theme.colors.black};
    }
  }
`;

export const Welcome = styled.div``;

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 800;
  margin-bottom: 20px;
`;

export const Description = styled.h2`
  max-width: 700px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 30px;
`;

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: 10px 30px;
  display: inline-block;
  text-transform: uppercase;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  border: 4px dashed rgba(0, 0, 0, 0.1);
  background: none;
  cursor: pointer;
  border-radius: 10px;
  transition: ${({ theme }) => theme.transitions.primary};
  &:hover {
    border: 4px solid ${({ theme }) => theme.colors.black};
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 20px;
  right: 20px;
  > a {
    height: 40px;
    width: 40px;
    margin-left: 20px;
    padding: 5px;
    border-radius: 10px;
    border: 4px dashed ${({ theme }) => theme.colors.confetti};
    display: flex;
    justify-content: center;
    align-content: center;
    transition: ${({ theme }) => theme.transitions.primary};
    &:hover {
      border: 4px solid ${({ theme }) => theme.colors.black};
    }
  }
`;

export const NavigateBottom = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: pointer;
  bottom: 20px;
  > img {
    height: 40px;
    width: 40px;
    padding: 5px;
    border-radius: 10px;
    border: 4px dashed ${({ theme }) => theme.colors.confetti};
    display: flex;
    justify-content: center;
    align-content: center;
    transition: ${({ theme }) => theme.transitions.primary};
    &:hover {
      border: 4px solid ${({ theme }) => theme.colors.black};
    }
  }
`;

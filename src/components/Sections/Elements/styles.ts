import { styled } from '@theme/index';

export const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 16px 10px;
  ${({ theme }) =>
    theme.media
      .phone`padding: 150px 10px; border-bottom: ${theme.helpers.borderDottedAlpha(
      theme.colors.black,
    )};`}
`;

export const ContainerElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

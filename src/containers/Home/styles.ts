import styledComponents from 'styled-components';

export const Container = styledComponents.div`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  height: 64px;
  align-items: center;
  margin-bottom: 0;
`;

export const Header = styledComponents.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
  line-height: 3px;
  align-items: center;
`;

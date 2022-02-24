import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width: 100%;
  height: 54px;
  padding: 0 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
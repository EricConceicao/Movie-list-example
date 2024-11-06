import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0.6rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`;

import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 0.6rem;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: solid 2px ${({ theme }) => theme.colors.text};
`;

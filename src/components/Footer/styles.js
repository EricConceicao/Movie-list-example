import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5em;
  text-align: end;
  min-height: 200px;
`;

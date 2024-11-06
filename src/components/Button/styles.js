import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: solid 1px ${({ theme }) => theme.colors.text};
  padding: 10px 15px;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }

  &:disabled {
    color: #777;
    background-color: #444;
  }
`;

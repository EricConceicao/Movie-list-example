import { styled } from "styled-components";

export const FilterNav = styled.nav`
  Button {
    border: none;
    border-bottom: solid 1px ${({ theme }) => theme.colors.text};
    margin: 0 5px;

    &:hover {
      border-radius: 5px;
    }

    &:disabled {
      border: none;
      outline: 1px solid #eee;
      background-color: transparent;
    }
  }
`;

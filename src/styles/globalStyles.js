import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  li {
    list-style-type: none;
  }

  body, h1, h2, h3{
    margin: 0;
  }

  colors: {
    primary: "#fff";
    secondary: "#000";
  }
`;

export default GlobalStyles;

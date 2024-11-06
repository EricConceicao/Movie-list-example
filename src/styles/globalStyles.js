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

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  colors: {
    primary: "#fff";
    secondary: "#000";
  }
`;

export default GlobalStyles;

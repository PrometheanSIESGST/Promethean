import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing:border-box;
  }

  body {
    padding:0;
    margin:0;
    background:${(props) => props.theme.Colors.PageBg};
  }

  a {
      text-decoration:none;
  }

  a:hover {
    text-decoration:none;
  }

  ul {
    margin:0;
    padding:0;
    list-style:none;
  }

  img {
    max-width:100%;
    height:auto;
  }

  h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
  }

`;

export default GlobalStyle;

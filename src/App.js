import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyle from "./Globalstyles";
import { Theme } from "./Theme";

const Header = styled.h1`
  color:  ${(props) => props.theme.Colors.Header};
  font-family:  ${(props) => props.theme.Fonts.Arial};
`

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header>All the best #HappyCoding</Header>
    </ThemeProvider>
  );
};

export default App;

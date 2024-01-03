import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//style
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyle from "./Globalstyles";
import { Theme } from "./Theme";

//Pages
import LandingPage from "./Pages/LandingPage";
import Gallery from "./Pages/Gallery";
import Team from "./Pages/Team";
import Promethean from "./Pages/Promethean";

//Component
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import * as ROUTES from "./Constants/routes";
import Register from "./Pages/Register";
import 'react-toastify/dist/ReactToastify.css';

const Header = styled.h1`
  max-width: 1200px;
  margin: 4em auto;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Arial};
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        <Route path={ROUTES.TEAM} element={<Team />} />
        <Route path={ROUTES.PROMETHEAN} element={<Promethean />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;

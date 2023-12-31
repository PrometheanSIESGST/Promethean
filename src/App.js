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
import Blogs from "./Pages/Blogs";

//Component
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import * as ROUTES from "./Constants/routes";

//Blogs
import BLOG_ONE from "./Pages/Blogssample/blog1";
import BLOG_TWO from "./Pages/Blogssample/blog2";
import BLOG_THREE from "./Pages/Blogssample/blog3";
import BLOG_FOUR from "./Pages/Blogssample/blog4";
import BLOG_FIVE from "./Pages/Blogssample/blog5";
import BLOG_SIX from "./Pages/Blogssample/blog6";
import BLOG_SEVEN from "./Pages/Blogssample/blog7";
import BLOG_EIGHT from "./Pages/Blogssample/blog8"
import BLOG_NINE from "./Pages/Blogssample/blog9";
import BLOG_TEN from "./Pages/Blogssample/blog10";
import BLOG_ELEVEN from "./Pages/Blogssample/blog11";
import BLOG_TWELVE from "./Pages/Blogssample/blog12";
/*
import BLOG_THIRTEEN from "./Pages/Blogssample/blog13";
import BLOG_FOURTEEN from "./Pages/Blogssample/blog14";
import BLOG_FIFTEEN from "./Pages/Blogssample/blog15";
import BLOG_SIXTEEN from "./Pages/Blogssample/blog16";
import BLOG_SEVENTEEN from "./Pages/Blogssample/blog17";
*/
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
        <Route path={ROUTES.BLOGS} element={<Blogs/>} />
        <Route path={ROUTES.BLOG_ONE} element={<BLOG_ONE/>} />
        <Route path={ROUTES.BLOG_TWO} element={<BLOG_TWO/>} />
        <Route path={ROUTES.BLOG_THREE} element={<BLOG_THREE/>} />
        <Route path={ROUTES.BLOG_FOUR} element={<BLOG_FOUR/>} />
        <Route path={ROUTES.BLOG_FIVE} element={<BLOG_FIVE/>} />
        <Route path={ROUTES.BLOG_SIX} element={<BLOG_SIX/>} />
        <Route path={ROUTES.BLOG_SEVEN} element={<BLOG_SEVEN/>} />
        <Route path={ROUTES.BLOG_EIGHT} element={<BLOG_EIGHT/>} />
        <Route path={ROUTES.BLOG_NINE} element={<BLOG_NINE/>} />
        <Route path={ROUTES.BLOG_TEN} element={<BLOG_TEN/>} />
        <Route path={ROUTES.BLOG_ELEVEN} element={<BLOG_ELEVEN/>} />
        <Route path={ROUTES.BLOG_TWELVE} element={<BLOG_TWELVE/>} />
        {/*
        <Route path={ROUTES.BLOG_THIRTEEN} element={<BLOG_THIRTEEN/>} />
        <Route path={ROUTES.BLOG_FOURTEEN} element={<BLOG_FOURTEEN/>} />
        <Route path={ROUTES.BLOG_FIFTEEN} element={<BLOG_FIFTEEN/>} />
        <Route path={ROUTES.BLOG_SIXTEEN} element={<BLOG_SIXTEEN/>} />
        <Route path={ROUTES.BLOG_SEVENTEEN} element={<BLOG_SEVENTEEN/>} TWELVE/>
        */}
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;

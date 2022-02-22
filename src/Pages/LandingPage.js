import React from 'react';
import styled from "styled-components";
import Card from "../Components/Card"
import ContactUs from "../Components/Contactus"
import Hero from "../Components/Hero/Hero"

const Header = styled.h1`
  max-width: 1200px;
  margin: 0 auto;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Arial};
`;

const LandingPage = () => {
    return (
        <>
        {/* <Hero></Hero> */}
          <Card></Card>
          {/* <ContactUs></ContactUs> */}
        </>
      );
};

export default LandingPage;

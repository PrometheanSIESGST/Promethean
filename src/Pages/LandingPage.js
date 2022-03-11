import React from 'react';
import styled from "styled-components";
import Card from "../Components/Card"
import ContactUs from "../Components/Contactus"
import Hero from "../Components/Hero/Hero"
import TeamIntro from "../Components/Meet_the_Leaders/TeamIntro"
import TeamCard from "../Components/Meet_the_Leaders/TeamCard"

const Header = styled.h1`
  max-width: 1200px;
  margin: 0 auto;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Arial};
`;

const LandingPage = () => {
    return (
        <>
        <TeamIntro></TeamIntro>
        <TeamCard></TeamCard>
         {/* <Hero></Hero> */}
          {/* <Card></Card>  */}
          {/* <ContactUs></ContactUs> */}
        </>
      );
};

export default LandingPage;

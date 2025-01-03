import React, { useState, useEffect } from "react";
import styled,{keyframes} from "styled-components";
import Card from "../Components/Card";
import ContactUs from "../Components/Contactus";
import Hero from "../Components/Hero/Hero";
import PrometheanImage from "../Images/pp.jpg";
import Event1 from "../Images/promlanding1.jpg";
import Event2 from "../Images/Event2.jpg";
import HeroImg from "../Images/heroimg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Timerworking from "../Components/Timer";
import { Link } from 'react-router-dom';
import Register from "../Pages/Register";
import * as ROUTES from "../Constants/routes";
// import Terratalk from "../Images/terra11.jpg"
import Terratalk from "../Images/team.jpg"
const Main = styled.div`
  max-width: 320px;
  margin: 0 auto;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 720px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
  align-items: center;
  padding: 20px 0;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding: 30px 0;
    flex-direction: row;
  }
`;

const AboutImage = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-right: 40px;
    width: 350px;
    height: 350px;
  }
  @media ${(props) => props.theme.MediaQueries.xl.query} {
    margin: ${(props) => (props.right ? "0 120px 0 0" : "0 0 0 80px")};
  }
  
`;
const AboutImage1 = styled.img`
  margin-top:-50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-right: 40px;
    width: 450px;
    height: 350px;
  }
  @media ${(props) => props.theme.MediaQueries.xl.query} {
    margin: ${(props) => (props.right ? "0 120px 0 0" : "0 0 0 80px")};
  }
`;
const Image = styled.img`
  margin-top:-100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 250px;
  height: 450px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-right: 40px;
    display:none;
    width: 350px;
    height: 350px;
  }
`;
const Hide = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  display: none;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: block; 
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-right: 40px;
    width: 350px;
    height: 350px;
  }
  @media ${(props) => props.theme.MediaQueries.xl.query} {
    margin: ${(props) => (props.right ? "0 120px 0 0" : "0 0 0 80px")};
  }
  
`;

const HeroDiv = styled.div`
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 100vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;
`;

const Header = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: 600;
  font-size: 50px;
  color: ${(props) => props.theme.Colors.Header};
  margin-bottom: 20px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 70px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 90px;
  }
`;

const SubHeader = styled.p`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: 300;
  font-size: 25px;
  color: ${(props) => props.theme.Colors.Header};
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 25px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 30px;
  }
`;

const rainbowAnimation = keyframes`
  0% {
    border-color: red;
  }
  16.666% {
    border-color: orange;
  }
  33.333% {
    border-color: yellow;
  }
  50% {
    border-color: green;
  }
  66.666% {
    border-color: blue;
  }
  83.333% {
    border-color: indigo;
  }
  100% {
    border-color: violet;
  }
`;

const RegBtn = styled.span`
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin-top: 40px;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  animation: ${rainbowAnimation} 4s linear infinite;
  background-color:black;
`;

const BtnLink = styled.a`
  text-decoration: none;
  text-decoration: none;
  vertical-align: middle;
  padding: 5px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  outline: none;
  color: ${(props) => props.theme.Colors.Header};
`;

const LandingPage = () => {
  const [toggle, setToggle] = useState(1);

  useEffect(() => {
    console.log("landing page");
    AOS.init({
      offset: 250,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* <Hero></Hero> */}
      <HeroDiv
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
        }}
      >
        {/* <Timerworking/> */}
        <Header>Promethean 2024- 2025</Header>
        <SubHeader>An engineer's solutions to environmental problems </SubHeader> <br />
        <SubHeader>Register For MATRIX 2024 !!!</SubHeader>
        <RegBtn>
          <Link to="/matrix">
          <BtnLink target="_blank">
            Register Here
          </BtnLink>
          </Link>
        </RegBtn>
      </HeroDiv>
      <Main>
        <FlexDiv reverse data-aos="fade-up">
          <Card
            number="01"
            subTitle="About"
            title="What is Promethean"
            para="Promethean is inspired by the Greek Titan Prometheus (Ancient Greek Προμηθεύς - Fore thinker ). An innovator, problem solver and a futuristic thinker he was a champion of mankind known for his wily intelligence, who gave fire to mortals and also taught them agriculture so that they could progress and take technology to new levels.
              It focuses on real world problems happening in and around the world. Engineering is all about making life better, solving problems and allowing humankind to achieve new feats."
              buttonLink = {ROUTES.HOME}
          />
          <AboutImage src={PrometheanImage} />
        </FlexDiv>
        <FlexDiv data-aos="fade-up">
          <AboutImage src={Event1} />
          <Card
            number="02"
            subTitle="Event"
            title="Sustain X"
            para="
            Previously called as PROMETHEAN is an annual poster presentation event organized for our new GSTians, our FEs, to convey how they would consider making our earth a better place as an ENGINEER by proposing solutions.
            "
            buttonLink = {ROUTES.PROMETHEAN}
          />
          <Image src={Terratalk} right/>
        </FlexDiv>
        <FlexDiv data-aos="fade-up" >
          <Card
            number="03"
            subTitle="Event"
            title="TerraTalk"
            para="Terra talks stand out from other forms of presentations as an effective medium to convey accurate easy-to-understand information to a target audience. 
            We cannot survive without the environment, which is the backbone of our survival. To make people aware of this we invite some committed environmental leaders who are also engineers, who work to ensure that mankind preserves the desirable human-nature interaction.
            "
            buttonLink = {ROUTES.TERRA}
          />
          <Hide src={PrometheanImage} />
        </FlexDiv>
        <FlexDiv data-aos="fade-up">
          <AboutImage1 src={Event2} />
          <Card
            number="04"
            subTitle="Event"
            title="Matrix"
            para="Matrix is annual Quiz organised for our new GSTians, our FEs, where they can use their previous knowledge they have studied so far in a very interesting way.
            "
            buttonLink = {ROUTES.MATRIX}
          />
        </FlexDiv>      
        <div data-aos="fade-up">{/* <ContactUs /> */}</div>
      </Main>
    </>
  );
};

export default LandingPage;

/* <Main>
<FlexDiv reverse data-aos="fade-up">
  <Card
    number="01"
    subTitle="About"
    title="What is Promethean"
    para="Promethean is inspired by the Greek Titan Prometheus (Ancient Greek Προμηθεύς - Fore thinker ). An innovator, problem solver and a futuristic thinker he was a champion of mankind known for his wily intelligence, who gave fire to mortals and also taught them agriculture so that they could progress and take technology to new levels.
      It focuses on real world problems happening in and around the world. Engineering is all about making life better, solving problems and allowing humankind to achieve new feats."
  />
  <AboutImage src={PrometheanImage} right />
</FlexDiv>
<FlexDiv data-aos="fade-up">
  <AboutImage src={Event1} />
  <Card
    number="02"
    subTitle="Event"
    title="Promethean"
    para="
    PROMETHEAN is an annual poster presentation event organized for our new GSTians, our FEs, to convey how they would consider making our earth a better place as an ENGINEER by proposing solutions.
    "
  />
</FlexDiv>
<FlexDiv data-aos="fade-up">
  <Card
    number="03"
    subTitle="Event"
    title="TerraTalk"
    para="Terra talks stand out from other forms of presentations as an effective medium to convey accurate easy-to-understand information to a target audience. 
    We cannot survive without the environment, which is the backbone of our survival. To make people aware of this we invite some committed environmental leaders who are also engineers, who work to ensure that mankind preserves the desirable human-nature interaction.
    "
  />
  <AboutImage src={PrometheanImage} right />
</FlexDiv>
<div data-aos="fade-up"> <ContactUs /> </div>
</Main> */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import ContactUs from "../Components/Contactus";
import Hero from "../Components/Hero/Hero";
import PrometheanImage from "../Images/pp.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';

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
    padding: 60px 0;
    flex-direction: row;
  }
`;

const AboutImage = styled.img`
  background-size: cover;
  border-radius: 10px;
  width: 250px;
  height: 300px;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-right: 40px;
    width: 300px;
    height: 300px;
  }
  @media ${(props) => props.theme.MediaQueries.xl.query} {
    margin: ${(props) => (props.right ? "0 120px 0 0" : "0 0 0 80px")};
  }
`;

const EventImage = styled.img`
  background-size: cover;
  border-radius: 10px;
  width: 150px;
  height: 300px;
  background-position: center;
  margin-right: ${(props) => (props.right ? "10px" : "0")};
  @media ${(props) => props.theme.MediaQueries.l.query} {
    width: 300px;
    height: 350px;
  }

  &.clicked {
    width: 100px;
    @media ${(props) => props.theme.MediaQueries.l.query} {
      width: 150px;
    }
  }
`;

const SliderDiv = styled.div`
  display: flex;
  max-width: 310px;
  margin: 0 auto;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 50%;
    max-width: 380px;
  }
`;

const EventContent = styled.div`
  display: none;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 50%;
  }
  &.clicked {
    display: block;
  }
`;

const LandingPage = () => {
  const [toggle, setToggle] = useState(1);

  useEffect(() => {
    AOS.init({
      offset: 250, 
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      <Hero></Hero>
      <Main>
        <FlexDiv reverse data-aos='fade-up'>
          <Card
            number="01"
            subTitle="About"
            title="What is Promethean"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus finibus ex et molestie. Suspendisse porta sem eget pellentesque interdum. Suspendisse at consequat justo, nec semper mi. Mauris rhoncus quam vitae magna auctor ullamcorper. Maecenas et tellus ut augue efficitur sodales in in leo."
          />
          <AboutImage src={PrometheanImage} right />
        </FlexDiv>
        <FlexDiv data-aos='fade-up'>
          <SliderDiv>
            {console.log(toggle, "toggle")}
            <EventImage
              src={PrometheanImage}
              first
              right
              className={toggle === 1 ? "clicked" : "null"}
              onClick={() => setToggle(2)}
            />
            <EventImage
              src={PrometheanImage}
              className={toggle === 2 ? "clicked" : "null"}
              onClick={() => setToggle(1)}
            />
          </SliderDiv>
          <EventContent className={toggle === 1 ? "clicked" : "null"}>
            <Card
              number="02"
              subTitle="Events"
              title="Promethean"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus finibus ex et molestie. Suspendisse porta sem eget pellentesque interdum. Suspendisse at consequat justo, nec semper mi. Mauris rhoncus quam vitae magna auctor ullamcorper. Maecenas et tellus ut augue efficitur sodales in in leo."
            />
          </EventContent>
          <EventContent className={toggle === 2 ? "clicked" : "null"}>
            <Card
              number="02"
              subTitle="Events"
              title="TerraTalk"
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus finibus ex et molestie. Suspendisse porta sem eget pellentesque interdum. Suspendisse at consequat justo, nec semper mi. Mauris rhoncus quam vitae magna auctor ullamcorper. Maecenas et tellus ut augue efficitur sodales in in leo."
            />
          </EventContent>
        </FlexDiv>
        <FlexDiv data-aos='fade-up'>
          <Card
            number="03"
            subTitle="TESTIMONIAL"
            title="Student's Testimonial"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus finibus ex et molestie. Suspendisse porta sem eget pellentesque interdum. Suspendisse at consequat justo, nec semper mi. Mauris rhoncus quam vitae magna auctor ullamcorper. Maecenas et tellus ut augue efficitur sodales in in leo."
          />
          <AboutImage src={PrometheanImage} right />
        </FlexDiv>
        <div data-aos='fade-up'>
        {/* <ContactUs /> */}
        </div>
      </Main>
    </>
  );
};

export default LandingPage;

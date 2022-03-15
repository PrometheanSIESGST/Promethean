import React, { useState, useEffect } from "react";
import styled from "styled-components";
import prompage from "../Images/Prompage.jpeg";
import trial_img from "../Images/trial_img1.jpg";
import Hero from "../Components/Hero/Hero";
import FAQ_Img from "../Images/FAQ.png";
import Footer from "../Components/Footer";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import PromPageSchedule from "../Components/Schedule"
import AOS from "aos";
import 'aos/dist/aos.css';

const MainProm = styled.div`
  max-width: 320px;
  margin: 0 auto;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 720px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px;
  }
`;

const PromPageHeadText = styled.p`
  margin-left: 30px;
  margin-bottom: 30px;
  font-size: 23px;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: bold;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    text-align: center;
    font-size: 30px;
  }
`;

const PromPageRect = styled.img`
  width: 250px;
  height: 300px;
  margin-left: 37px;
  margin-top: 10px;
  border-radius: 15px;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-top: 60px;
  }
`;

const Greenbox = styled.rect`
  position: absolute;
  width: 40px;
  height: 40px;
  margin-left: 37px;
  margin-top: -30px;
  background: ${(props) => props.theme.Colors.LightBox};
  border-radius: 0px 5px 5px 0px;
`;

const PromPageRectHead = styled.p`
  margin-left: 55px;
  font-size: 18px;
  margin-top: -80px;
  width: fit-content;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: bold;
`;

const PromHeadGreen = styled.span`
  color: ${(props) => props.theme.Colors.SubHeading};
`;

const PromPagepara = styled.p`
  margin-left: 30px;
  margin-top: 95px;
  font-size: 15px;
  color: ${(props) => props.theme.Colors.Para};
  font-family: ${(props) => props.theme.Fonts.Poppins};

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-left: 350px;
    margin-top: -230px;
  }
`;

const Divider = styled.rect`
  position: absolute;
  width: 87%;
  margin-top: 10px;
  margin-left: 23px;
  border: 1px solid;
  color: ${(props) => props.theme.Colors.Para};

  @media ${(props) => props.theme.MediaQueries.xl.query} {
    margin-left: 350px;
    margin-top: 30px;
    width: 45%;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-left: 350px;
    margin-top: 30px;
    width: 65%;
  }
`;

const Count_cont = styled.div`
@media ${(props) => props.theme.MediaQueries.l.query} {
  margin-left: 320px;
}
`

const Count_cont_2 = styled.div`
@media ${(props) => props.theme.MediaQueries.l.query} {
  margin-left: 350px;
  margin-top: -82px;
}
`

const Count = styled.p`
  margin-left: 35px;
  margin-top: 40px;
  font-size: 20px;
  color: ${(props) => props.theme.Colors.SubHeading};
  font-family: ${(props) => props.theme.Fonts.Poppins};

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-top: 60px;
    width: 60%;
    font-size: 30px;
  }
`;

const CountDetail = styled.p`
  margin-left: 25px;
  margin-top: 2px;
  font-size: 8px;
  width: min-content;
  text-align: center;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Poppins};

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-top: 5px;
    width: 60%;
    width: min-content;
    text-align: center;
    font-size: 10px;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.Colors.SubHeading};
  border: none;
  width: 100px;
  height: 30px;
  color: ${(props) => props.theme.Colors.Header};
  padding: 5px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px 200px;
  border-radius: 8px;

  @media ${(props) => props.theme.MediaQueries.xl.query} {
    margin-left: 910px;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-left: 1110px;
  }
`;

const MoreInfopara = styled.p`
  margin-top: -42px;
  margin-left: 200px;
  font-size: 15px;
  color: ${(props) => props.theme.Colors.Para};
  font-family: ${(props) => props.theme.Fonts.Poppins};

  @media ${(props) => props.theme.MediaQueries.xl.query} {
    margin-left: 110px;
    width: max-content;
    text-align: left;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-left: 1110px;
    width: max-content;
    text-align: left;
  }
`;

const Main = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0;
  width: device-width;
  @media ${(props) => props.theme.MediaQueries.s.query} {
    max-width: 560px;
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 720px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px;
  }
`;

const PromHero = styled.img`
width: 100%;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`


const Promethean = () => {

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
      <Main>
        <PromHero src={prompage} >
        </PromHero>
        <div data-aos='fade-up'>
        <PromPageHeadText>
          ABOUT <PromHeadGreen>PROMETHEAN</PromHeadGreen>
        </PromPageHeadText>
        <PromPageRect src={trial_img}></PromPageRect>
        <PromPageRectHead>PROMETHEAN 2020</PromPageRectHead>
        <Greenbox></Greenbox>
        <PromPagepara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus
          finibus ex et molestie. Suspendisse porta sem eget pellentesque
          interdum. Suspendisse at consequat justo, nec semper mi. Mauris
          rhoncus quam vitae magna auctor ullamcorper. Maecenas et tellus ut
          augue efficitur sodales in in leo. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut finibus finibus ex et molestie.
          Suspendisse porta sem eget pellentesque interdum. Suspendisse at
          consequat justo, nec semper mi. Mauris rhoncus quam vitae magna auctor
          ullamcorper. Maecenas et tellus ut augue efficitur sodales in in leo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus
          finibus ex et molestie. Suspendisse porta sem eget pellentesque
          interdum. Suspendisse at consequat justo, nec semper mi. Mauris
          rhoncus quam vitae magna auctor ullamcorper. Maecenas et tellus ut
          augue efficitur sodales in in leo. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut finibus finibus ex et molestie.
          Suspendisse porta sem eget pellentesque interdum. Suspendisse at
          consequat justo, nec semper mi. Mauris rhoncus quam vitae magna auctor
          ullamcorper. Maecenas et tellus ut augue efficitur sodales in in leo.
        </PromPagepara>
        </div>
        <Divider></Divider>
        <Count_cont>
        <Count>120</Count>
        <CountDetail>Student's Participated</CountDetail>
        </Count_cont>
        <Count_cont_2>
        <Count style={{ margin: "-56px 0px 0px 93px" }}>28</Count>
        <CountDetail style={{ margin: "1px 0px 0px 91px" }}>Teams</CountDetail>
        </Count_cont_2>
        <MoreInfopara>For more info</MoreInfopara>
        <Button>Brouchre</Button>
        <div data-aos='fade-up'>
        <PromPageHeadText style={{ margin: "85px 0px 50px 40px" }}>
          PREVIOUS <PromHeadGreen>POSTERS</PromHeadGreen>
        </PromPageHeadText>
        <Hero></Hero>
        </div>
        <div data-aos='fade-up'>
        <PromPageHeadText style={{ margin: "50px 0px 60px 90px" }}>
          SCHE<PromHeadGreen>DULE</PromHeadGreen>
        </PromPageHeadText>
      </div>
      <PromPageSchedule></PromPageSchedule>
      </Main>
    </>
  );
};

export default Promethean;

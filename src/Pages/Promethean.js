import React, { useState, useEffect } from "react";
import styled from "styled-components";
import prompage from "../Images/promBg.jpg";
import trial_img from "../Images/pp.jpg";
import Hero from "../Components/Hero/Hero";
import FAQ_Img from "../Images/FAQ.png";
import Footer from "../Components/Footer";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import PromPageSchedule from "../Components/Schedule";
import AOS from "aos";
import "aos/dist/aos.css";

const MainProm = styled.div`
  max-width: 300px;
  margin: 0 auto;
  @media ${(props) => props.theme.MediaQueries.s.query} {
    max-width: 570px;
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 720px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px;
  }
`;

const HeroDiv = styled.div`
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 60vh;
  margin-bottom: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 100%;
  }
`;

const PromPageHeadText = styled.p`
  margin-bottom: 10px;
  font-size: 23px;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: bold;
  text-align: center;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-bottom: 50px;
    font-size: 35px;
  }
`;

const PromPageRect = styled.img`
  width: 250px;
  height: 300px;
  /* margin-left: 37px; */
  margin-top: 10px;
  border-radius: 15px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-right: 40px;
  }
`;

const Greenbox = styled.rect`
  position: absolute;
  width: 40px;
  height: 40px;
  margin-top: -30px;
  background: ${(props) => props.theme.Colors.LightBox};
  border-radius: 0px 5px 5px 0px;
`;

const PromPageRectHead = styled.p`
  margin-left: 15px;
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

const PromPagepara = styled.p`x;
  margin-top: 50px;
  font-size: 14px;
  color: ${(props) => props.theme.Colors.Para};
  font-family: ${(props) => props.theme.Fonts.Poppins};
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.Colors.Para};
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-top: 0px;
    font-size: 18px;
  }
`;

const Divider = styled.rect`
  position: absolute;
  width: 87%;
  margin-top: 10px;
  margin-left: 23px;
  border: 1px solid;
  color: ${(props) => props.theme.Colors.Para};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-left: 350px;
    margin-top: 30px;
    width: 45%;
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-left: 350px;
    margin-top: 30px;
    width: 65%;
  }
`;

const CountMainDiv = styled.div`
  display: flex;
`;

const CountDiv = styled.div`
  margin-right: 20px;
`;

const Count = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: ${(props) => props.theme.Colors.SubHeading};
  font-family: ${(props) => props.theme.Fonts.Poppins};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-top: 20px;
    font-size: 22px;
  }
`;

const CountDetail = styled.p`
  margin-top: 2px;
  font-size: 12px;
  width: min-content;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Poppins};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-top: 5px;
    width: 60%;
    width: min-content;
    font-size: 14px;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.Colors.SubHeading};
  border: none;
  color: ${(props) => props.theme.Colors.Header};
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  border-radius: 8px;
  margin-top: 15px;
`;

const MoreInfopara = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.Colors.Para};
  font-family: ${(props) => props.theme.Fonts.Poppins};
  margin-top: 20px;
`;

const Main = styled.div`
  max-width: 320px;
  margin: auto;
  padding: 0;
  width: device-width;
  box-sizing: border-box;
  overflow-x: hidden;
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
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    flex-direction: row;
    align-items: start;
  }
`;

const Promethean = () => {
  const [toggle, setToggle] = useState(1);

  useEffect(() => {
    AOS.init({
      offset: 250,
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <HeroDiv
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url(${prompage})`,
        }}
      />
      <MainProm>
        <div data-aos="fade-up">
          <PromPageHeadText>
            ABOUT <PromHeadGreen>PROMETHEAN</PromHeadGreen>
          </PromPageHeadText>
          <MainFlexDiv>
            <PromPageRect src={trial_img}></PromPageRect>
            {/* <PromPageRectHead>PROMETHEAN 2020</PromPageRectHead>
            <Greenbox></Greenbox> */}
            <div>
              <PromPagepara>
                Promethean is inspired by the Greek Titan Prometheus (Ancient
                Greek Προμηθεύς "Fore thinker ") an innovator, problem solver
                and a futuristic thinker. He was a champion of mankind and also
                taught people agriculture so that they could progress and take
                technology to new levels.PROMETHEAN is an annual poster
                presentation event organized for our new GSTians, our FEs, to
                convey how they would consider making our earth a better place
                as an ENGINEER by proposing their own solutions. It is
                associated with real-world environmental concerns. Technology is
                all about working to improve people's lives, finding solutions,
                and enabling humanity to achieve greater heights.
              </PromPagepara>
              <FlexDiv>
                <CountMainDiv>
                  <CountDiv>
                    <Count>120</Count>
                    <CountDetail>Student's Participated</CountDetail>
                  </CountDiv>
                  <CountDiv>
                    <Count>28</Count>
                    <CountDetail>Teams</CountDetail>
                  </CountDiv>
                </CountMainDiv>
                <div>
                  <MoreInfopara>For more info</MoreInfopara>
                  <Button>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1P4RBz8BAoDFHw08nZf9G5MOwVmjfKY8Q"
                      style={{ color: "white" }}
                    >
                      Brouchre
                    </a>
                  </Button>
                </div>
              </FlexDiv>
            </div>
          </MainFlexDiv>
        </div>

        <div data-aos="fade-up">
          <PromPageHeadText>
            PREVIOUS <PromHeadGreen>POSTERS</PromHeadGreen>
          </PromPageHeadText>
          <Hero></Hero>
        </div>
        <PromPageHeadText>
          SCHE<PromHeadGreen>DULE</PromHeadGreen>
        </PromPageHeadText>
        <PromPageSchedule></PromPageSchedule>
      </MainProm>
    </>
  );
};

export default Promethean;

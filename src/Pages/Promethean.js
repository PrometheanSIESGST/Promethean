import React from "react";
import styled from "styled-components";
import prompage from "../Images/Prompage.jpeg";
import trial_img from "../Images/trial_img1.jpg";
import Hero from "../Components/Hero/Hero";
import FAQ_Img from "../Images/FAQ.png"
import Footer from "../Components/Footer"

const Header = styled.h1`
  max-width: 1200px;
  margin: 0 auto;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Arial};
`;

const PromPageHeadText = styled.p`
  margin-left: 30px;
  font-size: 23px;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: bold;
`;

const PromPageRect = styled.img`
  width: 250px;
  height: 300px;
  margin-left: 37px;
  margin-top: 10px;
  border-radius: 15px;
`;

const Greenbox = styled.rect`
  position: absolute;
  width: 40px;
  height: 40px;
  margin-left: 37px;
  margin-top: -50px;
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

const PromPagepara = styled.p`
  margin-left: 30px;
  margin-top: 95px;
  font-size: 15px;
  color: ${(props) => props.theme.Colors.Para};
  font-family: ${(props) => props.theme.Fonts.Poppins};
`;
const Divider = styled.rect`
  position: absolute;
  width: 280px;
  margin-top: 10px;
  margin-left: 23px;
  border: 1px solid;
  color: ${(props) => props.theme.Colors.Para};
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
`;
const Schedule_Bar = styled.line`
  position: absolute;
  width: 950px;
  margin-left: -413px;
  margin-top: 410px;
  border: 2px solid;
  color: ${(props) => props.theme.Colors.Header};
  transform: rotate(-90deg);
`;

const Scheduled_barArrow = styled.rect`
  position: absolute;
  width: 50px;
  margin-top: 0px;
  margin-left: 60px;
  border: 1px solid;
  color: ${(props) => props.theme.Colors.Header};
`;

const Ellipse = styled.ellipse`
  position: absolute;
  width: 10px;
  height: 10px;
  margin-top: -3.8px;
  margin-left: 107px;
  background-color: ${(props) => props.theme.Colors.Header};
  border-radius: 50%;
`;

const ScheduleRect = styled.div`
position: absolute;
width: 150px;
height: 100px;
margin-left: 113px;
margin-top: -46px;
background: ${(props) => props.theme.Colors.SubHeading};
border-radius: 10px;
z-index: -1;

`

const Schedule = styled.p`
font-family: ${(props) => props.theme.Fonts.Poppins};
text-align: center;
font-weight: bold;
`

const Promethean = () => {
  return (
    <>
      <img src={prompage}></img>
      <PromPageHeadText>ABOUT PROMETHEAN</PromPageHeadText>
      <PromPageRect src={trial_img}></PromPageRect>
      <PromPageRectHead>PROMETHEAN 2020</PromPageRectHead>
      <Greenbox></Greenbox>
      <PromPagepara>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus
        finibus ex et molestie. Suspendisse porta sem eget pellentesque
        interdum. Suspendisse at consequat justo, nec semper mi. Mauris rhoncus
        quam vitae magna auctor ullamcorper. Maecenas et tellus ut augue
        efficitur sodales in in leo. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut finibus finibus ex et molestie. Suspendisse porta
        sem eget pellentesque interdum. Suspendisse at consequat justo, nec
        semper mi. Mauris rhoncus quam vitae magna auctor ullamcorper. Maecenas
        et tellus ut augue efficitur sodales in in leo.{" "}
      </PromPagepara>
      <Divider></Divider>
      <PromPagepara style={{ margin: "60px 0px 0px 200px" }}>
        For more info
      </PromPagepara>
      <Button>Brouchre</Button>
      <PromPageHeadText style={{ margin: "90px 0px 50px 40px" }}>
        PREVIOUS POSTERS
      </PromPageHeadText>
      <Hero></Hero>
      <PromPageHeadText style={{ margin: "90px 0px 90px 90px" }}>
        SCHEDULE
      </PromPageHeadText>
      <Schedule_Bar></Schedule_Bar>


      <Scheduled_barArrow></Scheduled_barArrow>
      <Ellipse></Ellipse>
      <ScheduleRect>
        <Schedule>26th Feb 2022</Schedule>
        <Schedule style = {{margin: "-10px"}}>Introduction to PROMETHEAN</Schedule>
      </ScheduleRect>


      <Scheduled_barArrow
        style={{ margin: "130px 0px 90px 60px" }}
      ></Scheduled_barArrow>
      <Ellipse style={{ margin: "125.5px 0px 90px 107px" }}></Ellipse>
      <ScheduleRect style={{ margin: "84px 0px 90px 112px" }}>
        <Schedule>16th Mar 2022</Schedule>
        <Schedule style = {{margin: "-10px"}}>Register for Promethean</Schedule>
      </ScheduleRect>


      <Scheduled_barArrow
        style={{ margin: "260px 0px 90px 60px" }}
      ></Scheduled_barArrow>
      <Ellipse style={{ margin: "256px 0px 90px 107px" }}></Ellipse>
      <ScheduleRect style={{ margin: "215px 0px 90px 112px" }}>
        <Schedule>16th Mar 2022</Schedule>
        <Schedule style = {{margin: "-10px"}}>Topic Selection for Teams</Schedule>
      </ScheduleRect>


      <Scheduled_barArrow
        style={{ margin: "400px 0px 90px 60px" }}
      ></Scheduled_barArrow>
      <Ellipse style={{ margin: "396px 0px 90px 107px" }}></Ellipse>
      <ScheduleRect style={{ margin: "350px 0px 90px 112px" }}>
        <Schedule>21st Mar 2022</Schedule>
        <Schedule style = {{margin: "-10px"}}>Promethean Mentoring Session</Schedule>
      </ScheduleRect>


      <Scheduled_barArrow
        style={{ margin: "540px 0px 90px 60px" }}
      ></Scheduled_barArrow>
      <Ellipse style={{ margin: "536px 0px 90px 107px" }}></Ellipse>
      <ScheduleRect style={{ margin: "490px 0px 90px 112px" }}>
        <Schedule>1st Apr 2022</Schedule>
        <Schedule style = {{margin: "-10px"}}>Elimination Round</Schedule>
      </ScheduleRect>


      <Scheduled_barArrow
        style={{ margin: "680px 0px 90px 60px" }}
      ></Scheduled_barArrow>
      <Ellipse style={{ margin: "676px 0px 90px 107px" }}></Ellipse>
      <ScheduleRect style={{ margin: "630px 0px 90px 112px" }}>
        <Schedule>9th Apr 2022</Schedule>
        <Schedule style = {{margin: "-10px"}}>Promethean first Round</Schedule>
      </ScheduleRect>


      <Scheduled_barArrow
        style={{ margin: "820px 0px 90px 60px" }}
      ></Scheduled_barArrow>
      <Ellipse style={{ margin: "816px 0px 90px 107px" }}></Ellipse>
      <ScheduleRect style={{ margin: "770px 0px 90px 112px" }}>
        <Schedule>10th Apr 2022</Schedule>
        <Schedule style = {{margin: "-10px"}}>Results !!!</Schedule>
      </ScheduleRect>

      <PromPageHeadText style={{ margin: "1070px 0px 50px 130px" }}>
        FAQ
      </PromPageHeadText>
      <img src = {FAQ_Img}></img>
      <Footer></Footer>
    </>
  );
};

export default Promethean;

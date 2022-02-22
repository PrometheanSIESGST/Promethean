import React, { Component } from "react";
import styled from "styled-components";
import greenLine from "../Images/green_line.jpeg";

const CardStyle = styled.p`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 38px;
  left: 29px;
  top: 120px;
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 50px;
  z-index: 1;
  color: ${(props) => props.theme.Colors.Header};
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 50px;
    left: 80px;
  }
`;



const CardStyle_para = styled.p`
  position: relative;
  width: 353px;
  height: 187px;
  left: 29px;
  top: 160px;
  max-width: fit-content;

  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 15px;
    left: 80px;
    top: 170px
  }
`;

const CardStyle3 = styled.p`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 38px;
  left: 29px;
  top: -165px;
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 50px;
  z-index: 1;
  color: ${(props) => props.theme.Colors.Header};
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 50px;
    left: 80px;
  }
`;

const CardStyle3_para = styled.p`
  position: relative;
  width: 353px;
  height: 187px;
  left: 29px;
  top: -125px;
  max-width: fit-content;

  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 15px;
    left: 80px;
    top: -125px
  }
`;

const CardStyle2 = styled.p`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 38px;
  left: 29px;
  top: 0px;
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 50px;
  color: ${(props) => props.theme.Colors.Header};
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 50px;
    left: 900px
    
  }
`;

const CardStyle2_para = styled.p`
  position: relative;
  width: 353px;
  height: 187px;
  left: 29px;
  top:  0px;
  max-width: fit-content;

  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 15px;
    left: 900px    
  }
`;

const Cardblock = styled.rect`
  position: absolute;
  width: 200px;
  height: 230px;
  left: 60px;
  top: 80px;
  background: #969595;
  border-radius: 10px;

  @media ${(props) => props.theme.MediaQueries.m.query} { 
    left: 900px;
    width: 320px;
    height: 340px;
    top: 530px
  }
`;

const Bg_num = styled.p`
position: relative;
width: 15px;
height: 20px;
left: -20px;
top: 120px;
font-family: ${(props) => props.theme.Fonts.Poppins};
font-style: normal;
font-weight: 600;
font-size: 130px;
line-height: 270px;
text-align: center;
z-index: -1;
color: #23333B;
`

const Bg_num_left = styled.p`
position: relative;
width: 15px;
height: 20px;
left: -20px;
top: 8px;
font-family: ${(props) => props.theme.Fonts.Poppins};
font-style: normal;
font-weight: 600;
font-size: 130px;
line-height: 270px;
text-align: center;
z-index: -1;
color: #23333B;

@media ${(props) => props.theme.MediaQueries.m.query} { 
  left: 700px;
  top: 65px;
}
`

const Bg_num3 = styled.p`
position: relative;
width: 15px;
height: 20px;
left: -20px;
top: -165px;
font-family: ${(props) => props.theme.Fonts.Poppins};
font-style: normal;
font-weight: 600;
font-size: 130px;
line-height: 270px;
text-align: center;
z-index: -1;
color: #23333B;
`

const Bg_rect = styled.rect`
position: absolute;
width: 37px;
height: 2px;
left: 33px;
top: 440px;

background: ${(props) => props.theme.Colors.SubHeading};
border-radius: 20px;

@media ${(props) => props.theme.MediaQueries.m.query} { 
  top: 460px
}
`
const Bg_rect_left = styled.rect`
position: absolute;
width: 37px;
height: 2px;
left: 33px;
top: 912px;

background: ${(props) => props.theme.Colors.SubHeading};
border-radius: 20px;

@media ${(props) => props.theme.MediaQueries.m.query} { 
  left: 750px;
  top: 1024px; 
}
`
const Bg_rect3 = styled.rect`
position: absolute;
width: 37px;
height: 2px;
left: 33px;
top: 1312px;

background: ${(props) => props.theme.Colors.SubHeading};
border-radius: 20px;

@media ${(props) => props.theme.MediaQueries.m.query} { 
  top: 1410px
}
`

const Bg_content = styled.p`
position: relative;
width: 51px;
height: 13px;
left: 82px;
top: 95px;

font-family: ${(props) => props.theme.Fonts.Arial};
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 13px;
text-align: center;

color: ${(props) => props.theme.Colors.SubHeading};
`

const Bg_content_left = styled.p`
position: relative;
width: 51px;
height: 13px;
left: 82px;
top: -10px;

font-family: ${(props) => props.theme.Fonts.Arial};
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 13px;
text-align: center;
color: ${(props) => props.theme.Colors.SubHeading};

@media ${(props) => props.theme.MediaQueries.m.query} { 
  left: 815px;
  top: 40px 
}
`


export default function Card() {
  return (
    <>
      <Cardblock></Cardblock>
      <Bg_num>01</Bg_num>
      <Bg_rect></Bg_rect>
      <Bg_content>ABOUT</Bg_content>
      <CardStyle>What is Promethean?</CardStyle>
      <CardStyle_para>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus
        finibus ex et molestie. Suspendisse porta sem eget pellentesque
        interdum. Suspendisse at consequat justo, nec semper mi. Mauris rhoncus
        quam vitae magna auctor ullamcorper. Maecenas et tellus ut augue
        efficitur sodales in in leo.
      </CardStyle_para>

      <Bg_num_left >02</Bg_num_left>
      <Bg_rect_left></Bg_rect_left>
      <Bg_content_left>EVENTS</Bg_content_left>
      <CardStyle2>Promethean</CardStyle2>
      <CardStyle2_para>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus
        finibus ex et molestie. Suspendisse porta sem eget pellentesque
        interdum. Suspendisse at consequat justo, nec semper mi. Mauris rhoncuscd
        quam vitae magna auctor ullamcorper. Maecenas et tellus ut augue
        efficitur sodales in in leo.
      </CardStyle2_para>

      <Bg_num3>03</Bg_num3>
      <Bg_rect3 ></Bg_rect3>
      <Bg_content style = {{top: "-188px"}}>TESTIMONIAL</Bg_content>
      <CardStyle3>Students Testimonial</CardStyle3>
      <CardStyle3_para>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus
        finibus ex et molestie. Suspendisse porta sem eget pellentesque
        interdum. Suspendisse at consequat justo, nec semper mi. Mauris rhoncus
        quam vitae magna auctor ullamcorper. Maecenas et tellus ut augue
        efficitur sodales in in leo.
      </CardStyle3_para>
    </>
  );
}

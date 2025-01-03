import React, { Component } from "react";

import greenLine from "../Images/green_line.jpeg";
import styled,{keyframes} from "styled-components";

import { Link } from 'react-router-dom'; // If using React Router
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


const ContentCard = styled.div`
  position: relative;
  height: 550px;
`;

const CardStyle = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-size: 45px;
  margin-bottom: 20px;
  z-index: 1;
  color: ${(props) => props.theme.Colors.Header};
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-left: 20px;
    font-size: 50px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 70px;
  }
`;

const CardStylePara = styled.p`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  max-width: 250px;
  color: rgba(255, 255, 255, 0.6);
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 15px;
    margin: 0 0 0 20px;
    max-width: 500px;
  }
`;

const BgNum = styled.p`
  position: relative;
  margin-left: -60px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 600;
  font-size: 150px;
  z-index: -1;
  color: #23333b;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin-left: 0px;
  }
`;

const BgRect = styled.div`
  background: ${(props) => props.theme.Colors.SubHeading};
  border-radius: 20px;
  width: 50px;
  height: 1px;
  margin-right: 10px;
`;

const BgContent = styled.p`
  font-family: ${(props) => props.theme.Fonts.Arial};
  font-size: 14px;
  line-height: 30px;
  color: ${(props) => props.theme.Colors.SubHeading};
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 16px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ContentDiv = styled.div`
  position: relative;
  max-width: 280px;
  top: -120px;
  left: 20px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 350px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    left: 70px;
    max-width: 600px;
  }
`

const Card = ({subTitle , title , para , number , buttonLink}) => {
  console.log(buttonLink);
  return (
    <ContentCard>
      <BgNum>{number}</BgNum>
      <ContentDiv>
        <FlexDiv>
          <BgRect></BgRect>
          <BgContent>{subTitle}</BgContent>
        </FlexDiv>
        <CardStyle>{title}</CardStyle>
        <CardStylePara>
          {para}
        </CardStylePara>
            <RegBtn>
                  <Link to={buttonLink}>
                  <BtnLink target="_blank">
                    Register Here
                  </BtnLink>
                  </Link>
                </RegBtn>
      </ContentDiv>
    </ContentCard>
  );
}

export default Card;

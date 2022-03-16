import React from "react";
import styled from "styled-components";

const TeamDiv = styled.div`
  padding: 30px 0;
  text-align: center;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding: 50px 0;
  }
`;

const TeamHeader = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 600;
  font-size: 25px;
  color: ${(props) => props.theme.Colors.Header};
  @media ${(props) => props.theme.MediaQueries.s.query} {
    font-size: 30px;
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 40px;
  }
`;

const TeamGreen = styled.span`
  color: ${(props) => props.theme.Colors.SubHeading};
`;

const TeamSubheader = styled.p`
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Montserrat};
  font-size: 12px;
  line-height: 20px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 16px;
  }
`;

const TeamIntro = ({designation , about}) => {
  return (
    <TeamDiv>
      <TeamHeader>
        MEET THE <TeamGreen>{designation}</TeamGreen>
      </TeamHeader>
      <TeamSubheader>{about}</TeamSubheader>
    </TeamDiv>
  );
}

export default TeamIntro;

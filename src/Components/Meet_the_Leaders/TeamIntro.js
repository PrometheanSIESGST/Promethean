import React from "react";
import styled from "styled-components";

const TeamCard_Component_Header = styled.h1`
  position: relative;
  width: 300px;
  height: 50px;
  top: 200px;
  left: 25px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-style: normal;
  font-weight: 600;
  color: ${(props) => props.theme.Colors.Header};
`;

const TeamCard_Component_subheader = styled.p`
    position: relative;
    width: 250px;
    height: 20px;
    top: 180px;
    left: 65px;
    color: ${(props) => props.theme.Colors.Header};
    font-family: ${(props) => props.theme.Fonts.Montserrat};
    font-size: 15px

`

function TeamIntro() {
  return (
    <div>
      <TeamCard_Component_Header>Meet the Leaders</TeamCard_Component_Header>
      <TeamCard_Component_subheader>lorem ipsum lorem ipsum</TeamCard_Component_subheader>
    </div>
  );
}

export default TeamIntro;

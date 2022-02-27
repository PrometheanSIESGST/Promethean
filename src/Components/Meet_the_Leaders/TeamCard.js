import React from "react";
import styled from "styled-components";

const Team_Card = styled.img`
  position: absolute;
  display: flex;
  width: 180px;
  height: 220px;
  left: 65px;
  top: 400px;

  background: #c4c4c4;
  border-radius: 5px 35px;
`;

const Leader_detail_head = styled.p`
    position: relative;
    top: 480px;
    left: 95px;
    font-family: ${(props) => props.theme.Fonts.Montserrat};
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: ${(props) => props.theme.Colors.Header};
`;
const Leader_detail_subhead = styled.p`
    position: relative;
    top: 470px;
    left: 123px;
    font-family: ${(props) => props.theme.Fonts.Montserrat};
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    color: ${(props) => props.theme.Colors.SubHeading};



`;

function TeamCard() {
  return (
    <div>
      <Team_Card src="https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></Team_Card>
      <Leader_detail_head>Pradyumn Joshi</Leader_detail_head>
      <Leader_detail_subhead>Chairperson</Leader_detail_subhead>
      <Team_Card
        src="https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        style={{ top: "800px" }}
      ></Team_Card>
      <Leader_detail_head style = {{top: "810px"}}>Anvesh Lokhande</Leader_detail_head>
      <Leader_detail_subhead style = {{top: "800px"}}>Secretary</Leader_detail_subhead>
    </div>
  );
}

export default TeamCard;

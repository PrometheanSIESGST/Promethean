import React from "react";
import styled from "styled-components";
import team from "../../Images/team.jpg";

const Card = styled.div`
  max-width: 180px;
  text-align: center;
  margin-bottom: 30px;
`;

const Team_Card = styled.img`
  display: flex;
  width: 180px;
  height: 220px;
  background: #c4c4c4;
  border-radius: 5px 30px;
`;

const Leader_detail_head = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Montserrat};
  font-weight: 400;
  font-size: 16px;
  margin: 5px 0;
  color: ${(props) => props.theme.Colors.Header};
`;

const Leader_detail_subhead = styled.p`
  font-family: ${(props) => props.theme.Fonts.Montserrat};
  font-size: 12px;
  color: ${(props) => props.theme.Colors.SubHeading};
`;

const TeamCard = ({name , post , photo}) => {
  return (
    <Card>
      <Team_Card src={photo}></Team_Card>
      <Leader_detail_head>{name}</Leader_detail_head>
      <Leader_detail_subhead>{post}</Leader_detail_subhead>
    </Card>
  );
}

export default TeamCard;

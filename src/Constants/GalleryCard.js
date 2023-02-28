import React from "react";
import styled from "styled-components";

const Card = styled.div`
  max-width: 500px;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 30px;
  
`;

const Team_Card = styled.img`
  display: flex;
  width: 375px;
  height: 375px;
  background: #c4c4c4;
  border-radius: 5px 5px;
  border: 1.5px solid #fff;
  cursor: pointer;
  object-fit: cover;
  &:hover {
      transform: scale(1.1);
    }
  
`;

const GalleryCard = ({photo}) => {
    return (
      <Card>
        <Team_Card src={photo}></Team_Card>
      </Card>
    );
  }
  
  export default GalleryCard;
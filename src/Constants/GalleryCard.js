import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Card = styled.div`
  max-width: 500px;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 30px;
  
`;

const TeamCard = styled.img`
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


const ViewCard = styled.img`
  border-radius: 5px 5px;
  border: 1.5px solid #fff;
  cursor: pointer;
  object-fit: cover; 
  max-height:375px;
  max-width:375px;
  @media ${(props) => props.theme.MediaQueries.s.query} {
    max-height: 540px;
    max-width: 540px;
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-height: 640px;
    max-width: 700px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-height: 640px;
    max-width: 700px;
}`;


const GalleryCard = ({photo}) => {
  const [open,setOpen]=useState(false)

  const handleClose = () =>{
    setOpen(false)
  }

  const handleOpen = () =>
  {
    setOpen(true)
  }

    return (
      <>
      <Card>
        <TeamCard src={photo} onClick={handleOpen}></TeamCard>
      </Card>
      <Modal isOpen={open} onClose={handleClose}>
          <ViewCard src={photo}></ViewCard>
      </Modal>
      </>
    );
  }
  
  export default GalleryCard;

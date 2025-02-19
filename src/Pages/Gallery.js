import React, { useState } from "react";
import styled from "styled-components";
//import CloseIcon from '@mui/icons-material/Close';
import Gpic from "../Images/GBG.jpg";
import Section from "../Constants/Section.js";


const Main = styled.div`
  max-width: 320px;
  margin: 0 auto;
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


const Tab = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: -300px;
  left: 50%;
  transform: translate(-50%);
  width: 95%;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 600px;
  }
`;

const Tabs = styled.button`
  cursor: pointer;
  background: none;
  color: ${(props) => props.theme.Colors.White};
  border: 1px solid ${(props) => props.theme.Colors.White};
  outline: none;
  padding: 5px 15px;
  border-radius: 30px;
  margin: 0 10px 10px 0;
  transition: 0.3s ease;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 18px;
    margin: 0 15px 15px 0;
  }
  &:hover {
    background: ${(props) => props.theme.Colors.SubHeading};
    border-color: ${(props) => props.theme.Colors.SubHeading};
  }
  &.active {
    background: ${(props) => props.theme.Colors.SubHeading};
    border-color: ${(props) => props.theme.Colors.SubHeading};
  }
`;

const HeroDiv = styled.div`
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 60vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 100%;
  }
`;

const Gallery = () => {
 
  const [gallery, setGallery] = useState(0);
  return(
      <>
      <HeroDiv
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${Gpic})`,
        }}
        >
      <Tab>
      <Tabs
            className={gallery === 0 ? "active" : "null"}
            onClick={() => setGallery(0)}
          >
            All
          </Tabs>
        <Tabs
            className={gallery === 1 ? "active" : "null"}
            onClick={() => setGallery(1)}
          >
            2020-21
          </Tabs>
          <Tabs
            className={gallery === 2 ? "active" : "null"}
            onClick={() => setGallery(2)}
          >
            2021-22
          </Tabs>
          <Tabs
            className={gallery === 3 ? "active" : "null"}
            onClick={() => setGallery(3)}
          >
            2022-23
          </Tabs>
          <Tabs
            className={gallery === 4 ? "active" : "null"}
            onClick={() => setGallery(4)}
          >
            2023-24
          </Tabs>
        </Tab>
    </HeroDiv>
    <Main>
    <Section gallery={gallery}/> 
    </Main>
      </>
  )
}

export default Gallery;

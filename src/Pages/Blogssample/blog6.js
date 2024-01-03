import react from 'react';
import styled from "styled-components";
import React from 'react';
import HeroImg from "../Blogssample/heroimgblog/river.jpg";
import * as ROUTES from "../../Constants/routes";
import { Link } from 'react-router-dom';

const Main = styled.div`
  max-width: 320px;
  margin: 0 auto;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 720px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px;
  }
`;

const Header = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: 600;
  color: ${(props) => props.theme.Colors.Header};
  margin-bottom: 20px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 70px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 50px;
  }
`;

const HeroDiv = styled.div`
  max-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  height: 50vh;
  justify-content:center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;
`;

const Blogging = styled.div`
font-size: 18px;
padding:15px;
text-align:justify;
border-radius:25px;
font-family: ${(props) => props.theme.Fonts.Josefin};
background-color: rgba(255, 255, 255, 0.7);
@media ${(props) => props.theme.MediaQueries.m.query} {
    margin:45px;
    font-size: 25px;
    padding:40px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
  margin:70px;
  font-size: 25px;
  padding:60px;
  }
`;

const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const BackButton = styled(Link)`
  text-decoration: none;
`;

const BackButtonStyled = styled.button`
  background-color: #fff;
  color: #333; 
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd; 
  }
`;

const BLOG_SIX = () => {
    return (
        <>
           <HeroDiv
           style={{
            backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
           }}
           >
            <Header>The Environmental Impacts of Rivers: A Closer Look at Nature's Lifelines.</Header>
          </HeroDiv>
            <Main>
            <Blogging>
              <p><br/>
              Rivers, often considered the arteries of our planet, play a crucial role in shaping landscapes and
              sustaining life. However, their immense importance is accompanied by a range of environmental impacts
              that warrant careful consideration.<br/><br/>
              1. Erosion and Sedimentation:<br/>
              Rivers are dynamic forces that sculpt the Earth's surface through erosion and sedimentation. While this
              natural process contributes to the formation of fertile plains, it can also lead to issues such as
              sedimentation in water bodies, affecting aquatic habitats and water quality.<br/><br/>
              2. Biodiversity and Habitat Modification:<br/>
              The diverse ecosystems along riverbanks support a myriad of plant and animal species. However, human
              activities, such as dam construction and channelization, can alter river habitats, jeopardizing the
              biodiversity that depends on these ecosystems.<br/><br/>
              3. Water Quality and Pollution:<br/>
              Rivers are vulnerable to pollution from various sources, including industrial discharge, agricultural runoff,
              and urban waste. Contaminants can degrade water quality, harming aquatic life and posing risks to
              human health through the consumption of polluted water.<br/><br/>
              4. Hydroelectric Power Generation:<br/>
              While hydroelectric power offers a renewable energy source, the construction of dams for power
              generation can have significant environmental consequences. Disrupting natural river flow can impact
              fish migration, alter sediment transport, and lead to changes in downstream ecosystems.<br/><br/>
              5. Climate Change and River Systems:<br/>
              The impacts of climate change, such as altered precipitation patterns and rising temperatures, directly
              affect river systems. Changes in flow patterns, increased frequency of extreme weather events, and shifts
              in ecosystems challenge the resilience of river environments.<br/><br/>
              In conclusion, rivers are intricate components of the Earth's ecological balance, influencing landscapes
              and supporting diverse ecosystems. However, the environmental impacts of human activities pose
              significant challenges to the health and sustainability of river systems. Recognizing these impacts is
              essential for implementing effective conservation measures that balance human needs with the
              preservation of these vital natural resources.<br/><br/>
              </p>
             </Blogging>
             <BackButtonWrapper>
              <BackButton to={ROUTES.BLOGS}>
                <BackButtonStyled>Back</BackButtonStyled>
              </BackButton>
            </BackButtonWrapper>
            </Main>
        </>
    );
};
 
export default BLOG_SIX;

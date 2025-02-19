import react from 'react';
import styled from "styled-components";
import React from 'react';
import HeroImg from "../Blogssample/heroimgblog/cartoll.jpg";
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

const BLOG_FIVE = () => {
    return (
        <>
        <HeroDiv
           style={{
           backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
          }}
         >
            <Header>The Environmental Toll of Car-Centric Infrastructure: A Call for Sustainable Urban Planning</Header>
          </HeroDiv>
            <Main>
            <Blogging>
              <p><br/>
              Introduction:<br/>
              In the relentless pursuit of modernization and convenience, many cities worldwide have fallen victim to the pitfalls of car-centric infrastructure. While automobiles undoubtedly supply mobility and accessibility, the environmental repercussions of prioritizing cars over sustainable alternatives are alarming. This blog explores the adverse effects of car-centric infrastructure on the environment and advocates for a shift toward greener, more sustainable urban planning.
              <br/><br/>
              Traffic Congestion and Air Pollution:<br/>
              One of the primary environmental issues associated with car-centric infrastructure is the perpetual problem of traffic congestion. As cities prioritize roadways for cars, the resulting gridlock not only wastes time and hinders productivity but also significantly contributes to air pollution. Tailpipe emissions from an overabundance of vehicles release pollutants such as nitrogen oxides and particulate matter, compromising air quality and public health.
              <br/><br/> 
              Greenhouse Gas Emissions:<br/>
              Car-centric urban planning perpetuates a cycle of dependence on fossil fuels, escalating the emission of greenhouse gases (GHGs) responsible for climate change. The combustion of gasoline and diesel fuels releases carbon dioxide (CO2) and other greenhouse gases, contributing to the warming of the planet. A transition to sustainable alternatives is imperative to mitigate the environmental impact of these emissions.
              <br/><br/>
              Loss of Green Spaces:<br/>
              Expansive road networks often lead to the encroachment upon green spaces and natural habitats. As cities prioritize roads and parking spaces, trees are felled, and ecosystems are disrupted, contributing to biodiversity loss. The absence of greenery diminishes the capacity of urban areas to absorb carbon dioxide and regulate local climates, worsening the urban heat island effect.
              <br/><br/>
              Inefficient Land Use:<br/>
              Car-centric infrastructure tends to promote urban sprawl, characterized by low-density development and extensive land use. This inefficiency results in longer commuting distances, increased energy consumption, and a higher overall environmental footprint. Compact, well-planned cities with mixed land use can reduce reliance on cars and foster more sustainable living arrangements.
              <br/><br/> 
              Negative Impact on Public Health:<br/>
              The environmental consequences of car-centric infrastructure also extend to public health. Air pollution, noise pollution, and sedentary lifestyles associated with reliance on cars contribute to various health issues, including respiratory problems, cardiovascular diseases, and obesity. Air pollution, noise pollution, and sedentary lifestyles associated with reliance on cars contribute to various health issues, including respiratory problems, cardiovascular diseases, and obesity.
              <br/><br/> 
              Promoting Sustainable Alternatives:<br/>
              To counteract the environmental toll of car-centric infrastructure, cities must prioritize sustainable alternatives. Investments in public transportation, cycling infrastructure, and pedestrian-friendly urban spaces can reduce traffic congestion, lower emissions, and enhance the overall quality of life. Encouraging electric vehicle adoption, implementing carpooling initiatives, and integrating smart traffic management systems are crucial steps toward a more sustainable urban future.
              <br/><br/> 
              Conclusion:<br/>
              Car-centric infrastructure has played a significant role in shaping our cities, but its environmental consequences cannot be ignored. To build a greener and more sustainable future, urban planners, policymakers, and communities must collaborate to prioritize public health, reduce emissions, and create cities that are not only efficient but also environmentally responsible. It's time to reimagine our urban spaces with a focus on sustainability and embrace alternatives that prioritize both the well-being of the planet and its inhabitants.
              <br/><br/>
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
 
export default BLOG_FIVE;

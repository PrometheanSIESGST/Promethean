import styled from "styled-components";
import React from 'react';
import HeroImg from "../Blogssample/heroimgblog/garden.jpeg";
const Main = styled.div`
  max-width: 320px;
  padding:10px;
  margin:auto;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 720px;
    margin: auto;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px;
    margin: auto;
  }
`;

const Header = styled.h1`
  font-family: ${(props) => props.theme.Fonts.Josefin};
  font-weight: 600;
  color: ${(props) => props.theme.Colors.Header};
  margin-bottom: 20px;
  font-size:24px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 50px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    font-size: 70px;
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

const BLOG_TEN = () => {
  return (
      <>
      <HeroDiv
          style={{
            backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
           }}
        >
          <Header>Reviving Urban Biodiversity: Cultivating Green Oases in Concrete Jungles</Header>
        </HeroDiv>
          <Main>
          <Blogging>
           <p><br/>
            Introduction:<br/>
            In the bustling heart of urban landscapes, amidst the towering structures and bustling streets, lies a silent casualty: the decline of urban biodiversity. As cities expand and concrete conquers once-thriving green spaces, the delicate balance of nature within our urban environments is under threat. This article delves into the critical importance of nurturing biodiversity within cities and proposes practical steps to revive green havens amidst the urban sprawl.<br/><br/>
            The Decline of Urban Biodiversity:<br/>
            Within the confines of urban development, the relentless expansion of infrastructure has led to the shrinkage of natural habitats. The result? Disruption of ecosystems, loss of flora and fauna, and a declining biodiversity that once thrived within city limits. The vanishing green spaces, parks, and natural corridors have adversely affected wildlife, pollinators, and even the mental well-being of urban dwellers.<br/><br/>
            Reimagining Urban Spaces:<br/>
            To mitigate this decline, cities must reimagine their spaces, shifting from mere concrete expanses to interconnected green oases. Introducing rooftop gardens, vertical green walls, and pocket parks within urban planning can serve as sanctuaries for biodiversity. These spaces not only provide habitats for plants and animals but also offer respite for city dwellers, fostering a harmonious coexistence with nature.<br/><br/>
            Community Engagement and Green Initiatives:<br/>
            Empowering communities to participate in nurturing urban biodiversity is pivotal. Community gardens, tree-planting drives, and initiatives promoting native flora can unite residents in a collective effort to revive greenery within their neighborhoods. Education programs on the significance of urban biodiversity can kindle a sense of stewardship towards local ecosystems.<br/><br/>
            Promoting Sustainable Infrastructure:<br/>
            Incorporating sustainable design practices in urban infrastructure is crucial. Implementing permeable pavements, green roofs on buildings, and preserving natural corridors during urban development can aid in wildlife movement and foster biodiversity hotspots within cities. These eco-friendly interventions not only support biodiversity but also mitigate urban heat islands and reduce carbon footprints.<br/><br/>
            The Human Connection to Nature:<br/>
            Reconnecting urban inhabitants with nature is vital for fostering appreciation and stewardship towards urban biodiversity. Creating accessible green spaces encourages outdoor activities, promoting physical and mental well-being. Nature-inspired art installations and interactive educational hubs within urban parks can further strengthen this bond between city dwellers and their local ecosystems.<br/><br/>
            Conclusion:<br/>
            The dwindling urban biodiversity is not just a loss of greenery; it's a loss of balance within our cities. To forge a sustainable future, it's imperative that urban planning prioritizes the revival and preservation of biodiversity. By cultivating green havens amidst concrete landscapes, fostering community engagement, and embracing sustainable design, cities can thrive as vibrant, biodiverse hubs where humans and nature coexist in harmony. Let's embark on this journey to reclaim the green heart of our cities, nurturing not just habitats but the very essence of life within our urban jungles.<br/><br/>
            </p>
           </Blogging>
          </Main>
      </>
  );
};

export default BLOG_TEN;

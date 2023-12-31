import react from 'react';
import styled from "styled-components";
import React from 'react';
import HeroImg from "../Blogssample/heroimgblog/greenhavens.jpg";

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

const BLOG_SEVEN = () => {
    return (
        <>
          <HeroDiv
            style={{
              backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
             }}
          >
            <Header> Embracing Green Havens: The Vital Role of Urban Green Spaces in City Life</Header>
          </HeroDiv>
            <Main>
            <Blogging>
              <p><br/>
              In the hustle and bustle of modern city life, amidst towering skyscrapers and bustling streets, there exists an often overlooked oasis that plays a crucial role in our well-being — urban green spaces. Parks, gardens, and green areas are not just aesthetic additions to a cityscape; they serve as vital lungs, offering respite for both the environment and its inhabitants.<br/><br/>
              Urbanization and the Need for Green Respite<br/>
              As cities expand and concrete sprawls, the importance of green spaces becomes increasingly apparent. Urban dwellers often find solace in these areas, seeking refuge from the concrete jungle. Beyond their aesthetic appeal, these green havens contribute significantly to the physical and mental well-being of city residents.<br/><br/>
              Promoting Mental Well-being<br/>
              Studies have shown that access to green spaces positively impacts mental health. A stroll through a park or a moment of quiet contemplation in a garden can alleviate stress and improve mood. Green spaces offer a retreat from the incessant demands of city life, providing a tranquil environment that fosters relaxation and rejuvenation.<br/><br/>
              Improving Air Quality<br/>
              Amidst the ever-present concern of urban air pollution, green spaces emerge as natural air purifiers. Trees and plants absorb pollutants, releasing oxygen and contributing to cleaner air. As cities grapple with air quality challenges, the strategic development and preservation of green spaces become essential in the pursuit of healthier urban environments.<br/><br/>
              Fostering Community Cohesion<br/>
              Beyond individual well-being, green spaces play a role in building stronger communities. Parks become meeting points, where diverse groups converge for recreational activities, events, or simple socializing. These spaces serve as a common ground, transcending social and cultural differences, thereby fostering a sense of unity among residents.<br/><br/>
              Challenges and Solutions<br/>
              While the importance of urban green spaces is evident, they face threats from rapid urbanization and competing land-use priorities. Addressing these challenges requires thoughtful urban planning and community involvement. Initiatives such as rooftop gardens, vertical green walls, and adaptive reuse of vacant lots can contribute to expanding green spaces even in densely populated areas.<br/><br/>
              Conclusion: A Greener Tomorrow<br/>
              In conclusion, the incorporation and preservation of urban green spaces are not mere luxuries but necessities for sustainable city living. Cities that prioritize these green havens are investing in the well-being of their residents, the health of the environment, and the social fabric of their communities. As we navigate the complexities of urbanization, let us not forget the importance of these verdant sanctuaries—embracing them is not just an option but a pathway to a healthier, happier, and more harmonious urban future.<br/><br/>
              </p>
             </Blogging>
            </Main>
        </>
    );
};
 
export default BLOG_SEVEN;

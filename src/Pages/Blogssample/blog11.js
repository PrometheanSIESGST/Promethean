import react from 'react';
import styled from "styled-components";
import React from 'react';
import HeroImg from "../Blogssample/heroimgblog/Greenfuture.jpeg";
import * as ROUTES from "../../Constants/routes";
import { Link } from 'react-router-dom';

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
const BLOG_ELEVEN = () => {
  return (
    <>
      <HeroDiv
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
        }}
      >
        <Header>Powering a Green Future: Innovations in Battery Technology and Pollution Reduction</Header>
      </HeroDiv>
        <Main>
        <Blogging>
          <p><br/>
        In our quest for a sustainable future, one of the most pressing challenges is addressing the environmental impact of battery production. As the demand for electric vehicles (EVs) and renewable energy storage solutions continues to rise, so does the need for efficient and eco-friendly battery technologies. In this blog, we'll explore how innovations in battery design and materials can play a crucial role in reducing pollution associated with the extraction of raw materials.<br/><br/>
        1. The Toll of Traditional Battery Production:<br/>
        Traditional battery manufacturing processes, particularly those involving lithium-ion batteries, have long been associated with environmental degradation. The extraction of metals such as lithium, cobalt, and nickel often involves destructive mining practices, leading to deforestation, habitat destruction, and water pollution. This section will delve into the ecological footprint of conventional battery production, setting the stage for the urgent need for change.<br/><br/>
        2. Sustainable Materials: The Key to Cleaner Batteries:<br/>
        Enter the era of sustainable materials. With a focus on ethical sourcing and recycling, the battery industry is witnessing a shift towards more environmentally friendly alternatives. From recycled metals to innovative materials like graphene, this section will highlight how choosing the right components can significantly reduce the ecological impact of battery production.<br/><br/>
        3. Breakthroughs in Recycling Technologies:<br/><br/>
        The disposal of used batteries has long been an environmental concern. However, recent advancements in recycling technologies are changing the game. This section will explore breakthroughs in battery recycling, emphasizing how efficient processes can not only minimize waste but also recover valuable materials, reducing the need for continuous extraction.<br/><br/>
        4. Beyond Lithium-ion: Exploring Next-Generation Battery Technologies:<br/><br/>
        Lithium-ion batteries have dominated the market, but researchers are actively exploring alternatives that are not only more efficient but also less harmful to the environment. From solid-state batteries to sodium-ion technology, this section will delve into the promising landscape of next-generation batteries and their potential to revolutionize the industry.<br/><br/>
        5. The Role of Energy Storage in Pollution Prevention:<br/><br/>
        Beyond transportation, batteries play a vital role in energy storage, facilitating the integration of renewable sources into the grid. This section will discuss how advancements in battery technology contribute to the overall reduction of pollution by enabling a more sustainable and resilient energy infrastructure.<br/><br/>
        6. Collaborative Initiatives for a Greener Battery Industry:<br/><br/>
        Realizing the magnitude of the challenge, industry leaders, governments, and environmental organizations are coming together to drive change. This section will highlight collaborative initiatives aimed at promoting responsible sourcing, fostering innovation, and establishing standards for environmentally conscious battery production.<br/><br/>
        Conclusion: Charging Towards a Sustainable Tomorrow<br/>
        In conclusion, the path to a greener future involves not only transitioning to electric vehicles and renewable energy but also revolutionizing the way we produce and dispose of batteries. Through sustainable materials, recycling innovations, and the exploration of new technologies, the battery industry can significantly mitigate the pollution associated with raw material extraction. By supporting these advancements, we not only embrace a cleaner today but also pave the way for a more sustainable and eco-conscious tomorrow.<br/><br/>
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

export default BLOG_ELEVEN;

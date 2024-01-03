import styled from "styled-components";
import React from 'react';
import HeroImg from "../Blogssample/heroimgblog/renew.jpg";
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

const BLOG_THREE = () => {
    return (
        <>
        <HeroDiv
          style={{
            backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
          }}
         >
            <Header>Exploring the Impact of Renewable Energy Technologies</Header>
          </HeroDiv>
            <Main>
            <Blogging>
              <p><br/>
              Introduction<br/>
              The world is facing a significant challenge in combating climate change and reducing reliance on fossil fuels. Renewable energy technologies offer a promising solution to these issues, providing clean and sustainable energy sources that have minimal environmental impact. In this blog, we will explore the impact of renewable energy technologies on the environment and their potential to shape a more sustainable future.
              <br/><br/>
              The Growth of Renewable Energy Technologies<br/>
              Over the past few decades, there has been a substantial increase in the use of renewable energy technologies, such as solar, wind, and hydro power. This growth can be attributed to advancements in technology, which have significantly improved the efficiency and cost-effectiveness of these energy sources. According to the International Renewable Energy Agency (IRENA), renewable energy sources accounted for 23% of global electricity generation in 2022, up from 19% in 2017.
              <br/><br/>
              Benefits of Renewable Energy Technologies<br/>
              1.Reduced greenhouse gas emissions: Renewable energy technologies produce little to no greenhouse gas emissions, helping to mitigate climate change and reduce air pollution.<br/>
              2.Decreased reliance on fossil fuels: The increasing use of renewable energy sources reduces dependence on fossil fuels, which contribute to climate change and air pollution.<br/>
              3.Environmental sustainability: Renewable energy sources are derived from natural, replenishable resources, ensuring a more sustainable future for our planet.<br/>
              4.Energy security: The reliance on renewable energy sources can reduce energy imports and increase energy security, particularly in regions with abundant renewable resources.
              <br/><br/>
              Solar Power<br/>
              Solar power is a leading renewable energy technology, with significant growth in recent years. The cost of solar electricity has fallen by more than 70% since 2010, making solar energy more accessible and competitive with traditional fossil fuels.
              The increasing use of solar power can help reduce greenhouse gas emissions, contribute to energy security, and promote environmental sustainability.
              <br/>
              Wind Power<br/>
              Wind power is another significant renewable energy source, providing clean and sustainable energy without emitting greenhouse gases. Advancements in wind turbine technology and the development of smart grids have enabled the harnessing of wind energy on a larger scale, providing a viable alternative to traditional power sources.
              <br/>
              Hydro Power<br/> 
              Hydro power is a long-established renewable energy source, providing one-quarter of global electricity generation in 2022. This technology involves the use of turbines and generators to convert the kinetic energy of fast-moving water into electrical energy. The environmental benefits of hydro power include reduced greenhouse gas emissions and minimal waste, making it a valuable component of the renewable energy mix.
              <br/><br/>
              Challenges and Opportunities<br/>
              Despite the growing importance of renewable energy technologies, there are still challenges to overcome, such as intermittency, energy storage, and grid stability. However, ongoing research and development aim to address these issues and further improve the efficiency and scalability of renewable energy technologies.
              <br/><br/>
              Conclusion<br/>
              Renewable energy technologies play a crucial role in combating climate change and reducing reliance on fossil fuels. As the cost of these technologies continues to fall, it is essential to invest in and promote their adoption worldwide. By embracing renewable energy sources, we can create a more sustainable future for our planet and ensure a cleaner, healthier environment for generations to come.
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
 
export default BLOG_THREE;

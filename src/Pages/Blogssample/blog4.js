import react from 'react';
import styled from "styled-components";
import React from 'react';
import HeroImg from "../Blogssample/heroimgblog/plastic.jpg";

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

const BLOG_FOUR = () => {
    return (
        <>
         <HeroDiv
           style={{
            backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
           }}
          >
            <Header>Revolutionizing Plastics: Harnessing the Power of Starch for Sustainable Bags</Header>
          </HeroDiv>
            <Main>
            <Blogging>
              <p><br/>
              Introduction<br/>
              In a world where the environmental impact of plastic waste is a growing concern, the search for eco-friendly alternatives has become more imperative than ever. One promising solution is the use of starch in the production of plastic bags. This innovative approach offers a sustainable alternative to traditional plastic bags, potentially reducing the environmental footprint associated with their disposal. Let's delve into the fascinating realm of starch-based plastics and how they are shaping a greener future.
              <br/><br/>
              The Rise of Starch-Based Plastics: A Sustainable Shift<br/>
              The first glimmer of hope in the battle against plastic pollution comes in the form of starch-based plastics. Unlike conventional plastic bags derived from fossil fuels, these bags are crafted from renewable resources, primarily starch obtained from crops like corn, potatoes, or cassava. The process involves extracting starch and transforming it into a biodegradable polymer, offering a much-needed solution to the persistent plastic waste crisis.
              <br/><br/>
              Breaking Down the Benefits: Why Starch-Based Plastic Bags Matter<br/>
              Starch-based plastic bags boast a multitude of advantages that extend beyond their renewable origins. These bags are fully biodegradable, meaning they break down naturally over time, leaving behind no toxic residue. In contrast to traditional plastic bags that can take centuries to decompose, starch-based alternatives represent a leap forward in mitigating the environmental impact of single-use plastics.
              <br/><br/>
              From Production to Disposal: A Lifecycle Analysis<br/>
              Understanding the environmental impact of any product requires a comprehensive lifecycle analysis. Starch-based plastic bags not only shine in terms of raw material sustainability but also in their end-of-life scenario. When disposed of, these bags undergo a natural degradation process, returning to the earth without leaving a lasting ecological footprint. This closed-loop lifecycle stands in stark contrast to the challenges posed by conventional plastics.
              <br/><br/>
              Challenges and Innovations: Navigating the Path to Widespread Adoption<br/>
              While starch-based plastics offer a promising avenue for a sustainable future, challenges remain. The cost of production and scalability are key considerations that researchers and manufacturers are actively addressing. Innovations in processing technologies and a greater emphasis on research and development hold the potential to overcome these hurdles, paving the way for widespread adoption of starch-based plastic bags.
              <br/><br/>
              Consumer Choices: Empowering Change, One Bag at a Time<br/>
              As consumers, our choices play a pivotal role in steering industries toward more sustainable practices. Opting for starch-based plastic bags presents an opportunity for individuals to contribute to the reduction of plastic pollution. Increased awareness and informed consumer choices can drive demand, encouraging businesses to prioritize eco-friendly alternatives and participate in the global effort to create a more sustainable future.
              <br/><br/>
              Conclusion: Starching the Path to a Greener Tomorrow<br/>
              In the quest for alternatives to traditional plastics, starch-based plastic bags emerge as a beacon of hope. As we navigate the complexities of environmental sustainability, this innovative solution stands as a testament to human ingenuity. By embracing the potential of starch, we have the power to reshape the future of plastics and contribute to a planet where even our everyday choices leave a positive impact on the world we share. Starching the path to a greener tomorrow starts with each conscious decision we make today.
              <br/><br/>
              </p>
             </Blogging>
            </Main>
        </>
    );
};

export default BLOG_FOUR;

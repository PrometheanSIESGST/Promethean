import styled from "styled-components";
import React from 'react';
import HeroImg from "../Blogssample//heroimgblog/techandenviro.jpg";
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

const BLOG_TWO = () => {
    return (
        <>
          <HeroDiv
           style={{
            backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
            }}
            >
            <Header>Tech Innovations Powering Environmental Sustainability: A Closer Look</Header>
          </HeroDiv>
            <Main>
            <Blogging>
              <p><br/>
              Introduction:<br/>
              In an era marked by rapid technological advancements, the intersection of technology and environmental conservation has become increasingly crucial. Innovations in the field of environmental technology are playing a pivotal role in addressing pressing issues such as climate change, pollution, and resource depletion. This blog explores some of the groundbreaking technologies that are shaping a more sustainable future.
              <br/><br/>
              1. Renewable Energy Technologies:<br/>
              - Solar Power: Advances in solar panel technology have significantly increased efficiency and reduced costs, making solar energy more accessible.<br/>
              - Wind Power: Smart grids and improved turbine designs enhance the harnessing of wind energy, providing cleaner alternatives to traditional power sources.
              <br/><br/>
              2. Internet of Things (IoT) for Environmental Monitoring:<br/>
              - IoT devices are revolutionizing environmental monitoring by providing real-time data on air and water quality, helping identify pollution sources and mitigate environmental risks.<br/>
              - Smart sensors enable precision agriculture, optimizing resource use and reducing environmental impact.
              <br/><br/>
              3. Artificial Intelligence in Conservation:<br/>
              - AI algorithms are aiding in wildlife conservation efforts by analyzing large datasets to track and protect endangered species.<br/>
              - Machine learning models contribute to more accurate climate predictions, helping communities prepare for and adapt to changing environmental conditions.
              <br/><br/>
              4. Waste Management Solutions:<br/>
              - Technology is transforming waste management with innovations like smart bins, waste-to-energy conversion, and recycling robots that streamline the process and reduce the environmental impact of waste.
              <br/><br/>
              5. Blockchain for Sustainable Supply Chains:<br/>
              - Blockchain technology enhances transparency in supply chains, ensuring that products labeled as environmentally friendly truly adhere to sustainable practices.<br/>
              - Smart contracts can automate and enforce environmentally friendly agreements between stakeholders.
             <br/><br/>
              6. Green Transportation Technologies:<br/>
              - Electric Vehicles (EVs): The rise of electric cars, coupled with advancements in battery technology, is reducing reliance on fossil fuels and lowering emissions in the transportation sector.<br/>
              - Autonomous Vehicles: AI-driven autonomous vehicles have the potential to optimize traffic flow, reduce congestion, and enhance fuel efficiency.
              <br/><br/>
              7. Water Conservation Technologies:<br/>
              - Smart irrigation systems use data analytics and sensors to optimize water usage in agriculture, reducing waste and promoting sustainable farming practices.<br/>
              - Advanced water purification technologies, such as desalination and water recycling, contribute to addressing water scarcity issues.
              <br/><br/>
              Conclusion:<br/>
              As we navigate the challenges posed by climate change and environmental degradation, technology emerges as a powerful ally in the quest for sustainability. From renewable energy sources to smart environmental monitoring, each innovation plays a crucial role in preserving our planet for future generations. Embracing and furthering these technologies is key to creating a harmonious balance between technological progress and environmental stewardship.
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
 
export default BLOG_TWO;

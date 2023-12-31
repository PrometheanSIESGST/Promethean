import styled from "styled-components";
import React from 'react';
import HeroImg from "../Blogssample/heroimgblog/marine.webp";

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

const BLOG_TWELVE = () => {
    return (
        <>
          <HeroDiv
            style={{
              backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${HeroImg})`,
             }}
           >
            <Header>Safeguarding Our Seas: <br />A Dive into Marine Life Conservation</Header>
          </HeroDiv>
            <Main>
            <Blogging>
              <p>

                  Introduction:<br/>
                  Welcome, ocean enthusiasts! Today, we're delving into the depths of marine life conservation, exploring why it's crucial and how we can contribute to preserving our oceans. Join me on this journey as we uncover the wonders beneath the waves and learn how we can make a positive impact.<br/>

                  <br/>Section 1: The Importance of Marine Life<br/>
                  Our oceans are teeming with life, from colorful coral reefs to majestic marine creatures. They play a vital role in maintaining the balance of our planet's ecosystems. Marine life provides food, supports biodiversity, and contributes to the regulation of climate. By protecting marine ecosystems, we ensure the well-being of both aquatic and terrestrial life.<br/>

                  <br/>Section 2: Threats to Marine Life<br/>
                  Unfortunately, our oceans face numerous threats, including overfishing, habitat destruction, and pollution. Human activities like plastic waste and oil spills harm marine ecosystems, endangering the very creatures that call the ocean home. Understanding these threats is the first step towards effective conservation.<br/>

                  <br/>Section 3: How We Can Help<br/><br/>
                  Now, let's shift our focus to actionable steps we can take to contribute to marine life conservation:<br/>

                  <br/> 1. Reduce Single-Use Plastics: Opt for reusable items and say no to single-use plastics to prevent them from ending up in the ocean.<br/>

                  <br/>2. Responsible Seafood Choices: Choose sustainably sourced seafood to support fisheries that prioritize environmental conservation.<br/>

                  <br/>3. Beach Cleanup Initiatives: Participate in or organize beach cleanups to remove debris and protect coastal ecosystems.<br/>

                  <br/>4. Educate Others: Spread awareness about marine conservation and its importance to inspire others to join the cause.<br/>

                  <br/>5. Support Conservation Organizations: Contribute to or volunteer with organizations dedicated to preserving marine life, such as marine sanctuaries and wildlife protection groups.<br/>

                  <br/>Conclusion:<br/>
                  In conclusion, our oceans are in need of our protection. By making simple, everyday choices and supporting conservation efforts, we can collectively make a significant impact on marine life preservation. Let's work together to ensure that the beauty and diversity of our oceans continue to thrive for generations to come. Dive in, take action, and be a champion for our seas!<br/>
              </p>
             </Blogging>
            </Main>
        </>
    );
};
 
export default BLOG_TWELVE;

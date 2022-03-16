import React, { useState } from "react";
import styled from "styled-components";
import TeamImage from "../Images/team.jpg";
import TeamIntro from "../Components/Meet_the_Leaders/TeamIntro";
import TeamCard from "../Components/Meet_the_Leaders/TeamCard";
import { TeamInfo } from "../Constants/Team";

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

const Tab = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  bottom: 10px;
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
  border-radius: 25px;
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

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Team = () => {
  const [team, setTeam] = useState(0);

  return (
    <>
      <HeroDiv
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url(${TeamImage})`,
        }}
      >
        <Tab>
          <Tabs
            className={team === 0 ? "active" : "null"}
            onClick={() => setTeam(0)}
          >
            Core
          </Tabs>
          <Tabs
            className={team === 1 ? "active" : "null"}
            onClick={() => setTeam(1)}
          >
            Advisor
          </Tabs>
          <Tabs
            className={team === 2 ? "active" : "null"}
            onClick={() => setTeam(2)}
          >
            Technical
          </Tabs>
          <Tabs
            className={team === 3 ? "active" : "null"}
            onClick={() => setTeam(3)}
          >
            Design
          </Tabs>
          <Tabs
            className={team === 4 ? "active" : "null"}
            onClick={() => setTeam(4)}
          >
            Marketing
          </Tabs>
          <Tabs
            className={team === 5 ? "active" : "null"}
            onClick={() => setTeam(5)}
          >
            Public Relation
          </Tabs>
          <Tabs
            className={team === 6 ? "active" : "null"}
            onClick={() => setTeam(6)}
          >
            Publicity
          </Tabs>

          <Tabs
            className={team === 7 ? "active" : "null"}
            onClick={() => setTeam(7)}
          >
            Creative
          </Tabs>
          <Tabs
            className={team === 8 ? "active" : "null"}
            onClick={() => setTeam(8)}
          >
            Social Media
          </Tabs>
        </Tab>
      </HeroDiv>
      <Main>
        <TeamIntro designation={TeamInfo[team].designation} about={TeamInfo[team].about}/>;
        <FlexDiv>
          {TeamInfo[team].member.map((data) => {
            if (data.head.length !== 0)
              return data.head.map((result) => {
                return <TeamCard name={result.name} post={result.post} photo={result.photo}/>;
              });
          })}
        </FlexDiv>
        <FlexDiv>
          {TeamInfo[team].member.map((data) => {
            if (data.coord.length !== 0)
              return data.coord.map((result) => {
                return <TeamCard name={result.name} post={result.post} photo={result.photo}/>;
              });
          })}
        </FlexDiv>
      </Main>
    </>
  );
};

export default Team;
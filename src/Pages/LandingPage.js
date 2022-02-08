import React from 'react';
import styled from "styled-components";

const Header = styled.h1`
  max-width: 1200px;
  margin: 0 auto;
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Arial};
`;

const LandingPage = () => {
    return (
        <>
          <Header>Landing Page</Header>
        </>
      );
};

export default LandingPage;

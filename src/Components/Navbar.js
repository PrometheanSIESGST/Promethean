import React , { useState } from "react";
import styled from "styled-components";
import logo from "../Images/logo.png";
import Filter from "../Images/Filter.png";
import * as ROUTES from "../Constants/routes";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width:90%;
  margin: 0 auto;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px
  }
`;

const Logo = styled.img`
  margin-left: 10px;
  height: 60px;
  width: auto;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    height: 80px;
  }
`;
 
const SideNavList = styled.ul`
  position: fixed;
  top: 0;
  left: 100%;
  padding: 30px 0;
  width: 100%;
  background: ${(props) => props.theme.Colors.SubHeading};
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.toggleNav {
    transition: 0.5s ease;
    left: 0;
  }

  &.close {
    transition: 0.5s ease;
    left: 100%;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    display: none;
  }
`;

const NavList = styled.ul`
  display: none;
  @media ${(props) => props.theme.MediaQueries.l.query} {
    display: flex;
  }
`

const SideNavContent = styled.a`
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Poppins};
  opacity: 60%;
  font-weight: 600;
  margin: 20px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const NavContent = styled.a`
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 600;
  margin: 20px;
  cursor: pointer;
  &:hover {
    transition: 0.5s ease;
    color: ${(props) => props.theme.Colors.SubHeading};
  }
`;

const FilterImg = styled.img`
  height: 15px;
  width: auto;
  margin-right: 10px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    height: 20px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    display: none;
  }
`;

const Cross = styled.li`
  color: ${(props) => props.theme.Colors.Header};
  font-family: ${(props) => props.theme.Fonts.Poppins};
  position: absolute;
  right: 30px;
  top: 30px;
`;

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <Nav>
        <Logo src={logo} />
        <SideNavList className={navOpen ? "toggleNav" : "close"}>
          <Cross onClick={() => setNavOpen(false)}>X</Cross>
          <SideNavContent href={ROUTES.HOME}>HOME</SideNavContent>
          <SideNavContent href={ROUTES.PROMETHEAN}>PROMETHEAN</SideNavContent>
          <SideNavContent href={ROUTES.TEAM}>TEAM</SideNavContent>
          <SideNavContent href={ROUTES.GALLERY}>GALLERY</SideNavContent>
        </SideNavList>
        <NavList>
          <NavContent href={ROUTES.HOME}>HOME</NavContent>
          <NavContent href={ROUTES.PROMETHEAN}>PROMETHEAN</NavContent>
          <NavContent href={ROUTES.TEAM}>TEAM</NavContent>
          <NavContent href={ROUTES.GALLERY}>GALLERY</NavContent>
        </NavList>
        <FilterImg src={Filter} onClick={() => setNavOpen(true)}/>
      </Nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Images/logo.png";
import Filter from "../Images/Filter.png";
import * as ROUTES from "../Constants/routes";

const Nav = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto !important;
  z-index: 10;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 700px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 1200px;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
  margin-left: 10px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    height: 80px;
  }
`;

const SideNavList = styled.ul`
  position: absolute;
  top: 0;
  left: 100%;
  padding: 30px 0;
  width: 100%;
  background: ${(props) => props.theme.Colors.SubHeading};
  z-index: 100;
  display: none;
  flex-direction: column;
  align-items: center;

  &.toggleNav {
    transition: 2s ease;
    display: flex;
    left: 0;
  }

  &.close {
    transition: 0.5s ease;
    left: 100%;
  }

  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: none;
  }
`;

const NavList = styled.ul`
  display: none;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: flex;
  }
`;

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
          <Link to={ROUTES.HOME}>
            <SideNavContent>HOME</SideNavContent>
          </Link>
          <Link to={ROUTES.TEAM}>
            <SideNavContent href={ROUTES.TEAM}>TEAM</SideNavContent>
          </Link>
          {/* <SideNavContent href={ROUTES.PROMETHEAN}>PROMETHEAN</SideNavContent> */}
          {/* <SideNavContent href={ROUTES.GALLERY}>GALLERY</SideNavContent> */}
        </SideNavList>
        <NavList>
          <Link to={ROUTES.HOME}>
            <NavContent href={ROUTES.HOME}>HOME</NavContent>
          </Link>
          <Link to={ROUTES.TEAM}>
            <NavContent href={ROUTES.TEAM}>TEAM</NavContent>
          </Link>
          {/* <NavContent href={ROUTES.GALLERY}>GALLERY</NavContent> */}
          <Link to={ROUTES.PROMETHEAN}>
          <NavContent href={ROUTES.PROMETHEAN}>PROMETHEAN</NavContent>
          </Link>
        </NavList>
        <FilterImg src={Filter} onClick={() => setNavOpen(true)} />
      </Nav>
    </>
  );
};

export default Navbar;

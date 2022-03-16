import React from "react";
import Insta from "../Images/Instagram.svg";
import Facebook from "../Images/Facebook.svg";
import Linkedin from "../Images/Linkedin.svg";
import Call from "../Images/Call.svg";
import Mail from "../Images/Mail.svg";
import Map from "../Images/Map.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./logo1.png";

export const FooterLinksContainer = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    #cee002;
  padding: 2rem 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding: 3rem 20px;
    margin-top: 80px;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    padding: 4rem 20px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  max-width: 320px;
  margin: 0 auto;
  flex-direction: column-reverse;
  @media ${(props) => props.theme.MediaQueries.s.query} {
    max-width: 570px;
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 760px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media ${(props) => props.theme.MediaQueries.l.query} {
    max-width: 990px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
  @media ${(props) => props.theme.MediaQueries.s.query} {
    width: ${(props) => (props.large ? "70%" : "30%")};
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-bottom: 0px;
    width: 100%;
  }
`;

const FooterGroup = styled.div`
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 30%;
    margin-top: -30px;
  }
`;

export const FooterLinkTitle = styled.h2`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  font-family: ${(props) => props.theme.Fonts.Poppins};
  margin-bottom: ${(props) => (props.bottom ? "10px" : "0")};
  font-size: 14px;
  text-align: left;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.Colors.Header};
    transition: 0.3s ease-out;
  }
`;

const FooterContact = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-family: ${(props) => props.theme.Fonts.Poppins};
  margin-bottom: ${(props) => (props.bottom ? "10px" : "0")};
  font-size: 14px;
  text-align: left;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.Colors.Header};
    transition: 0.3s ease-out;
  }
`;

export const Para = styled.h5`
  color: rgba(255, 255, 255, 0.7);
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-weight: 300;
  font-size: 14px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  display: flex;
  justify-content: left;
  margin-top: 15px;
  cursor: pointer;
`;

export const SideIcons = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const SideiconImg = styled.img`
  margin-right: 10px;
`;

const SocialIconImage = styled.img`
  margin-right: 10px;
`;

const Line = styled.hr`
  height: 0.3px;
  background: #ffffff;
  width: 100%;
  margin: 10px 0;
`;

const SubFlex = styled.div`
  @media ${(props) => props.theme.MediaQueries.s.query} {
    display: flex;
  }
  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 60%;
  }
`;

const PromLogo = styled.img`
  width: 250px;
  height: auto;
`;

function Footer() {
  return (
    <FooterLinksContainer>
      <FooterLinksWrapper>
        <FooterGroup>
          <PromLogo src={Logo} alt="Logo" />
          <Para>
            You can always follow us and contact us on our social media
            platforms! Feel free to check out:
          </Para>

          <SocialIconLink>
            <a
              href="https://www.instagram.com/promethean_siesgst/"
              target="_blank"
            >
              <SocialIconImage src={Insta} alt="Insta" />
            </a>
            <a
              href="https://www.linkedin.com/company/team-promethean-sies-gst/mycompany/"
              target="_blank"
            >
              <SocialIconImage src={Linkedin} alt="Linkedin" />
            </a>
          </SocialIconLink>
        </FooterGroup>

        <SubFlex>
          <FooterLinkItems>
            <FooterLinkTitle>Useful Links </FooterLinkTitle>
            <FooterLink to="/" bottom>
              About
            </FooterLink>
            <FooterLink to="/Team" bottom>
              Team
            </FooterLink>
            <FooterLink to="/event" bottom>
              Promethean
            </FooterLink>
            {/* <FooterLink to="/Gallery" bottom>
              Gallery
            </FooterLink> */}
          </FooterLinkItems>

          <FooterLinkItems large>
            <FooterLinkTitle>Reach Us</FooterLinkTitle>
            <SideIcons>
              <SideiconImg src={Call} alt="Call" />
              <FooterContact href="tel:+91 7208877440">
                {" "}
                +91 7208877440
              </FooterContact>
            </SideIcons>

            <SideIcons>
              <SideiconImg src={Mail} alt="Mail" />
              <FooterContact href="mailto:promethean@siesgst.ac.in">
                promethean@siesgst.ac.in
              </FooterContact>
            </SideIcons>

            <SideIcons>
              <SideiconImg src={Map} alt="Map" />
              <FooterLink to="/">
                SIES Graduate School of Technology, Plot 1-C D&E, Sector-V, Navi
                Mumbai, Maharashtra.
              </FooterLink>
            </SideIcons>
          </FooterLinkItems>
        </SubFlex>
      </FooterLinksWrapper>
    </FooterLinksContainer>
  );
}

export default Footer;

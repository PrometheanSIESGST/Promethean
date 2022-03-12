import React from 'react';
import Insta from '../Images/Instagram.svg';
import Facebook from '../Images/Facebook.svg';
import Linkedin from '../Images/Linkedin.svg';
import Call from '../Images/Call.svg';
import Mail from '../Images/Mail.svg';
import Map from '../Images/Map.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './logo1.png';

export const FooterContainer = styled.div`
background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #CEE002;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 400px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 20px;
  margin-top: 10px;
 
`;

export const FooterLink = styled(Link)`
  color:  rgba(255, 255, 255, 0.7);
  text-align: left;
  text-decoration: none;
  margin-bottom: 1rem;
  &:hover {
    color: #000000;
    transition: 0.3s ease-out;
  }
`;

export const Para = styled.h5`
color:rgba(255, 255, 255, 0.7);
`;

export const SocialIconLink = styled.a`
  
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 35px;
  width: 200px;
  cursor: pointer;
  border-radius: 2rem;
  
  
`;


export const SideIcons = styled.div`
display:flex;
flex-direction: row;
height: 15px;
margin-bottom: 15px;
`;

const SideiconImg = styled.img`
margin-right: 10px;
`;

const SocialIconImage = styled.img`
margin-right: 10px;
`;




function Footer() {
  return (
    <FooterContainer>
      
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkTitle>
          <img src={Logo} alt="Logo" />
         <Para>
          You can always follow us and contact us on our social media platforms! Feel free to check out:         
          </Para>
          
          
          
          
            <SocialIconLink>
           
            <SocialIconImage src={Insta} alt='Insta'/>
            
            <SocialIconImage src={Facebook} alt='Facebook'/>
            
            <SocialIconImage src={Linkedin} alt='Linkedin'/>
            
            </SocialIconLink>
            </FooterLinkTitle>   
         
          <FooterLinkItems>
            <FooterLinkTitle>Useful Links </FooterLinkTitle>
            <FooterLink to='/About'>About</FooterLink>
            <FooterLink to='/Team'>Team</FooterLink>
            <FooterLink to='/Promethean'>Promethean</FooterLink>
            <FooterLink to='/Gallery'>Gallery</FooterLink>

            </FooterLinkItems>

            <FooterLinkItems>
             <FooterLinkTitle>Reach Us</FooterLinkTitle>

           <SideIcons> 
             <SideiconImg src={Call} alt='Call'/>
             <FooterLink to='/'> +91 123456789</FooterLink>
           </SideIcons> 
            
           <SideIcons> 
             <SideiconImg src={Mail} alt='Mail'/>
             <FooterLink to='/'>promethean@siesgst.ac.in</FooterLink>
            </SideIcons> 
            
           <SideIcons>
              <SideiconImg src={Map} alt='Map'/>
              <FooterLink to='/'>SIES Graduate School of Technology, Plot 1-C D&E, Sector-V, Navi Mumbai, Maharashtra.</FooterLink>
            </SideIcons> 
            
        </FooterLinkItems>

          
          
        </FooterLinksWrapper>                           
        
      </FooterLinksContainer>
      
    </FooterContainer>
  );
}

export default Footer;






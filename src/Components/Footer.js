import React from "react";
import styled from "styled-components";
import logo from "./logo1.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { MailOutline,Phone,Room, } from "@material-ui/icons";

export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="" />
          <p>
          You can always follow us and contact us on our social media platforms! Feel free to check out:
          </p>
          <ul>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>Useful Links</h3>
          </div>
          <Link href="#">
          <p>About</p>
          <p>Team</p>
          <p>Promethean</p>
          <p>Gallery</p>
          </Link>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
           <p>
               <i>  <Phone  />+91 1234567890 </i>
           </p>
           <p>
               <i> <MailOutline /> promethean@siesgst.ac.in</i>
           </p>
             <p>
                 <i> <Room />   SIES Graduate School of Technology, Plot 1-C D&E, Sector-V, Navi Mumbai, Maharashtra.</i>
             </p>
        </div>
      </Section>
      
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #CEE002;
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
 
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(2) invert(1);
    width: 15vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h3 {
      font-size: 2rem;
      color:white;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const Link = styled.a`

    font-size: 1.5rem;
    color:rgba(255, 255, 255, 0.7);

    line-height: 2rem;
    letter-spacing: 0.1rem;
    cursor:pointer;
    &:hover {
        opacity: 1;
        transition: 0.5s ease;
      }
`

import React, { useState } from "react";
import "./Hero.css";
import BtnSlider from "./BtnSlider";
import ImageList from "../../Constants/ImageList";
import styled from "styled-components";


const Slider_container = styled.div`
  max-width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 100%;
    height: 100vh;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
`;

const HeroImage = styled.img`
  opacity: 0.6;
`;


export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== ImageList.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === ImageList.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(ImageList.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  
  return (
    <Slider_container>
      {ImageList.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.Image} className="image" />
          </div>
        );
      })}
     <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      {/* <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div> */}

    </Slider_container>
  );
}

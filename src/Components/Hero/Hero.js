import React, { useState } from "react";
import "./Hero.css";
import BtnSlider from "./BtnSlider";
import ImageList from "./ImageList";
import styled from "styled-components";

const Slider_container = styled.div`
max-width: 100%;
height: 300px;
margin: 10px auto 0;
position: relative;
overflow: hidden;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
@media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 100%;
    height: 500px;
    margin: 10px 10px 0;
  }
`

const Slide = styled.div`
width: 100%;
height: 100%;
position: absolute;
opacity: 0;
transition: opacity ease-in-out 0.4s;

`


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
  return (
    <Slider_container>
      {ImageList.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.image}className="image" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </Slider_container>
  );
}

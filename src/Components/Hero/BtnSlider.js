import React from "react";
import styled from "styled-components";
import "./Hero.css";
import leftArrow from "../../Images/left-arrow.svg";
import rightArrow from "../../Images/right-arrow.svg";

const ArrowButton = styled.button`
  background:none ;
  background-color: ${(props) => props.theme.Colors.SubHeading};
  z-index: 1;
`

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <ArrowButton
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </ArrowButton>
  );
}

import React from "react";
import "./Hero.css";
import leftArrow from "D:/reactprac/promethean/Promethean/src/Images/left-arrow.svg";
import rightArrow from "D:/reactprac/promethean/Promethean/src/Images/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}

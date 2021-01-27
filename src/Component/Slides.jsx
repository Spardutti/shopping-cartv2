import React, { useState, useEffect } from "react";
import "./slide.css";
import imageData from "./imgData";

const Slide = (props) => {
  const [img, setImg] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const nextImg = () => {
    if (img + 1 >= imageData.length) {
      setImg(0);
    } else {
      setImg(img + 1);
    }
  };

  const prevImg = () => {
    if (img - 1 >= 0) {
      setImg(0);
    } else {
      setImg(img - 1);
    }
  };

  const stopAutoPlay = () => {
    setAutoSlide(false);
    nextImg();
  };

  const autoplay = () => {
    setTimeout(() => {
      nextImg();
    }, 2000);
  };

  useEffect(() => {
    if (autoSlide) {
      autoplay();
    }
    if (!autoSlide) {
      setTimeout(() => {
        setAutoSlide(true);
      }, 5000);
    }
  });

  const onChange = () => {};

  return (
    <div className="slideContainer">
      <img
        className="slide-img"
        onChange={onChange}
        src={imageData[img].name}
        alt=""
      />
      <p onClick={(prevImg, stopAutoPlay)} className="leftBtn">
        <i class="fas fa-arrow-left"></i>
      </p>
      <p onClick={(nextImg, stopAutoPlay)} className="rightBtn">
        <i class="fas fa-arrow-right"></i>
      </p>
      <p className="price">Price: {imageData[img].price}$</p>
    </div>
  );
};

export default Slide;

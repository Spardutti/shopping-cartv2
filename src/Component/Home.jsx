import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageData from "./imgData";
import "./css/slide.css"

const Home = (props) => {
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
  return (
    <div className="home">
      <h1>Welcome to ...</h1>
      <div>
        <h3>Dont miss this offers!</h3>
        <motion.div
          animate={{
            left: 0,
          }}
          className="slideContainer"
        >
          <img name={imageData[img].name} className="slide-img" src={imageData[img].url} alt="" />
          <p onClick={(prevImg, stopAutoPlay)} className="leftBtn">
            <i class="fas fa-arrow-left"></i>
          </p>
          <p onClick={(nextImg, stopAutoPlay)} className="rightBtn">
            <i class="fas fa-arrow-right"></i>
          </p>
          <p className="price">Price: {imageData[img].price}$</p>
          <motion.p
            whileTap={{ scale: 1.3, color: "rgb(0, 0, 255)" }}
            className="add-to-cart"
            onClick={(props.addToCart)}
          >
            <i class="fas fa-cart-plus"></i>
          </motion.p>
        </motion.div>
        <Link className="links" to="/shop">
          <button className="shopBtn">Go Shopping!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

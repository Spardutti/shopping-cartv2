import React from "react";
import "./css/shop.css";
import { motion } from "framer-motion";

const Shop = (props) => {
  return (
    <div>
      <h1 className="title">Feel free to browse our collection</h1>
      <div className="shop-container">
        {props.imgData.map((e, index) => {
          return (
            <div className="img-container">
              <img
                className="shop-img"
                src={props.imgData[index].name}
                name={props.imgData[index].name}
                alt=""
              />
              <p className="shop-price">Price: {props.imgData[index].price}$</p>
              <motion.p
                onClick={props.click}
                whileTap={{ scale: 1.3, color: "blue" }}
                className="shop-to-cart"
              >
                <i class="fas fa-cart-plus"></i>
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;

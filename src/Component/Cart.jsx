import React from "react";

const Cart = (props) => {
  return (
    <div>
      <div>
        <h1 className="title">Ready to Checkout ?</h1>
        <div className="shop-container">
          {props.cartItems.map((e, index) => {
            return (
              <div className="img-container">
                <img
                  className="shop-img"
                  src={props.cartItems[index].name}
                  name={props.cartItems[index].name}
                  alt=""
                />
                <p className="shop-price">
                  Price: {props.cartItems[index].price}$
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <h1> Total: {props.total}$</h1>
    </div>
  );
};

export default Cart;

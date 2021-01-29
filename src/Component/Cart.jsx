import React from "react";
import "./css/cart.css";

const Cart = (props) => {
  return (
    <div>
      <div>
        <h1 className="title">Ready to Checkout ?</h1>
        <div>
          <div className="list-checkout">

          
          <p>PRoduct</p>
          <p>Quantity</p>
          <p>Price</p>
          </div>
            {props.cartItems.map((e, index) => {
              return (
                <div className="list-checkout">
                  <p name={e.name}>{e.name}</p>
                  <p>1</p>
                  <p>{e.price}$</p>
                  <p onClick={props.delete}><i class="fas fa-trash"></i></p>
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

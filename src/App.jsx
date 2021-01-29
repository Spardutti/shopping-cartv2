import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Cart from "./Component/Cart";
import Home from "./Component/Home";
import "./Component/css/style.css";
import Shop from "./Component/Shop";
import imgData from "./Component/imgData";

const App = () => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (e) => {
    // get the img name
    let btnParent = e.target.parentNode;
    let divContainer = btnParent.parentNode.childNodes;
    let name = divContainer[0].name;
    // search trough the array for the matching element with the img name
    // and get the index
    let index = imgData
      .map((e) => {
        return e.name;
      })
      .indexOf(name);
      console.log(index)
    //push element to cartItems
    setCartItems([...cartItems, imgData[index]]);
  };


  const deleteItem = (e) => {
    let divParent = e.target.parentNode.parentNode;
    let name = divParent.childNodes[0].innerHTML;
    let index = cartItems.map((e) => {
      return e.name
    }).indexOf(name)
    let arr = cartItems;
    arr.splice(index, 1)
    setCartItems(arr)
    console.log(cartItems)
    setCount(count - 1);
  }
  //update the checkout amout
  const updateTotal = () => {
    cartItems.map((e) => setTotal(total + e.price));
  };

  useEffect(() => {
    //update the cart count
    setCount(cartItems.length);
    updateTotal();
  }, [cartItems]);

 

  return (
    <BrowserRouter>
      <div className="header">
        <h1 className="headerTitle">Shopping Cart</h1>
        <ul>
          <li className="li">
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="links" to="/cart">
              <i class="fas fa-shopping-cart"></i> {count}
            </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route  path="/" render={() => <Home addToCart={addToCart} />} />
        <Route
          exact
          path="/cart"
          render={() => <Cart cartItems={cartItems} total={total} delete={deleteItem} />}
        />
        <Route
          exact
          path="/shop"
          render={() => <Shop click={addToCart} imgData={imgData} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

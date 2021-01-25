import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";

const HeaderBar = (props) => {
  return (
    <BrowserRouter>
      <div>
          <h1>Shopping Cart</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default HeaderBar;

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import "../style.css";
import Shop from "./Shop";

const Header = (props) => {
  return (
    <BrowserRouter>
      <div className="header">
        <h1 className="headerTitle">Shopping Cart</h1>
        <ul>
          <li className="li">
            <Link className="links" to="/">Home</Link>
          </li>
          <li>
            <Link className="links" to="/shop">Shop</Link>
          </li>
          <li>
            <Link className="links" to="/cart"><i class="fas fa-shopping-cart"></i> {0}</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Header;

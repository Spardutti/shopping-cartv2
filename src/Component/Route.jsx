import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Shop from "./Shop";

const Router = () => {
  return (
    <BrowserRouter>
      <Link to="/shop">Shop</Link>
      <Switch>
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

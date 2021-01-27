import React from "react";
import Slides from "./Slides";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <div className="home">
      <h1>Welcome to ...</h1>
      <div>
        <h3>Dont miss this offers!</h3>
        <Slides />
        <Link className="links" to="/shop">
        <button className="shopBtn">Go Shopping!</button>
      </Link>
      </div>

     
    </div>
  );
};

export default Home;

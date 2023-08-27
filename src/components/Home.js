import React from "react";
import "./home.css";
import Float from "./float";
import Logo from "./logo";
import Service from "./service";
import Blog from "./blog";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="bg-image">
        <div className="text-container">
          <div className="text">
            <h1>
              Years Of
              <br />
              Experience
            </h1>
            <br />
            <h4>
              At Medina, we are dedicated <br /> to diagnosing all kinds of
              diseases.
            </h4>
            <div className="btn11">
              <Link to="/appointment">Make An Appoinment</Link>
            </div>
          </div>
        </div>
      </div>
      <Float />
      <Logo />
      <Service />
      <Blog />
    </>
  );
};

export default Home;

import React from "react";
import "../components/Section.css";
import hero from "../Assets/Hero Image (Model).png";
import checkmark from "../Assets/Checkmark.svg";
import blueshape from "../Assets/Blue Shape.svg";
import pinkshape from "../Assets/Pink Shape.svg";
import purpleshape from "../Assets/Purple Shape.svg";

export const Section = () => {
  return (
    <div className="section">
      <div className="wrapper">
        <div className="text">
          <h1>Host your website in less than 5 minutes.</h1>
          <p>
            With Hosterr, get your website up and running in no less than 5
            minutes with the most competitive pricing packages available online.
          </p>

          <div className="form">
            <div className="input">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter e-mail address"
              />
              <button className="btn">Join Waitlist</button>
            </div>
            <div className="check">
              <img src={checkmark} alt="" />
              <p>No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>

        <div className="image">
          <div className="hero">
            <img src={hero} alt="hero" />
          </div>
          <div className="blueimg">
            <img src={blueshape} alt="" />
          </div>
          <div className="pinkimg">
            <img src={pinkshape} alt="" />
          </div>
          <div className="purpleimg">
            <img src={purpleshape} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import logo from "../Assets/Logo.svg";
import hamburgermenu from "../Assets/icon-hamburger.svg";
// import hamburgermenu from '../Assets/bars-solid.svg'
import "../components/NavBar.css";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const ToggleMode = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p className="ph">Hoster is hiring!</p>
      </div>

      <div className="nav">
        <ul className={open ? "" : "toggle"}>
          <div className="nav-list">
            <li>Plans</li>
            <li>Find Domain</li>
            <li>Why Hosterr</li>
          </div>

          <div className="signin">
            <li>Sign in</li>
            <li className="btn">Join Waitlist</li>
          </div>
        </ul>
      </div>
      <div
        className={open ? "hamburger-menu" : "hamburger-menu"}
        onClick={ToggleMode}
      >
        <img src={hamburgermenu} alt="hamburger" />
      </div>
    </div>
  );
};

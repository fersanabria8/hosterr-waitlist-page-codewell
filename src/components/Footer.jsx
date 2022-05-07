import React from "react";
import avatar from "../Assets/Help Avatar.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </div>
      <div className="footer-end">
        <div className="footer-img">
          <img src={avatar} alt="" />
        </div>
        <div className="footer-text">
          <p>Have any questions?</p>
          <span>Talk to a specialist</span>
        </div>
      </div>
    </div>
  );
};

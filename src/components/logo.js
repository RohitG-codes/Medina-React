import React from "react";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <div className="afterfloat-logo">What Makes Us Different</div>

      <div className="logos-container">
        <div className="logo1">
          <i className="fa-solid fa-stethoscope"></i>
        </div>
        <div className="logo2">
          <i className="fa-solid fa-x-ray"></i>
        </div>
        <div className="logo3">
          <i className="fa-solid fa-suitcase-medical"></i>
        </div>
      </div>
      <div className="logo-text">
        <div className="logo-text1">Qualified Specialists</div>
        <div className="logo-text2">Modern Equipment</div>
        <div className="logo-text3">Emergency Diagnostics</div>
      </div>
    </div>
  );
};

export default Logo;

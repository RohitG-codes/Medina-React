import React from "react";
import "./service.css";

const Service = () => {
  return (
    <div>
      <div className="afterfloat-service">Our Services</div>

      <div className="grid-service-container">
        <div className="grid-service-item one">
          <div className="btnn">
            <a href="https://en.wikipedia.org/wiki/Pediatrics" target="_blank">Pediatrics of Child</a>
          </div>
        </div>
        <div className="grid-service-item two">
          <div className="btnn">
            <a href="https://en.wikipedia.org/wiki/Magnetic_resonance_imaging" target="_blank">MRI of Brain</a>
          </div>
        </div>
        <div className="grid-service-item three">
          <div className="btnn">
            <a href="https://en.wikipedia.org/wiki/Chest_radiograph" target="_blank">X-RAY of Heart</a>
          </div>
        </div>
        <div className="grid-service-item four">
          <div className="btnn">
            <a href="https://en.wikipedia.org/wiki/Medical_laboratory" target="_blank">Laboratory Services</a>
          </div>
        </div>
        <div className="grid-service-item five">
          <div className="btnn">
            <a href="https://en.wikipedia.org/wiki/Pregnancy" target="_blank">Pregnancy</a>
          </div>
        </div>
        <div className="grid-service-item six">
          <div className="btnn">
            <a href="https://en.wikipedia.org/wiki/Category:Medical_equipment" target="_blank">Best Equipment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

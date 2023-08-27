import React from "react";
import "./team.css";
const Team = () => {
  return (
    <div className="team-container">
    <h1 className="t-h1">Our Team</h1>
      <section className="team">
        <div className="team-member">
          <img src={require("./utils/d7.jpg")} alt="Doctor 1" />
          <h3>Dr. Jane Smith</h3>
          <p>Cardiologist</p>
        </div>
        <div className="team-member">
          <img src={require("./utils/d2.jpg")} alt="Doctor 2" />
          <h3>Dr. John Doe</h3>
          <p>Orthopedic Surgeon</p>
        </div>
        <div className="team-member">
          <img src={require("./utils/d3.jpg")} alt="Doctor 3" />
          <h3>Dr. Emily Johnson</h3>
          <p>Neurologist</p>
        </div>
        <div className="team-member">
          <img src={require("./utils/d4.jpg")} alt="Doctor 4" />
          <h3>Dr. Michael Williams</h3>
          <p>General Practitioner</p>
        </div>
        <div className="team-member">
          <img src={require("./utils/d5.jpg")} alt="Doctor 5" />
          <h3>Dr. Sarah Davis</h3>
          <p>Pediatrician</p>
        </div>
        <div className="team-member">
          <img src={require("./utils/d6.jpg")} alt="Doctor 6" />
          <h3>Dr. James Brown</h3>
          <p>Dermatologist</p>
        </div>
      </section>
    </div>
  );
};

export default Team;

import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="afterfloat11">About Us</div>

      <div className="ab-container">
        <div className="ab-section">
          <img  src={require("./utils/about1.jpg")} alt="Doctor" />
          <h2 className="ab-h2">Experienced Medical Professionals</h2>
          <p className="ab-p">
            Our team of highly skilled doctors and medical experts is dedicated
            to providing top-notch healthcare services. With years of experience
            and a commitment to staying updated with the latest medical
            advancements, we ensure the best care for our patients.
          </p>
        </div>
        <br/><br/>
        <div className="ab-section">
          <img src={require("./utils/about2.jpg")} alt="Clinic" />
          <h2 className="ab-h2">State-of-the-Art Facilities</h2>
          <p className="ab-p">
            Our medical clinic is equipped with modern facilities and advanced
            medical equipment to provide accurate diagnoses and effective
            treatments. We prioritize patient comfort and safety, ensuring a
            welcoming and clean environment for everyone.
          </p>
        </div>
        <br/><br/>
        <div className="ab-section">
          <img src={require("./utils/about3.jpg")} alt="Community" />
          <h2 className="ab-h2">Active Engagement with the Community</h2>
          <p className="ab-p">
            We believe in giving back to the community. Through health awareness
            programs, educational workshops, and free medical camps, we strive
            to make a positive impact on the health and well-being of the people
            we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

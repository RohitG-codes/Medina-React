import React from "react";
import "./nav-service.css";
import Paagetransition from "./pagetransition";

const Navservice = () => {
  return (
    <Paagetransition>
    <div className="navblog-container">
      <>
        <h1 className="blog-h1">Our Services</h1>
        <div className="blog">
          <div className="blog-post">
            <div className="post-title">Physical Therapy for Injury Rehabilitation</div>
            <div className="post-meta">Published on August 15, 2023</div>
            <div className="post-content">
            Our specialized physical therapy programs are designed to aid in injury recovery, improve mobility, and enhance overall physical function....
            </div>
            <img
              src={require("./utils/ser1.jpg")}
              alt="Exercise"
              className="post-image"
            />
          </div>
          <div className="blog-post">
            <div className="post-title">Minimally Invasive Robotic Surgery</div>
            <div className="post-meta">Published on June 30, 2022</div>
            <div className="post-content">
            Experience the benefits of cutting-edge robotic surgery techniques, which result in smaller incisions, shorter recovery times, and enhanced surgical precision...
            </div>
            <img
              src={require("./utils/ser2.jpg")}
              alt="Sleep"
              className="post-image"
            />
          </div>
          <div className="blog-post">
            <div className="post-title">Comprehensive Annual Health Check-ups</div>
            <div className="post-meta">Published on July 20, 2021</div>
            <div className="post-content">
            Our comprehensive health check-ups offer a thorough assessment of your overall health, helping to detect potential issues early and promote a healthier lifestyle...       </div>
            <img
              src={require("./utils/ser3.jpg")}
              alt="Sleep"
              className="post-image"
            />
          </div>
        </div>
      </>
    </div>
    </Paagetransition>
  );
};

export default Navservice;

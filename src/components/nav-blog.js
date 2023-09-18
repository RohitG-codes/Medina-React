import React from "react";
import "./nav-blog.css";
import Paagetransition from "./pagetransition";

const Navblog = () => {
  return (
    <Paagetransition>
    <div className="main-navblog">
      <h1 className="main-navblog-h1">Our Blogs</h1>
      <section>
        <div className="nnnavblog-container">
          <br />
          <br />
          <div className="col-div-6">
            <div className="box-1">
              <a href="https://www.nutritionbylovneet.com/blog" target="_blank">
                <img src={require("./utils/nutrition.jpg")} className="b-img" />
              </a>
              <h3 className="heading1">Nutrition</h3>
              <p className="blog-heading">Nutrition is Necessary</p>
              <p className="nbtext">
                There's no shortage of diet and nutrition information available
                on the web, but readers often struggle to sort through varying
                opinions to determine. Healthy children learn better. People
                with adequate nutrition are more productive and can create
                opportunities to gradually break the cycles of poverty and
                hunger. Malnutrition, in every form, presents significant
                threats to human health. Today the world faces a double burden
                of malnutrition that includes both undernutrition and
                overweight, especially in low- and middle-income...
              </p>
              <p className="nbtext">
                There are multiple forms of malnutrition, including
                undernutrition (wasting or stunting), inadequate vitamins or
                minerals, overweight, obesity, and resulting diet-related
                noncommunicable diseases. what exactly they should eat and how
                they can enjoy treats in...
              </p>
              <span className="name">Manoj Singh . SEP 21, 2021</span>
            </div>
          </div>
          <div className="col-div-6">
            <div className="lr-box">
              <div className="col-div-6">
                <h3 className="heading1">Fitness</h3>
                <p className="blog-heading-1">Do Fitness for Good Health</p>
                <p className="nbtext">
                  Your readers know that they can improve their health by moving
                  their bodies every day, but that doesn't mean they actually
                  follow through...
                </p>
                <span className="name">Ram Laha . Aug 21, 2022</span>
              </div>
              <div className="col-div-6">
                <a
                  href="https://www.anytimefitness.co.in/blog/"
                  target="_blank"
                >
                  <img
                    src={require("./utils/fitness.jpg")}
                    className="b-img-1"
                  />
                </a>
              </div>
              <div className="clearfix" />
              <hr className="line" />
            </div>
            <div className="lr-box">
              <div className="col-div-6">
                <h3 className="heading1">Mental health</h3>
                <p className="blog-heading-1">Looking for Good Mental health</p>
                <p className="nbtext">
                  A growing body of research indicates an undeniable link
                  between physical and mental health...
                </p>
                <span className="name">Raj Verma . SEP 02, 2019</span>
              </div>
              <div className="col-div-6">
                <a href="https://psychcentral.com/blog" target="_blank">
                  {" "}
                  <img src={require("./utils/mh.jpg")} className="b-img-1" />
                </a>
              </div>
              <div className="clearfix" />
              <hr className="line" />
            </div>
            <div className="lr-box">
              <div className="col-div-6">
                <h3 className="heading1">Sleep hygiene</h3>
                <p className="blog-heading-1">Maintain Sleep hygiene</p>
                <p className="nbtext">
                  Sleep plays a huge role in both physical and mental health,
                  yet research suggests that most Americans struggle to get the
                  quality rest they need...
                </p>
                <span className="name">Asoke Saha . Jan 10, 2021</span>
              </div>
              <div className="col-div-6">
                <a
                  href="https://casper.com/blog/what-is-sleep-hygiene/"
                  target="_blank"
                >
                  {" "}
                  <img src={require("./utils/sh.jpg")} className="b-img-1" />
                </a>
              </div>
              <div className="clearfix" />
              <hr className="line" />
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </section>
      <br />
      <br />
      <section>
        <div className="nnnavblog-container" style={{ nbtextAlign: "center" }}>
          <h3 className="mini-heading">Latest stories</h3>
          <br />
          <div className="box-2">
            <a href="https://blog.heartmanity.com/topic/love-marriage-and-relationships" target="_blank">
              <img
                src={require("./utils/RElationships.jpg")}
                className="b-img-1"
              />
            </a>
            <h3 className="heading1">Relationships</h3>
            <p className="blog-heading-1">Good Relationships for Health</p>
            <p className="nbtext">
              From family bonding to friendships to romantic relationships
              especially, how your readers get on with the most important
              people...
            </p>
            <span className="name">Ayush Jha . Feb 21, 2023</span>
          </div>
          <div className="box-2">
            <a
              href="https://www.healthline.com/health/fitness-exercise/best-blogs-of-the-year#1"
              target="_blank"
            >
              {" "}
              <img
                src={require("./utils/b2.jpg")}
                style={{ height: "220px" }}
                className="b-img-1"
              />
            </a>
            <h3 className="heading1">Exercise</h3>
            <p className="blog-heading-1">Benefits of Regular Exercise</p>
            <p className="nbtext">
              Regular exercise has numerous benefits for your overall health. It
              helps improve cardiovascular health, boost mood...
            </p>
            <span className="name">Santanu Kumar . July 21, 2018</span>
          </div>
          <div className="box-2">
            <a
              href="https://www.writeupp.com/blog/importance-of-sleep#:~:text=In%20short%2C%20sleep%20makes%20us,little%20influence%20in%20generating%20rest."
              target="_blank"
            >
              <img src={require("./utils/slepp.jpg")} className="b-img-1" />
            </a>
            <h3 className="heading1">Sleep</h3>
            <p className="blog-heading-1">The Importance of Sleep</p>
            <p className="nbtext">
              Quality sleep is essential for your body's recovery and
              well-being. Lack of sleep can lead to various health issues...
            </p>
            <span className="name">Chandan Gupta . SEP 01, 2017</span>
          </div>
          <div className="clearfix" />
          <div className="box-2">
            <a
              href="https://www.ekhartyoga.com/articles/browse_all"
              target="_blank"
            >
              {" "}
              <img
                src={require("./utils/b3.jpg")}
                style={{ height: "200px" }}
                className="b-img-1"
              />
            </a>
            <h3 className="heading1">Yoga</h3>
            <p className="blog-heading-1">The Importance of Yoga</p>
            <p className="nbtext">
              Slow movements and deep breathing increase blood flow and warm up
              muscles, while holding a pose can build strength...
            </p>
            <span className="name">Sagnik Singh . June 16, 2021</span>
          </div>
          <div className="box-2">
            <a href="https://mindworks.org/blog/" target="_blank">
              {" "}
              <img
                src={require("./utils/Meditation.jpg")}
                style={{ height: "200px" }}
                className="b-img-1"
              />
            </a>
            <h3 className="heading1">Meditation</h3>
            <p className="blog-heading-1">Benefits of Meditation</p>
            <p className="nbtext">
              Explore how incorporating meditation into your daily routine can
              effectively reduce stress and promote overall well-being...
            </p>
            <span className="name">Rakseh Sity . Dec 29, 2023</span>
          </div>
          <div className="box-2">
            <a
              href="https://www.narayanahealth.org/blog/myths-facts-related-to-covid-19-vaccination/#:~:text=Myth%3A%20I%20cannot%20take%20the,the%20doctor%20before%20getting%20vaccinated."
              target="_blank"
            >
              {" "}
              <img
                src={require("./utils/vaccines.jpg")}
                style={{ height: "200px" }}
                className="b-img-1"
              />
            </a>
            <h3 className="heading1">Vaccines</h3>
            <p className="blog-heading-1">Myths About Vaccines</p>
            <p className="nbtext">
              Separate fact from fiction as we debunk prevalent misconceptions
              surrounding vaccines and emphasize their vital role in public
              health...
            </p>
            <span className="name">Vikash Kumar . SEP 03, 2023</span>
          </div>
          <div className="clearfix" />
        </div>
      </section>
    </div>
    </Paagetransition>
  );
};

export default Navblog;

import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <div className="blog-head">
        <div className="afterfloat-blog">Latest Blog Posts</div>
      </div>
      <div className="blog-container">
        <div className="blog-container1 blog-box">
          <div className="blog-image img1"></div>
          <div className="blog-title">
            <a
              href="https://drchandrilchugh.com/blog/10-reasons-to-see-a-neurologist-regularly/#:~:text=You%20may%20want%20to%20see,want%20to%20see%20a%20neurologist.&text=Seizures%20can%20be%20almost%20unnoticeable%20or%20very%20extreme."
              target="_blank"
            >
              Reasons to Visit a Brain Specialist
            </a>
          </div>
          <div className="blog-date">
            <div className="bd-date">June 21, 2023 at 8:12pm</div>
            <div className="bd-border"></div>
            <div className="bd-text">
              <a
                href="https://drchandrilchugh.com/blog/10-reasons-to-see-a-neurologist-regularly/#:~:text=You%20may%20want%20to%20see,want%20to%20see%20a%20neurologist.&text=Seizures%20can%20be%20almost%20unnoticeable%20or%20very%20extreme."
                target="_blank"
              >
                News
              </a>
            </div>
          </div>

          <div className="blog-desc">
            <p>
              There are a lot of women that are unaware of the numerous risks
              associated with their health and eventually ignore the
              importance...
            </p>
          </div>
        </div>
        <div className="blog-container2 blog-box">
          <div className="blog-image img2"></div>
          <div className="blog-title">
            <a
              href="https://alokamedicare.in/2022/01/30/factors-to-be-considered-while-choosing-the-best-diagnostic-center/"
              target="_blank"
            >
              Picking the Diagnostic Services
            </a>
          </div>
          <div className="blog-date">
            <div className="bd-date">June 21, 2023 at 8:12pm</div>
            <div className="bd-border"></div>
            <div className="bd-text">
              <a
                href="https://alokamedicare.in/2022/01/30/factors-to-be-considered-while-choosing-the-best-diagnostic-center/"
                target="_blank"
              >
                News
              </a>
            </div>
          </div>
          <div className="blog-desc">
            <p>
              There have been a lot of cases in which people were not provided
              with accurate reports that eventually affected their medical
              treatment. There is always...
            </p>
          </div>
        </div>
        <div className="blog-container3 blog-box">
          <div className="blog-image img3"></div>
          <div className="blog-title">
            <a
              href="https://www.wikihow.com/Prepare-for-an-ECG"
              target="_blank"
            >
              Preparing for an ECG in 8 Steps
            </a>
          </div>
          <div className="blog-date">
            <div className="bd-date">June 21, 2023 at 8:12pm</div>
            <div className="bd-border"></div>
            <div className="bd-text">
              <a
                href="https://www.wikihow.com/Prepare-for-an-ECG"
                target="_blank"
              >
                News
              </a>
            </div>
          </div>
          <div className="blog-desc">
            <p>
              An ECG stands for an which is a test that measures and records the
              electrical activity of the heart. It is used by doctors to
              obtain...
            </p>
          </div>
        </div>
      </div>
      <div className="blog-btn-container">
        <div className="blog-btn">
          <Link to="/navblog">View All Blog Posts</Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;

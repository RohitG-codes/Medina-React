import React from "react";
import "./footer.css";

const Footer = () => {
  const handleSubscribeButtonSubmit = (event) => {
    event.preventDefault();
    alert("You have Successfully Subscribed");
  };
  return (
    <div>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-card social">
            <div className="flogo">
              <img
                src={require("./utils/logo-inverse-154x53.png")}
                alt="logo"
              />
            </div>
            <div className="ficons">
              <a href="https://en.wikipedia.org/wiki/Facebook" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://en.wikipedia.org/wiki/WhatsApp" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://en.wikipedia.org/wiki/Instagram" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://en.wikipedia.org/wiki/Google%2B" target="_blank">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
            </div>
          </div>
          <div className="footer-card contact">
            <div className="con-title">Contact Us</div>
            <hr className="foot-hr" />
            <div className="con con-no">
              <i className="fa-solid fa-square-phone"></i>
              <a href="https://en.wikipedia.org/wiki/Mobile_telephone_numbering_in_India" target="_blank">1-800-1234-567</a>
            </div>
            <div className="con con-add">
              <i className="fa-solid fa-address-card"></i>
              <a href="https://www.google.com/maps" target="_blank">Street San Diego</a>
            </div>
            <div className="con con-mail">
              <i className="fa-solid fa-envelope"></i>
              <a href="https://www.google.com/intl/en_in/gmail/about/" target="_blank">info@demolink.org</a>
            </div>
          </div>
          <div className="footer-card news">
            <div className="news-title">Newsletter</div>
            <hr className="foot-hr" />
            <div className="news-text">
              Enter your email address to receive up-to-date news, new patient
              information and other things.
            </div>
            <div className="news-mail">
              <form id="appointment-form1" onSubmit={handleSubscribeButtonSubmit}>
                <label for="email"></label>
                <input
                  type="email"
                  id="email"
                  className="mailid"
                  placeholder="Enter Your Email"
                  name="email"
                  required
                />
                <button className="foot-btn" type="submit" >Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

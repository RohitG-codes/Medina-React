import React from "react";
import contactcss from "./contact.module.css";
import Paagetransition from "./pagetransition";

const Contact = () => {

  const handleContactSubmit = (event) => {
    event.preventDefault(); 
    alert("Thanks for Visiting.");
  };

  return (
    <Paagetransition>
    <div className={contactcss.contactcontainer}>
      <div className={contactcss.ccontainer}>
        <h1 className={contactcss.c}>Contact Us</h1>
        <form id="contactForm" onSubmit={handleContactSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={contactcss.cname}
            required 
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={contactcss.cemail}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            defaultValue={""}
            required
          />
          <button className={contactcss.cbtn} type="submit">
            Submit
          </button>
        </form>
        <p id="responseMessage" />
      </div>
    </div>
    </Paagetransition>
  );
};

export default Contact;

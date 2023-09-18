import React from 'react';
import "./appointment.css";
import Paagetransition from "./pagetransition";

const Appointment = () => {

  const handleAppointmentSubmit = (event) => {
    event.preventDefault(); 
    alert("Appointment booked.");
  };

  return (
    <Paagetransition>
    <div className="ap-main-container">
      <div className="ap-container">
        <h1 className="ap-h1">Book an Appointment</h1>
        <form id="appointment-form" onSubmit={handleAppointmentSubmit}>
          <label htmlFor="name" className="ap-label">Name:</label>
          <input type="text" className="ap-input"  id="name" name="name" required/>
          <label htmlFor="email" className="ap-label">Email:</label>
          <input type="email"  className="ap-input" id="email" name="email" required />
          <label htmlFor="date" className="ap-label">Date:</label>
          <input type="date" className="ap-input" id="date" name="date" required />
          <button className="appoin-btn" type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
    </Paagetransition>
  );
};

export default Appointment;

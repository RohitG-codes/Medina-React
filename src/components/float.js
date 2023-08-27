import './float.css';
import { Link } from "react-router-dom";

const Float = () => {
  return (
    <div>
      
    <div className="float-container">
      <div className="float item1">
        <div className="fhead1">
          <i className="fa-solid fa-business-time"></i>Opening Hours
        </div>
        <hr />
        <div className="ftext1">
          <pre>Mon–Fri    8:00am–7:00pm</pre>
          <pre>Mon–Fri    8:00am–7:00pm</pre>
          <pre>Mon–Fri    8:00am–7:00pm</pre>
          <pre>Mon–Fri    8:00am–7:00pm</pre>
        </div>
        <div className="fbtn1"><Link to="/timetable">See More</Link></div>
      </div>
      <div className="float item2">
        <div className="fhead2"><i className="fa-solid fa-clock"></i>Timetable</div>
        <hr />
        <div className="ftext2">
          <p>
            The following is for guidance only to help you plan your appointment
            with a preferred doctor or nurse. It does not guarantee availability
            as the doctors or nurses may sometimes be attending to other duties.
          </p>
        </div>
        <div className="fbtn2"><Link to="/timetable">See More</Link></div>
      </div>
      <div className="float item3">
        <div className="fhead3">
          <i className="fa-solid fa-calendar-check"></i>Appoinment
        </div>
        <hr />
        <div className="ftext3">
          <p>
            The first step towards a healthy life is to schedule an appointment.
            Please contact our office by phone or complete the appointment
            request form.
          </p>
        </div>
        <div className="fbtn3"><Link to="/appointment">See More</Link></div>
      </div>
      <div className="float item4">
        <div className="fhead4">
          <i className="fa-solid fa-tower-broadcast"></i>Emergency
        </div>
        <hr />
        <div className="ftext4">
          <i className="fa-solid fa-phone-volume"></i> 1-800-1234-567 <br />
          Call us!
        </div>
        <div className="fbtn4"><Link to="/contact">See More</Link></div>
      </div>
    </div>
    </div>
  )
}

export default Float

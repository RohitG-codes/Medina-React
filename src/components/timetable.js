import React from "react";
import "./timetable.css";
import { Link } from "react-router-dom";
import Paagetransition from "./pagetransition";

const Timetable = () => {
  return (
    <Paagetransition>
    <div className="tt-container">
      <h1 class="tt-h1">Our Timetable</h1>
      <table class="tt-table">
        <tr>
          <th class="tt-th">Time/Day</th>
          <th class="tt-th">Monday</th>
          <th class="tt-th">Tuesday</th>
          <th class="tt-th">Wednesday</th>
          <th class="tt-th">Thursday</th>
          <th class="tt-th">Friday</th>
        </tr>
        <tr>
          <td class="tt-td">9:00 AM - 10:00 AM</td>
          <td class="tt-td">
            Dr. Smith
            <br />
            Cardiology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Johnson
            <br />
            Neurology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Lee
            <br />
            Internal Medicine
          </td>
        </tr>
        <tr>
          <td class="tt-td">10:00 AM - 11:00 AM</td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Williams
            <br />
            Dermatology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Davis
            <br />
            Orthopedics
          </td>
          <td class="tt-td"></td>
        </tr>
        <tr>
          <td class="tt-td">9:00 AM - 10:00 AM</td>
          <td class="tt-td">
            Dr. Smith
            <br />
            Cardiology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Johnson
            <br />
            Neurology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Lee
            <br />
            Internal Medicine
          </td>
        </tr>
        <tr>
          <td class="tt-td">10:00 AM - 11:00 AM</td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Williams
            <br />
            Dermatology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Davis
            <br />
            Orthopedics
          </td>
          <td class="tt-td"></td>
        </tr>
        <tr>
          <td class="tt-td">9:00 AM - 10:00 AM</td>
          <td class="tt-td">
            Dr. Smith
            <br />
            Cardiology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Johnson
            <br />
            Neurology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Lee
            <br />
            Internal Medicine
          </td>
        </tr>
        <tr>
          <td class="tt-td">10:00 AM - 11:00 AM</td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Williams
            <br />
            Dermatology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Davis
            <br />
            Orthopedics
          </td>
          <td class="tt-td"></td>
        </tr>
        <tr>
          <td class="tt-td">9:00 AM - 10:00 AM</td>
          <td class="tt-td">
            Dr. Smith
            <br />
            /Cardiology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Johnson
            <br />
            Neurology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Lee
            <br />
            Internal Medicine
          </td>
        </tr>
        <tr>
          <td class="tt-td">10:00 AM - 11:00 AM</td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Williams
            <br />
            Dermatology
          </td>
          <td class="tt-td"></td>
          <td class="tt-td">
            Dr. Davis
            <br />
            Orthopedics
          </td>
          <td class="tt-td"></td>
        </tr>
      </table>
      <div className="tt-center">
        <Link to="/appointment" className="tt-styled-button">
          Take Appointment{" "}
        </Link>
      </div>
    </div>
    </Paagetransition>
  );
};

export default Timetable;

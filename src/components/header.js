import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };


  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="header-container">
      <div className="header">
        <div className="head-child">
          <div className="contacts">
            <div className="icon">
              <a href="/">
                <img
                  src={require("./utils/logo-inverse-154x53.png")}
                  alt="logo"
                  height="53px"
                  width="154px"
                />
              </a>
            </div>
            <div className="header-contact">
              <div className="phone">
                <i className="fas fa-phone-alt"></i>
                <a href="https://en.wikipedia.org/wiki/Mobile_telephone_numbering_in_India" target="_blank">1-800-1234-567</a>
              </div>
              <div className="location">
                <i className="fas fa-map-marker-alt"></i>
                <a href="https://www.google.com/maps" target="_blank">2130 Fulton Street San Diego</a>
              </div>
            </div>
          </div>
          <div className="navbar">
            <nav className={`navbarscroll ${isFixed ? 'fixed' : ''}`}>
              <ul className="nav-menu">
                <li className={activeItem === "Home" ? "active" : ""}>
                  <Link to="/" onClick={() => handleItemClick("Home")}>
                    HOME
                  </Link>
                </li>
                <li className={activeItem === "About" ? "active" : ""}>
                  <Link to="/about" onClick={() => handleItemClick("About")}>
                    About
                  </Link>
                </li>
                <li className={activeItem === "Team" ? "active" : ""}>
                  <Link to="/team" onClick={() => handleItemClick("Team")}>
                    Team
                  </Link>
                </li>
                <li className={activeItem === "Appointment" ? "active" : ""}>
                  <Link
                    to="/appointment"
                    onClick={() => handleItemClick("Appointment")}
                  >
                    Appointment
                  </Link>
                </li>
                <li className={activeItem === "Services" ? "active" : ""}>
                  <Link
                    to="/navservice"
                    onClick={() => handleItemClick("Services")}
                  >
                    Services
                  </Link>
                </li>
                <li className={activeItem === "Department" ? "active" : ""}>
                  <Link
                    to="/department"
                    onClick={() => handleItemClick("Department")}
                  >
                    Department
                  </Link>
                </li>
                <li className={activeItem === "Timetable" ? "active" : ""}>
                  <Link
                    to="/timetable"
                    onClick={() => handleItemClick("Timetable")}
                  >
                    Timetable
                  </Link>
                </li>
                <li className={activeItem === "Gallery" ? "active" : ""}>
                  <Link
                    to="/gallery"
                    onClick={() => handleItemClick("Gallery")}
                  >
                    Gallery
                  </Link>
                </li>
                <li className={activeItem === "Blog" ? "active" : ""}>
                  <Link to="/navblog" onClick={() => handleItemClick("Blog")}>
                    Blog
                  </Link>
                </li>
                <li className={activeItem === "Contact" ? "active" : ""}>
                  <Link
                    to="/contact"
                    onClick={() => handleItemClick("Contact")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

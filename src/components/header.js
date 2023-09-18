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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can change this to 'auto' for instant scrolling
    });
  };
  return (
    <div className="header-container">
      <div className="header">
        <div className="head-child">
          <div className="contacts">
            <div className="icon">
              <Link to="/" onClick={() => {handleItemClick("Home");scrollToTop();}}>
                <img
                  src={require("./utils/logo-inverse-154x53.png")}
                  alt="logo"
                  height="53px"
                  width="154px"
                />
              </Link>
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
                  <Link to="/" onClick={() => {handleItemClick("Home");scrollToTop();}}>
                    HOME
                  </Link>
                </li>
                <li className={activeItem === "About" ? "active" : ""}>
                  <Link to="/about" onClick={() => {handleItemClick("About");scrollToTop();}}>
                    About
                  </Link>
                </li>
                <li className={activeItem === "Team" ? "active" : ""}>
                  <Link to="/team" onClick={() =>{ handleItemClick("Team");scrollToTop();}}>
                    Team
                  </Link>
                </li>
                <li className={activeItem === "Appointment" ? "active" : ""}>
                  <Link
                    to="/appointment"
                    onClick={() => {handleItemClick("Appointment");scrollToTop();}}
                  >
                    Appointment
                  </Link>
                </li>
                <li className={activeItem === "Services" ? "active" : ""}>
                  <Link
                    to="/navservice"
                    onClick={() => {handleItemClick("Services");scrollToTop();}}
                  >
                    Services
                  </Link>
                </li>
                <li className={activeItem === "Department" ? "active" : ""}>
                  <Link
                    to="/department"
                    onClick={() => {handleItemClick("Department");scrollToTop();}}
                  >
                    Department
                  </Link>
                </li>
                <li className={activeItem === "Timetable" ? "active" : ""}>
                  <Link
                    to="/timetable"
                    onClick={() => {handleItemClick("Timetable");scrollToTop();}}
                  >
                    Timetable
                  </Link>
                </li>
                <li className={activeItem === "Gallery" ? "active" : ""}>
                  <Link
                    to="/gallery"
                    onClick={() => {handleItemClick("Gallery");scrollToTop();}}
                  >
                    Gallery
                  </Link>
                </li>
                <li className={activeItem === "Blog" ? "active" : ""}>
                  <Link to="/navblog" onClick={() => {handleItemClick("Blog");scrollToTop();}}>
                    Blog
                  </Link>
                </li>
                <li className={activeItem === "Contact" ? "active" : ""}>
                  <Link
                    to="/contact"
                    onClick={() => {handleItemClick("Contact");scrollToTop();}}
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

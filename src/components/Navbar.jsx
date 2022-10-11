import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            JIETDAT
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Activities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/latestevent"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Latest Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallary"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallary
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <a href="https://forms.gle/Uk16HEzs9X6k1kpA9" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill navib"> <i className='fa fa-user-plus me-2'></i>Register for Techtalks</a>
          </ul>
        </div>
        <div className="nav-icon" onClick={handleClick}>
            <GiHamburgerMenu className="navi " value={{ color: 'white'}}/>
            <i className={click ? "fas" : "fas"}></i>
          </div>
      </nav>
      
    </>
  );
}

export default NavBar;
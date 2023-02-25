import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';

function NavBar() {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const goToContact = () => {
//       navigate('/techtalks');
     window.open('https://dailyprophets.netlify.app/', '_blank');
  }

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
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Students"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Student Council
              </NavLink>
            </li>

<a href="https://resonancejiet.netlify.com" target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill ">Resonance</a>
<button exact target={"_blank"} rel="noreferrer" class="btn btn-primary rounded-pill navib" onClick={goToContact}>
  <i className='fa fa-user-plus me-2'></i>SOCIAL MEDIA 
</button>
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

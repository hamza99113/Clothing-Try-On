import React from 'react';
import './Footer.css';
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedInIcon from "@iconscout/react-unicons/icons/uil-linkedin";
import logo from '../../images/logo.png';
import { NavLink } from "react-router-dom";

function Footer() {
  const handleLinkClick = () => {
    window.open("https://github.com/hamza99113/Clothing-Try-On", "_blank");
  };

  const handleLinkClicks = () => {
    window.open("https://www.linkedin.com/in/ali-hamza-2504b2193", "_blank");
  };

  return (
    <div className="color">
    <div className="logo"><img src={logo} alt="" /></div>

    <div className="section-p1">
      <div className="col1">
        <h4>Contact</h4>
        <p><strong>Address: </strong> House no.1086, Street 1, E11/4, Islamabad</p>
        <p><strong>Phone: </strong> (+92) 300 7862212 / (+92) 343 7862244</p>
        <p><strong>Hours: </strong> 09:00 - 18:00 , Mon - Sat</p>
      </div>


      <div className="col2">
        <h4>About</h4>
        <NavLink to="/About" className="s-links">
          <div className="s-options">About Us</div>
        </NavLink>
        <NavLink to="/Settings" className="s-links">
          <div className="s-options">Setting</div>
        </NavLink>
        <NavLink to="/PrivacyPolicy" className="s-links">
          <div className="s-options">Privacy Policy</div>
        </NavLink>
        <NavLink to="/Help" className="s-links">
          <div className="s-options">Help</div>
        </NavLink>
        <NavLink to="/Complaints" className="s-links">
          <div className="s-options"> Register Complaints</div>
        </NavLink>
      </div> 

      
      <div className="col3">
        <h4>My Account</h4>
        <NavLink to="/SignIn" className="s-links">
          <div className="s-options">Sign In</div>
        </NavLink>
        <NavLink to="/SignUp" className="s-links">
          <div className="s-options">Sign Up</div>
        </NavLink>
        <NavLink to="/Cart" className="s-links">
          <div className="s-options">View Cart</div>
        </NavLink>
        <NavLink to="/Favourite" className="s-links">
          <div className="s-options">Favourite</div>
        </NavLink>
      </div>


      <div className="col4">
          <h4>Follow Us</h4>
          <div className="icon">
            <div><Gitub color="white" size={"3rem"} onClick={handleLinkClick}/></div>
            <div><LinkedInIcon  color="white" size={"3rem"} onClick={handleLinkClicks}/></div>
          </div>
      </div>
    </div>
    <div className="copyright">
        <p>2021 copyright reserved - HTML CSS ECommerce Website Template</p>
      </div>
    </div>
  );
}

export default Footer;
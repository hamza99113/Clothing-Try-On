import React from "react";
import "./Settings.css";
import { NavLink } from "react-router-dom";


function Settings(){
  return (
    <div className="s-wrapper">
      <div className="s-heading">Settings</div>
      <div className="s-content">
        <div className="s-section">
          <div className="s-title">Account Settings</div>
          <div className="s-option">
            <NavLink to="/UserProfile">
            <div className="s-option">User Profile</div>
              </NavLink>
          </div>
          
        </div>
        <div className="s-section">
          <div className="s-title">Dark Mode Settings</div>
          <div className="s-option">Dark Mode</div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
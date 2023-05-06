import React, { useContext} from "react";
import "./Settings.css";
import { NavLink } from "react-router-dom";
import { themeContext } from "../../Context";


function Settings(){
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="s-wrapper" style={{ 
      background: darkMode ? "#222" : "", 
      boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none"
    }}>
      <div className="s-heading">Settings</div>
      <div className="s-content">
        <div className="s-section">
          <div className="s-title">Account Settings</div>
          <div className="s-option">
            <NavLink to="/UserProfile">
            <div className="s-option" style={{ color: darkMode ? "white" : "" }}>User Profile</div>
              </NavLink>
          </div>
          
        </div>
        <div className="s-section">
          <div className="s-title">Dark Mode Settings</div>
          <NavLink to="/Toggle">
          <div className="s-option" style={{ color: darkMode ? "white" : "" }}>Dark Mode</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Settings;
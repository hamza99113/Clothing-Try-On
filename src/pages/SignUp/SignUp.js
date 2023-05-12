import React, { useContext} from "react";
import { useState } from "react";
import "./SignUp.css";
import profile from "../../images/profile.png";
import { NavLink } from "react-router-dom";
import { themeContext } from "../../Context";

function SignUp() {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="su-main">
      <div className="su-sub-main">
        <div>
          <div className="su-imgs">
            <div className="su-container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div className="heading-signup">
            <h1>SignUp Page</h1>
            <div style={{ paddingTop: "20px" }}>
              
              <input
                type="text"
                placeholder="Username"
                className="su-name input-field-style"
              />
            </div>

            <div style={{ paddingTop: "20px" }}>
              
              <input
                type="text"
                placeholder="Email"
                className="su-name input-field-style"
              />
            </div>

            <div className="su-second-input">
              
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="su-name input-field-style"
                style={{ fontSize: "18px" }}
              />
            </div>

            <label className="password-checkbox">
              <input
                type="checkbox"
                checked={passwordVisible}
                onChange={handleTogglePasswordVisibility}/>Show Password
            </label> 

            <div className="su-login-button">
              <button className="button signup-button">SignUp</button>
            </div>

            <p className="su-link" style={{ color: darkMode ? "white" : "" }}> Already have account?
              <NavLink to="/SignIn">
                <a href="#" style={{ color: darkMode ? "white" : "" }}>Sign In</a>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
import React, { useContext} from "react";
import "./SignIn.css";
import profile from "../../images/profile.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import SignUp from "../SignUp/SignUp";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "../../Context";

function SignIn() {

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };



  const onSignIn = (googleUser) => {
    const email = googleUser.getBasicProfile().getEmail();
    // handle sign-in with Google on the server-side
  };

  const renderGoogleSignInButton = () => {
    window.gapi.signin2.render("google-signin-button", {
      scope: "email",
      width: 240,
      height: 50,
      longtitle: true,
      theme: "dark",
      onsuccess: onSignIn,
      client_id: "129606066637-576fp8o6m5el8qhetbaaemdb4r8u2e3s.apps.googleusercontent.com"
    });
  };

  React.useEffect(() => {
    // load Google Sign-In API script
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    script.defer = true;
    script.onload = renderGoogleSignInButton;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div className="heading-signin">
            <h1>SignIn Page</h1>

            <div>
              
              <input
                type="text"
                placeholder="user name"
                className="name input-field-style"
              />
            </div>

            <div className="second-input">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="password"
                className="name input-field-style"
                style={{ fontSize: "18px" }}
              />
              
              <label className="password-checkbox">
              <input
                type="checkbox"
                checked={passwordVisible}
                onChange={handleTogglePasswordVisibility}/>Show Password
              </label> 

            </div>
            <div className="login-button">
              <button className="button sign-button">Signin</button>
            </div>

            <div className="google-button">
              <button
                id="google-signin-button"
                className="button google-signin-button"
              >
                Sign in with Google
              </button>
            </div>

            <p className="link" style={{ color: darkMode ? "white" : "" }}>Don't have an Account?
              <NavLink to="/SignUp">
                <a href="#" style={{ color: darkMode ? "white" : "" }}>Sign Up</a>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
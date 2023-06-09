import React, {useContext} from "react";
import "./About.css";
import "./Work.css";
import Testimonial from "../About/Testimonial";
import Contact from "../About/Contact";
import Experience from "../About/Experience";
import Work from "../About/Work";
import { NavLink } from "react-router-dom";
import { themeContext } from "../../Context";

function Intro() {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="About">
        <div className="About-name">
          <span style={{ color: darkMode ? "white" : "" }}>AboutUs</span>
          <span>
           Bring Real World Shopping experience online
          </span>
          <span style={{ color: darkMode ? "white" : "" }}>
          The leading virtual fitting and styling solution for businesses of all sizes

Try on items, get accurate size visualization experience and style outfits 
 all from within your elevated online store. Benefit from increased conversions, enhanced engagement, and significantly lower product returns.
          </span>

          <NavLink to="/SignIn"><button className=" button About-button">SignUp </button></NavLink>
        </div> 

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "30rem",
            height: "13rem",
            left: "-9rem",
          }}
        ></div>

        <div className="ex">
          <Experience />
        </div>
        <div className="ex">
          <Work />
        </div>

        <div>
        <Testimonial />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Intro;

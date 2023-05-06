import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";

const Experience = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" >1+</div>
        <span style={{ color: darkMode ? "white" : "" }}>years </span>
        <span style={{ color: darkMode ? "white" : "" }}>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" >3+</div>
        <span style={{ color: darkMode ? "white" : "" }}>completed </span>
        <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span style={{ color: darkMode ? "white" : "" }}>companies </span>
        <span style={{ color: darkMode ? "white" : "" }}>Work</span>
      </div>
    </div>
  );
};

export default Experience;
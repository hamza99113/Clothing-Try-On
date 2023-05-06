import React from "react";
import "./Card.css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Card = ({emoji, heading, detail, color}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
    <div className="card" style={{borderColor: {color},background: darkMode ? "#222" :"", color: darkMode ? "#088178" : "" }}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{ color: darkMode ? "white" : "" }}>{detail}</span>
      <button className="c-button"style={{background: darkMode ? "#088178" : "", color: darkMode ? "white" : ""}}>LEARN MORE</button>
    </div>
    </div>
  );
};

export default Card;
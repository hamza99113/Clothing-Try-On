import React from 'react';
import './Intro.css';
import { NavLink } from 'react-router-dom';


function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>YourFit</span>
          <span>Shopping is Finally Easier With Personalized Try-On</span>
          <span>The leading fitting and styling solution for business of all sizes Try on items, get accurate size estimation and style outfits all from within your elevated online store. Benefit from increased conversions, enhanced engagement, and significantly lower product returns.</span>
        </div>
        <NavLink to="/virtualTry"><button className=" button i-button">Lets Start</button></NavLink>
      </div>
    </div>
  )
}
export default Intro;
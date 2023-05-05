import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png"
import { useSelector} from "react-redux";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Navbar() {
  let activeStyle = {
    textDecoration: "underLine",
  };
  const cartItem = useSelector((state) => state.cartItems);
  return (
    <div className="n-wrapper">
      <div className="n-left">
      <img src={logo}alt="" />
        {/* <div className="n-name">TryOn couture</div> */}
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul className="nav-ul" style={{ listStyleType: "none" }}>
            <NavLink className="navlink"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
              end
            >
              {" "}
              <li className="nav-li">Home </li>{" "}
            </NavLink >
            <NavLink className="navlink" 
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="virtualTry"
            > 
              {" "}
              <li className="nav-li">TryOn</li>{" "}
            </NavLink>
           
            <NavLink to="/About" className="navlink" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {" "}
              <li className="nav-li">AboutUs</li>
            </NavLink>

            <NavLink to="/Settings" className="navlink" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {" "}
              <li className="nav-li">Settings</li>
            </NavLink>

            <NavLink to="/PrivacyPolicy" className="navlink" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {" "}
              <li className="nav-li">Privacy Policy</li>
            </NavLink>

            <NavLink to="/Help" className="navlink" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {" "}
              <li className="nav-li">Help</li>
            </NavLink>

            <NavLink to="/Complaints" className="navlink" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              {" "}
              <li className="nav-li">Complaints</li>
            </NavLink>

            <NavLink to="/Cart" className="navlink-Cart" >
              <Badge badgeContent={cartItem.length} color="primary">
                < ShoppingCartOutlinedIcon  style={{ color: 'Black' }}/>
              </Badge>
            </NavLink> 
          </ul>
        </div>
        <NavLink to="/SignUp" style={{ paddingRight: "20px",paddingLeft: "0px", paddingTop:"16px" }}>
          <button className="button navLink">SignUp</button>
        </NavLink>
        <NavLink to="/SignIn" style={{ paddingRight: "20px", paddingTop:"16px" }}>
          <button className="button navLink">Signin</button>
        </NavLink>
      </div>
    </div>

  );
}

export default Navbar;

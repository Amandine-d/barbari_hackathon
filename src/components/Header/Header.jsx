import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Header() {
  return (
    <>
      <div className="container__navbar">
        <NavLink to="/" className="navlink__navbar">
          <img src={logo} alt="logo" className="logo__navbar" />
        </NavLink>
        <NavLink to="/" className="navlink__navbar">
          Home
        </NavLink>
        <NavLink to="/products" activeStyle className="navlink__navbar">
          Products
        </NavLink>
        <NavLink to="/contact" activeStyle className="navlink__navbar">
          Contact Us
        </NavLink>
      </div>
    </>
  );
}

export default Header;
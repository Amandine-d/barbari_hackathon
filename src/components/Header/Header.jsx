import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import './Header.css';

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
        <NavLink to="/music" className="navlink__navbar">
          Music
          {/* <NavLink to='/music/classical' className="navlink__navbar" />
          <NavLink to='/eighties' className="navlink__navbar" />
          <NavLink to='/electro' className="navlink__navbar" />
          <NavLink to='/techno' className="navlink__navbar" />
          <NavLink to='/triphop' className="navlink__navbar" /> */}
        </NavLink>
        <NavLink to="/contact" className="navlink__navbar">
          Contact Us
        </NavLink>
      </div>
    </>
  );
}

export default Header;
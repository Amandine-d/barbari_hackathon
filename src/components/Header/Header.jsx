import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="container__navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="line" />
        <h1>VALKYRY</h1>
      </div>
    </>
  );
}

export default Header;

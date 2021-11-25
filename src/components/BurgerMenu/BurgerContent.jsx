import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerContent.css";

function BurgerContent({ handleClick }) {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink
            to="/home"
            className="navLink-burgerMenu"
            onClick={handleClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className="navLink-burgerMenu"
            onClick={handleClick}
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="navLink-burgerMenu"
            onClick={handleClick}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContent;

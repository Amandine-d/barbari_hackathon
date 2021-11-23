import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return(
    <div>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/products" >Products</NavLink>
      <NavLink to="/contact" >Contact</NavLink>
    </div>
  )
}

export default Navbar;
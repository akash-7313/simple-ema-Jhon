import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
//   const activeStyle = {
//     fontWeight: "bold",
//     color: "yellow",
//   };

  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav className="navbar">
        <NavLink to="/shop">
          Shop
        </NavLink>
        <NavLink to="/review">
          Order Review
        </NavLink>
        <NavLink to="/inventory">
          Manage Inventory here
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

// <a href="/shop">Shop</a>
// <a href="/review">Order Review</a>
// <a href="/inventory">Manage Inventory here</a>

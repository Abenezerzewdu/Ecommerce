// Navbar.js
import React from "react";
import "./styles/Navbar.css"; // Make sure to create this CSS file
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyEcommerce</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="login-button">
        <Link to="/login">Login</Link> {/* Change to Link */}
      </div>
    </nav>
  );
};

export default Navbar;

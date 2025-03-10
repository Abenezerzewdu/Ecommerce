// Navbar.js
import React from "react";
import "./styles/Navbar.css"; // Make sure to create this CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyEcommerce</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="login-button">
        <a href="#login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;

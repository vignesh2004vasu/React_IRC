import React from 'react';
// import '../Assests/Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav class="navbar">
      <div class="logo">
        <img src="your_logo.png" alt="Logo"/>
      </div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;

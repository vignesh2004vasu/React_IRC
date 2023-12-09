import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="navb">
  <nav class="navbar">
    <div>
    <img src="/V logo.jpg" alt="Logo" className="logo-image" />
    </div>
    <div class="links">
      <a href="/Login" class="href1">Login</a>
      <a href="#">Register</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
</div>

    );
}

export default Navbar;

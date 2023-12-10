import React from 'react';
import '../Assests/css/Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src='' alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
        <Link to="/">Users</Link>

        </li>
        <li>
        <Link to="/Login" >Login
        </Link>
        </li>
        <li>
        <Link to="/Register" >Register
        </Link>

        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

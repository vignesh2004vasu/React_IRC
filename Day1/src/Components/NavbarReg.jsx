import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div>
                    <img src="/V logo.jpg" alt="Logo" className="logo-image" />
                </div>
                <div>
                    <Link
                        to="/Login"
                        className="href1"
                    >
                        Login
                    </Link>
                    <a href="#">Register</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

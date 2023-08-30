import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <Link className="nav-link">Career</Link>
            <Link to="/Projects" className="nav-link">Projects</Link>
            <Link className="nav-link">About Me</Link>
        </div>
    )

}

export default Navbar;
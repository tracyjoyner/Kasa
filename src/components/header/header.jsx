import React from "react";
import { NavLink, Link } from "react-router-dom";
import LogoRed from "../../assets/LOGO-red-desktop.svg";

function Header() {
  return (
    <div className="nav-container">
      <Link to="/">
        <img className="header-logo" src={LogoRed} alt="Kasa Logo" />
      </Link>
      <nav className="nav">
        <NavLink to="/" className="home-link">
          Home
        </NavLink>
        <NavLink to="/about" className="about-link">
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;

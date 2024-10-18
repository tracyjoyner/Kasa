import React from "react";
import { NavLink, Link } from "react-router-dom";
import LogoRed from "../../assets/LOGO-red-desktop.svg";
import "./header.scss";

function Header() {
  return (
    <div className={"NavContainer"}>
      <Link to="/">
        <img className={"HeaderLogo"} src={LogoRed} alt="Kasa Logo" />
      </Link>
      <nav>
        <NavLink to="/" className={"homeLink"}>Home</NavLink>
        <NavLink to="/about" className={"aboutLink"}>About</NavLink>
      </nav>
    </div>
  );
}

export default Header;

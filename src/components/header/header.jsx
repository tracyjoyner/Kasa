import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import LogoRed from "../../assets/LOGO-red-desktop.svgcd .";

const HeaderLogo = styled.img`
  height: 68px;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HeaderLogo src={LogoRed} alt="Kasa Logo" />
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </NavContainer>
  );
}

export default Header;

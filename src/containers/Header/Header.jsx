import React from "react";
import { NavLink } from "react-router-dom";
import { Breakpoint } from "react-socks";
import TmdbIcon from "../../assets/tmdb-power.png";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="navbar-wrapper">
      <Breakpoint medium up>
        <ul className="navbar-links">
          <li className="navbar-link-logo">
            <NavLink to="/">
              <img src={TmdbIcon} alt="logo" />
            </NavLink>
          </li>
        </ul>
      </Breakpoint>
    </nav>
  );
};

export default Header;

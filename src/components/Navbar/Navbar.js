import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./Navbar.scss";

const Navbar = ({ user }) => {
  return (
    <header className="header">
      <Link to="/">
        <h1>HOUSBIDY</h1>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <NavLink to="/" exact className="">
              Explore
            </NavLink>
          </li>
          <li>
            {user ? (
              <Avatar alt={user} src="/broken-image.jpg" />
            ) : (
              <NavLink
                to="/login"
                className=""
                //   activeClassName="header__link--active"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

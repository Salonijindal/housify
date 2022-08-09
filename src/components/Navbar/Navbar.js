import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./Navbar.scss";

const Navbar = ({ user }) => {
  return (
    <header className="header">
      <ul className="header__list">
        <Link to="/">
          <h2 className="header__text">HOUSBIDY</h2>
        </Link>
        <li>
          <NavLink to="/explore" exact className="">
            Explore
          </NavLink>
        </li>
        <li className="header__list--user-profile">
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
    </header>
  );
};

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top shadow-5-strong">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand links mb-0 h1">
            Navbar
          </Link>
        </div>
        <NavLink to="/gallary" className="links">
          Gallary
        </NavLink>
        <NavLink to="/posts" className="links">
          Posts
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top shadow-5-strong">
        <div className="container-fluid">
          <a href="#root" className="navbar-brand links mb-0 h1">
            Navbar
          </a>
        </div>
        <a className="links" href="#gallary">
          Gallary
        </a>
        <a className="links" href="#posts">
          Posts
        </a>
      </nav>
    </>
  );
};

export default Navbar;

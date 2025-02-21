import React from "react";
import { createBrowserRouter, Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom p-3 fixed-top bg-white ">
      <div className="container d-flex justify-content-center">
        <Link className="navbar-brand" to="/">
          <img width={"25%"} src="images/logo.svg" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-5 fs-5 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

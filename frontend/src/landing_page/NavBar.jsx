import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg border-bottom p-3 fixed-top bg-white ">
      <div class="container d-flex justify-content-center">
        <a class="navbar-brand" href="#">
          <img width={"25%"} src="images/logo.svg" alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-5 fs-5 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                Signup
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

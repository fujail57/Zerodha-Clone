import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosAuthInstance } from "./utils/axiosInstance";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState("");

  // Click handle functions
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Common function to handle active class
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "active-link" : "text-secondary";

  // logout
  const handleLogoutClick = async () => {
    try {
      await axiosAuthInstance.post("/logout");
      alert("Logged out successfully");
      setTimeout(() => {
        window.location.href = "http://localhost:5173/signup";
      }, 1000);
    } catch (error) {
      console.log("Faild to Logout ", error);
      alert("Logout failed!");
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center ">
      {/* logo */}
      <div className="mx-4 ">
        <img width={"40px"} src="/images/image.png" alt="" />
      </div>

      {/* right side */}
      <div className="">
        <ul style={{ listStyle: "none" }} className="d-flex gap-5 nav-linkCss">
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={getNavLinkClass}>
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/holdings" className={getNavLinkClass}>
              Holdings
            </NavLink>
          </li>
          <li>
            <NavLink to="/positions" className={getNavLinkClass}>
              Positions
            </NavLink>
          </li>
          <li>
            <NavLink to="/funds" className={getNavLinkClass}>
              Funds
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={getNavLinkClass}>
              Apps
            </NavLink>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="zu-style">ZU</span> <span>USERID</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className="dropdown-item cursor-pointor">Action</li>
                <li className="dropdown-item cursor-pointor">Another Action</li>
                <li className="dropdown-divider">
                  <hr />
                </li>
                <li
                  onClick={handleLogoutClick}
                  className="dropdown-item cursor-pointor"
                >
                  Log Out
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

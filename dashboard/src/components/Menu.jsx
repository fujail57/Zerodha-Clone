import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Click handle functions
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Common function to handle active class
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "active-link" : "text-secondary";

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
            <div
              style={{ cursor: "pointer" }}
              className="d-flex gap-2"
              onClick={handleProfileClick}
            >
              <div className="">ZU</div>
              <p className="">USERID</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

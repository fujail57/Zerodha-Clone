import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Click handle functions
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="d-flex justify-content-between align-items-center ">
      {/* logo */}
      <div></div>

      {/* right side */}
      <div className="">
        <ul style={{ listStyle: "none" }} className="d-flex gap-5 nav-linkCss">
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/orders">Orders</a>
          </li>
          <li>
            <a href="/holdings">Holdings</a>
          </li>
          <li>
            <a href="/positions">Positions</a>
          </li>
          <li>
            <a href="/funds">Funds</a>
          </li>
          <li>
            <a href="/apps">Apps</a>
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

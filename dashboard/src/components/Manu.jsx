import React from "react";

const Manu = () => {
  return (
    <div className="d-flex justify-content-between align-items-center ">
      {/* logo */}
      <div>
        <img
          style={{ marginTop: "-20px" }}
          className="mx-3"
          width={"50px"}
          src="/images/image.png"
          alt="Logo"
        />
      </div>

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
            <div className="d-flex gap-2">
              <div className="">ZU</div>
              <p className="">USERID</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Manu;

import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="container-fluid  row pt-4">
      {/* left section */}
      <section className="col-4 d-flex justify-content-around align-items-center border-bottom">
        <div className="nifty d-flex gap-4">
          <p>NIFTY 50</p>
          <p>0.00</p>
          <p>0</p>
        </div>
        <div className="sensex d-flex gap-4">
          <p>SENSEX</p>
          <p>0.00</p>
          <p>0</p>
        </div>
      </section>
      {/* right section */}
      <section className="col-8 border-bottom">
        <Menu />
      </section>
    </div>
  );
};

export default TopBar;

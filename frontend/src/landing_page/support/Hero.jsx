import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        minHeight: "60vh",
        backgroundColor: "#387ed1",
        marginTop: "80px",
      }}
      className="container-fluid text-white link-white px-5"
    >
      <div className="container">
        <section className=" supportCSS d-flex justify-content-between p-5">
          <h4>Support Portal</h4>
          <a href="">Track tickets</a>
        </section>
        <section className="row supportCSS  supportCSS pb-5">
          <div className="col">
            <h2 className="text-white">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input
            className="my-4"
              type="text"
              name=""
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
            <section className="row">
              <a className="col-4" href="https://zerodha.com/open-account">
                Track account opening
              </a>
              <a className="col-4" href="">
                Track segment activation
              </a>
              <a className="col-4" href="">
                Intraday margins
              </a>
              <a className="col-4" href="">
                Kite user manual
              </a>
            </section>
          </div>
          <div className="col">
            <h2 className="text-white">Featured</h2>
            <ol>
              <li>
                <a href="https://zerodha.com/marketintel/bulletin/404123/surveillance-measure-on-scrips-february-2025">
                  Surveillance measure on scrips - February 2025
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;

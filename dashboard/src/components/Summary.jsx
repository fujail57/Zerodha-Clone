import React from "react";

const Summary = () => {
  return (
    <div>
      {/* first ->  Username */}
      <section className="m-5 pt-4 ">
        <h2>Hi, User!</h2>
      </section>
      <hr />
      {/* second -> Equity */}
      <section className="m-5 pt-4">
        <div className="">
          <h3>Equity</h3>
        </div>
        <div className="row m-5">
          <section className="col">
            <h2>3.74k</h2>
            <p>Margin available</p>
          </section>
          <section className="col">
            <p>Margin used 0</p>
            <p>Opening balance 3.74k</p>
          </section>
        </div>
      </section>
      <hr />
      {/* Third section -> Holdings */}
      <section className="m-5 pt-4">
        <div className="">
          <h3>Holdings (13)</h3>
        </div>
        <div className="row m-5">
          <section className="col">
            <h2>
              1.55k <span style={{ fontSize: "15px" }}>+5.20%</span>{" "}
            </h2>
            <p>P&L</p>
          </section>
          <section className="col">
            <p>Current Value 31.41k</p>
            <p>Investment 29.88k</p>
          </section>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Summary;

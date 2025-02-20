import React from "react";
import LinkButton from "../../component/LinkButton";

const Education = () => {
  return (
    <div style={{ marginTop: "150px" }} className="container mb-5 ">
      <div className="row mt-5 ">
        <div className="col-6">
          <img src="images/education.svg" alt="Education" />
        </div>
        <div className="col-6 fs-5">
          <h2 className="my-4">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <LinkButton name="Varsity" />
          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <LinkButton name="TradingQ&A" />
        </div>
      </div>
    </div>
  );
};

export default Education;

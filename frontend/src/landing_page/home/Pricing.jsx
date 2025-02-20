import React from "react";
import LinkButton from "../../component/LinkButton";

const Pricing = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-5 mt-5  fs-5">
          <h2 className="mt-5">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        <LinkButton name="See pricing"/>
        </div>
        {/* 2nd col */}
        <div className="row col-7 text-center ">
          <div className="col-4 d-flex align-items-end ">
            <img className="w-75" src="images/pricing0.svg" alt="pricing" />
            <p className="" style={{fontSize:"10px"}}>Free account opening</p>
          </div>
          <div className="col-4 d-flex align-items-end">
            <img className="w-75" src="images/pricing0.svg" alt="pricing" />
            <p style={{fontSize:"10px"}}>Free equity delivery and direct mutual funds</p>
          </div>
          <div className="col-4 d-flex align-items-end ">
            <img
              className="w-75"
              src="images/intradayTrades.svg"
              alt="pricing"
            />
            <p style={{fontSize:"10px"}}>Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

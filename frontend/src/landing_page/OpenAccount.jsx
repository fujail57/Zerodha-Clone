import React from "react";
import PrimaryButton from "../component/PrimaryButton";

const OpenAccount = () => {
  return (
    <div className="container text-center pb-5 ">
      <div className="  ">
        <h2 className="fs-1 mt-5 mb-4">Open a Zerodha account</h2>
        <p className="mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <PrimaryButton name="Sign up for free" />
      </div>
    </div>
  );
};

export default OpenAccount;

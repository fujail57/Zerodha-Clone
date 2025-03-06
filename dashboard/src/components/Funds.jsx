import React from "react";
import PrimaryButton from "./utilComp/PrimaryButton";

const Funds = () => {
  return (
    <div>
      {/* top section */}
      <section className="d-flex my-5 justify-content-end gap-3 align-items-center">
        <p>Instant, zero cost fund transfer with UPI </p>
        <PrimaryButton btnName="Add funds" />
        <PrimaryButton btnName="Withdraw" />
      </section>
      {/*  table section */}
      <section className="p-5">
        <div>
          <h4>Equity</h4>
        </div>
        <div style={{ maxWidth: "30vw" }} className="border p-3">
          <div className="d-flex align-items-center justify-content-between">
            <p>Available margin</p>
            <h4>4043.10</h4>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Used margin</p>
            <h4>3757.40</h4>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Available cash</p>
            <h4>4043.10</h4>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <p>Opening balance</p>
            <p>4043.10</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Opening balance</p>
            <p>3736.40</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Payin</p>
            <p>4043.10</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>SPAN</p>
            <p>00</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Delivery margin</p>
            <p>00</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Exposure</p>
            <p>00</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Options premium</p>
            <p>00</p>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <p>Collateral (Liquid funds)</p>
            <p>00</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Collateral (Equity)</p>
            <p>00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Funds;

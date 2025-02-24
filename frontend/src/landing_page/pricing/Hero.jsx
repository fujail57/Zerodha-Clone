import React from "react";

const Hero = () => {
  return (
    <div
      style={{ marginTop: "100px" }}
      className="container text-center p-5 text-muted"
    >
      <section className="my-5">
        <h1 className="mt-5">Charges</h1>
        <h3 className="">List of all charges and taxes</h3>
      </section>

      <section className="row my-5">
        <div className="col p-5">
          <img src="images/pricing0.svg" alt="pricing 0" />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-5">
          <img src="images/intradayTrades.svg" alt="pricing 0" />
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-5">
          <img src="images/pricing0.svg" alt="pricing 0" />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;

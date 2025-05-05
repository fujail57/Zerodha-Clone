import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SignupFunctionality from "./SignupFunctionality";
import PrimaryButton from "../../component/PrimaryButton";
import "./signup.css";

const Signup = () => {
  return (
    <div className="container p-5 mt-5 ">
      <NavBar />
      <section className="text-center my-5">
        <section className="top-section">
          <h1 className="fs-1">Open a free demat and trading account online</h1>
          <h3 className="my-4 fs-5 text-muted">
            Start investing brokerage free and join a community of 1.5+ crore
            investors and traders
          </h3>
        </section>
        {/* Signup Section */}
        <section className="hero-section row align-items-center my-5 p-5">
          <div className="img-section col">
            <img src="images/signup1.svg" alt="Signup image" />
          </div>
          <div className="signup-section col">
            <SignupFunctionality />
          </div>
        </section>

        <section className="investment-section">
          <div className="my-5">
            <h2>Investment options with Zerodha demat account</h2>
          </div>
          {/* list-item */}
          <div className="px-5 list-item row my-5">
            <div className="d-flex justify-content-center col-6 my-5">
              <div>
                <img src="images/stock1.png" alt="Stocks" />
              </div>
              <div className="text-start mx-4">
                <h3>Stocks</h3>
                <p>Invest in all exchange-listed securities</p>
              </div>
            </div>

            <div className="d-flex justify-content-center col-6  my-5">
              <div>
                <img src="images/mutual-funds.png" alt="Mutual funds" />
              </div>
              <div className="text-start mx-4">
                <h3>Mutual funds</h3>
                <p>Invest in commission-free direct mutual funds</p>
              </div>
            </div>

            <div className="d-flex justify-content-center col-6">
              <div>
                <img src="images/ipo1.png" alt="IPO" />
              </div>
              <div className="text-start mx-4">
                <h3>IPO</h3>
                <p>Apply to the latest IPOs instantly via UPI</p>
              </div>
            </div>

            <div className="d-flex justify-content-center col-6 ">
              <div>
                <img src="images/options1.png" alt="Futures & options" />
              </div>
              <div className="text-start mx-4">
                <h3>Futures & options</h3>
                <p>
                  Hedge and mitigate market risk through simplified F&O trading
                </p>
              </div>
            </div>
          </div>
          <div>
            <PrimaryButton name="Explore Investments" />
          </div>
        </section>

        <section></section>
        <section></section>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;

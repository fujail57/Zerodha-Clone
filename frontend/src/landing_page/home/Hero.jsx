import React from "react";
import PrimaryButton from "../../component/PrimaryButton";

const Hero = () => {
  return (
    <div className="container p-5">
      <div className="text-center pt-5">
        <img
          className="w-75 mx-auto mb-3"
          src="images/homeHero.png"
          alt="Hero Images"
        />
        <h2 className="mt-5 fs-1 pb-3">Invest in everything</h2>
        <p className="fs-4 pb-3">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <PrimaryButton name="Sign up for free" />
      </div>
    </div>
  );
};

export default Hero;

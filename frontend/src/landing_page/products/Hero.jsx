import React from "react";
import LinkButton from "../../component/LinkButton";

const Hero = () => {
  return (
    <div className="container p-5 ">
      <div className="text-center pt-5 border-bottom">
        <h1 className="mt-5 fs-1 pb-3">Zerodha Products</h1>
        <h4 className="fs-4 pb-3 text-muted">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <h5 className="text-muted mb-5">
          Check out our
          <LinkButton name="investment offerings " />
        </h5>
      </div>
    </div>
  );
};

export default Hero;

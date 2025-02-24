import React from "react";
import NavBar from "../NavBar";
import Hero from "./Hero";
import Footer from "../Footer";
import Brokerage from "./Brokerage";
import Charges from "./Charges";

const PricingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Brokerage />
      <Charges />
      <Footer />
    </div>
  );
};

export default PricingPage;

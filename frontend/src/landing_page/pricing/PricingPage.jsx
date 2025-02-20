import React from "react";
import NavBar from "../NavBar";
import Hero from "./Hero";
import Footer from "../Footer";
import Brokerage from "./Brokerage";

const PricingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <PricingPage />
      <Brokerage />
      <Footer />
    </div>
  );
};

export default PricingPage;

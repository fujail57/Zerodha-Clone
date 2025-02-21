import React from "react";
import NavBar from "../NavBar";
import Hero from "./Hero";
import Footer from "../Footer";
import Brokerage from "./Brokerage";
import SemplePage from "../../component/SemplePage";

const PricingPage = () => {
  return (
    <div>
      <NavBar />
      <h2>Pricing Page</h2>
      <SemplePage name="This is Pricing Page"/>
      {/* <Hero /> */}
      {/* <Brokerage /> */}
      <Footer />
    </div>
  );
};

export default PricingPage;

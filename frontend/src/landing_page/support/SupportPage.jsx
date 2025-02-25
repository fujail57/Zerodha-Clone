import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";

const SupportPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <CreateTicket />
      <Footer />
    </div>
  );
};

export default SupportPage;

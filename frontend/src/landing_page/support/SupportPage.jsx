import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SemplePage from "../../component/SemplePage";

const SupportPage = () => {
  return (
    <div>
      <NavBar />
      <h2>SupportPage</h2>
      <SemplePage name="This is Support Page" />
      <Footer />
    </div>
  );
};

export default SupportPage;

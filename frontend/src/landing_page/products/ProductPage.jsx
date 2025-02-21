import React from "react";
import NavBar from "../NavBar";
import SemplePage from "../../component/SemplePage";
import Footer from "../Footer";

const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <h2>ProductPage</h2>
      <SemplePage name="Product Page"/>
      <Footer/>
    </div>
  );
};

export default ProductPage;

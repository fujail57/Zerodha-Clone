import React from "react";
import NavBar from "../NavBar";
import SemplePage from "../../component/SemplePage";
import Footer from "../Footer";
import Hero from "./Hero";
import Universe from "./Universe";
import ProductsLR from "./ProductsLR";

const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductsLR />
      <Universe />
      <Footer />
    </div>
  );
};

export default ProductPage;

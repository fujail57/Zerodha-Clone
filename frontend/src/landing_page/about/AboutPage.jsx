import React from "react";
import NavBar from "../NavBar";
import Hero from "./Hero";
import Team from "./Team";
import Footer from "../Footer";
import SemplePage from "../../component/SemplePage";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <h2>About Page</h2>
      <SemplePage name="This is About Page" />
      {/* <Hero /> */}
      {/* <Team /> */}
      <Footer />
    </div>
  );
};

export default AboutPage;

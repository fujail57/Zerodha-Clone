import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SemplePage from "../../component/SemplePage";

const Signup = () => {
  return (
    <div>
      <NavBar />
      <h2>Signup</h2>
      <SemplePage name="This is Signup Page" />
      <Footer />
    </div>
  );
};

export default Signup;

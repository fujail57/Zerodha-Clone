import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SemplePage from "../../component/SemplePage";
import SignupFunctionality from "./SignupFunctionality";
import LoginFunctionality from "../Login/LoginPage";

const Signup = () => {
  return (
    <div className="container p-5 mt-5 ">
      <NavBar />
      <h1>Open a free demat and trading account online</h1>
      <h3>
        Start investing brokerage free and join a community of 1.5+ crore
        investors and traders
      </h3>
      {/* <SemplePage name="This is Signup Page" /> */}
      <SignupFunctionality />
      <h2>Investment options with Zerodha demat account</h2>

      {/* login test setup */}
      <LoginFunctionality />
      <Footer />
    </div>
  );
};

export default Signup;

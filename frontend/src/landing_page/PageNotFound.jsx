import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PageNotFound = () => {
  return (
    <div>
      <NavBar />
      <h2 style={{ fontSize: "100px" }} className="bg-primary py-5">
        PageNotFound
      </h2>
      <Footer />
    </div>
  );
};

export default PageNotFound;

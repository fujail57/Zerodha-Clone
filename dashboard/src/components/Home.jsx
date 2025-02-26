import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Dashboard />
      {/* <Outlet /> */}
    </div>
  );
};

export default Home;

import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import { GeneralContextProvider } from "./GeneralContext";

const Home = () => {
  return (
    <div>
      <GeneralContextProvider>
        <TopBar />
        <Dashboard />
      </GeneralContextProvider>
    </div>
  );
};

export default Home;

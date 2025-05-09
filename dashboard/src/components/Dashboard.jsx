import React from "react";
import WatchList from "./WatchList";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ height: "100vh" }} className="container-fluid row text-muted">
      <section className="col-4 bg-body-secondary">
        <WatchList />
      </section>
      {/* right sides routes */}
      <section className="col-8 bg-light">
        {/* Outlet used to render children components */}
        <Outlet />
      </section>
    </div>
  );
};

export default Dashboard;

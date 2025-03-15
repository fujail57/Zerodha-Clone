import React from "react";
import WatchList from "./WatchList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Summary from "./Summary";
import Funds from "./Funds";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Position from "./Position";
import Apps from "./Apps";
import PageNotFound from "./PageNotFound";
import GeneralContextProvider from "./GeneralContext";

// routes
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Summary />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/holdings",
    element: <Holdings />,
  },
  {
    path: "/positions",
    element: <Position />,
  },
  {
    path: "/funds",
    element: <Funds />,
  },
  {
    path: "/apps",
    element: <Apps />,
  },
  {
    path: "*",
    element: <PageNotFound />, // Handle Page not found
  },
]);

const Dashboard = () => {
  return (
    <div style={{ height: "100vh" }} className="container-fluid row text-muted">
      <section className="col-4 bg-body-secondary">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      </section>
      {/* right sides routes */}
      <section className="col-8 bg-light">
        <RouterProvider router={routers} />
      </section>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Summary from "./Summary";
import Summary from "./components/Summary";
import Funds from "./components/Funds";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Position from "./components/Position";
import Apps from "./components/Apps";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";

// routes

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Summary /> },
      { path: "/orders", element: <Orders /> },
      { path: "/holdings", element: <Holdings /> },
      { path: "/positions", element: <Position /> },
      { path: "/funds", element: <Funds /> },
      { path: "/apps", element: <Apps /> },
      { path: "*", element: <PageNotFound /> }, // Handle Page not found
    ],
  },
]);

export default routers;

// Import routers in App.js

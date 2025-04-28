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
import ProtectedRoute from "./components/utils/ProtectedRoute";

// routes

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Summary />
          </ProtectedRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "/holdings",
        element: (
          <ProtectedRoute>
            <Holdings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/positions",
        element: (
          <ProtectedRoute>
            <Position />
          </ProtectedRoute>
        ),
      },
      {
        path: "/funds",
        element: (
          <ProtectedRoute>
            <Funds />
          </ProtectedRoute>
        ),
      },
      {
        path: "/apps",
        element: (
          <ProtectedRoute>
            <Apps />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <PageNotFound /> }, // Handle Page not found
    ],
  },
]);

export default routers;

// Import routers in App.js

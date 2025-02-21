import React from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";
import PageNotFound from "./landing_page/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/support",
    element: <SupportPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const UserRoutes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default UserRoutes;

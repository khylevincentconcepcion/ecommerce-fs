import React from "react";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout";
import CreateProductPage from "./pages/CreateProductPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "product/:slug",
        element: <ProductPage />,
      },
      {
        path: "product/create",
        element: <CreateProductPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <ToastContainer position="bottom-center" limit={1} autoClose={1500} />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

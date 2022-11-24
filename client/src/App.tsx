import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/:slug" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

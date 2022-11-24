import React from "react";
import Product from "../../features/Product";
import { useGetAllProductsQuery } from "../../features/Product/index.slice";

const HomePage = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetAllProductsQuery();

  return (
    <>
      {isError ? (
        <p>There is an error</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : isSuccess ? (
        products.map((product) => (
          <Product product={product} key={product._id} />
        ))
      ) : null}
    </>
  );
};

export default HomePage;

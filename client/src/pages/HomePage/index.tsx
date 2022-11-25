import React from "react";
import Product from "../../features/Product";
import { useGetAllProductsQuery } from "../../features/Product/index.slice";
import { Skeleton } from "@mui/material";

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
        <div className="container mx-auto p-6 h-screen grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {[...Array(6).keys()].map((load) => (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="60%"
              key={load}
            />
          ))}
        </div>
      ) : isSuccess ? (
        <div className="container mx-auto p-6 grid justify-center gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default HomePage;

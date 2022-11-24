import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductSlugQuery } from "../../features/Product/index.slice";

const ProductPage = () => {
  const { slug } = useParams() as { slug: string };
  const {
    data: product,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetProductSlugQuery(slug);
  return (
    <>
      {isError ? (
        <p>There is an error</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : isSuccess ? (
        <div>
          {product.name}
          {product.price}
        </div>
      ) : null}
    </>
  );
};

export default ProductPage;

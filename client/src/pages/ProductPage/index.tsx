import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductSlugQuery } from "../../features/Product/index.slice";

const productMainImg =
  "https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const productsImg = [
  "https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1007017/pexels-photo-1007017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/10370348/pexels-photo-10370348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const ProductPage = () => {
  const { slug } = useParams() as { slug: string };
  const {
    data: product,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetProductSlugQuery(slug);

  const [currentImg, setCurrentImg] = useState<string>(productMainImg);

  return (
    <>
      {isError ? (
        <p>There is an error</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : isSuccess ? (
        <div className="grid grid-cols-3 container mx-auto space-x-6">
          <div>
            <img src={currentImg} alt="Image from Pexels" />
          </div>
          <div className="space-y-6">
            <ul className="p-6 border rounded">
              <li>
                <h2 className="text-lg font-bold">{product.name}</h2>
              </li>
              <li>{product.price}</li>
              <li>{product.stocks === 0 ? "Out of Stocks" : product.stocks}</li>
              <li>{product.stocks === 0 ? "Not Available" : product.price}</li>
              {product.stocks > 0 ? (
                <li>
                  <button
                    disabled={product.stocks === 0}
                    className="bg-primary text-white px-6 py-4 rounded"
                  >
                    Add to Cart
                  </button>
                </li>
              ) : null}
            </ul>
            <div className="grid grid-cols-3 rounded overflow-hidden">
              {productsImg.map((img) => (
                <img
                  src={img}
                  alt="Image from Pexels"
                  className="cursor-pointer"
                  onClick={() => setCurrentImg(img)}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="p-6 border rounded">
              <h2 className="text-lg font-bold">Feedback</h2>
              <form action="">
                <div className="flex space-x-6 items-center justify-between border-b p-4">
                  <label>Ratings</label>
                  <select className="px-6 py-4 bg-white border rounded">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="border-b p-4 flex flex-col space-y-6">
                  <label>Leave a message</label>
                  <textarea
                    placeholder="Your comments"
                    className="border focus:outline-none rounded p-6"
                  />
                </div>
                <div className="p-6 grid">
                  <button
                    type="button"
                    className="bg-primary text-white px-6 py-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductPage;

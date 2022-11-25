import { FC } from "react";
import { Link } from "react-router-dom";
import { Props } from "./index.type";

const Product: FC<Props> = ({ product }) => {
  return (
    <div className="w-full bg-white rouded-lg hover:shadow-md p-6 border">
      <img src={product.image} alt={product.name} />
      <Link to={`/${product.slug}`}>{product.name}</Link>
      <div className="flex items-center mt-3 mb-3">ratings</div>
      <h4 className="text-3xl font-bold text-gray-900">P{product.price}</h4>
      <button className="text-white bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

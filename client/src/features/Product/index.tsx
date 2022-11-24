import { FC } from "react";
import { Link } from "react-router-dom";
import { Props } from "./index.type";

const Product: FC<Props> = ({ product }) => {
  return <Link to={`/${product.slug}`}>{product.name}</Link>;
};

export default Product;

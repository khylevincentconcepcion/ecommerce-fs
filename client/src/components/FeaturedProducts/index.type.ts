import { IProduct } from "../../features/Product/index.type";

export interface Props {
  name: "Featured" | "Trending";
  products: IProduct[];
}

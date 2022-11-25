interface ProductReviews {
  firstName: string;
  lastName: string;
  comment: string;
  rating: string;
  created_at: string;
  updated_at: string;
  __v: number;
}

export interface IProduct {
  id: string;
  _id: string;
  name: string;
  slug: string;
  image: string;
  category: string;
  price: number;
  stocks: number;
  description: string;
  currentSold: number;
  totalSold: number;
  ratings: number;
  totalReviews: number;
  reviews: ProductReviews[];
  created_at: string;
  updated_at: string;
  __v: number;
}

export interface Props {
  product: IProduct;
}

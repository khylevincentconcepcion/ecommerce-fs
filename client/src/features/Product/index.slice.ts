import { apiSlice } from "../../app/api/api.slice";
import { IProduct } from "./index.type";

export const productApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => "/api/products",
      providesTags: (result) =>
        result
          ? [
              { type: "Product", id: "LIST" },
              ...result.map(({ id }) => ({ type: "Product" as const, id })),
            ]
          : [{ type: "Product", id: "LIST" }],
      transformResponse: (response: IProduct[]) => response,
    }),
    getProductSlug: builder.query<IProduct, string>({
      query: (slug) => `/api/products/${slug}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
      transformResponse: (response: IProduct) => response,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductSlugQuery } =
  productApiSLice;

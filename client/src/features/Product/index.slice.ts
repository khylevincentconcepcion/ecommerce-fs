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
    getProductId: builder.query<IProduct, string>({
      query: (id) => `/api/products/${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
      transformResponse: (response: IProduct) => response,
    }),
    createProduct: builder.mutation<IProduct, Partial<IProduct>>({
      query: (post) => ({
        url: "/api/products",
        method: "POST",
        body: post,
        credentials: "include",
      }),
      invalidatesTags: [{ type: "Product", id: "List" }],
      transformResponse: (response: IProduct) => response,
    }),
    updateProduct: builder.mutation<
      IProduct,
      { id: string; post: Partial<IProduct> }
    >({
      query: ({ id, post }) => ({
        url: `/api/products/${id}`,
        method: "PATCH",
        body: post,
        credentials: "include",
      }),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Product", id },
              { type: "Product", id: "List" },
            ]
          : [{ type: "Product", id: "List" }],
      transformResponse: (response: IProduct) => response,
    }),
    deleteProduct: builder.mutation<IProduct, string>({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: [{ type: "Product", id: "List" }],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductSlugQuery,
  useGetProductIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSLice;

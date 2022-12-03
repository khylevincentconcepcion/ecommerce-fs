import { useEffect, FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProductMutation } from "../../features/Product/index.slice";
import { toast } from "react-toastify";

const createProductSchema = z.object({
  name: z.string().min(1, {
    message: "Name is Required",
  }),
  slug: z.string().min(1, {
    message: "Slug is Required",
  }),
  category: z.string().min(1, {
    message: "Slug is Required",
  }),
  price: z.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  }),
  stocks: z.number({
    required_error: "Stocks is required",
    invalid_type_error: "Stocks must be a number",
  }),
});

export type ICreateProduct = z.TypeOf<typeof createProductSchema>;

const CreateProductPage = () => {
  const [createProduct, { isLoading, isError, error, isSuccess }] =
    useCreateProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductSchema),
  });

  const submitHandler: SubmitHandler<ICreateProduct> = (data) => {
    createProduct(data);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col items-center space-y-6">
      <h2 className="text-xl font-bold">Create Product</h2>
      <form
        className="w-[400px] border rounded p-6 space-y-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex flex-col">
          <label>Name</label>
          <input
            type="text"
            className="px-4 py-2 border rounded"
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>
        <div className="flex flex-col">
          <label>Slug</label>
          <input
            type="text"
            className="px-4 py-2 border rounded"
            {...register("slug")}
          />
          {errors.slug?.message && <p>{errors.slug?.message}</p>}
        </div>
        <div className="flex flex-col">
          <label>Category</label>
          <input
            type="text"
            className="px-4 py-2 border rounded"
            {...register("category")}
          />
          {errors.category?.message && <p>{errors.category?.message}</p>}
        </div>
        <div className="flex flex-col">
          <label>Price</label>
          <input
            type="text"
            className="px-4 py-2 border rounded"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price?.message && <p>{errors.price?.message}</p>}
        </div>
        <div className="flex flex-col">
          <label>Stocks</label>
          <input
            type="text"
            className="px-4 py-2 border rounded"
            {...register("stocks", { valueAsNumber: true })}
          />
          {errors.stocks?.message && <p>{errors.stocks?.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-primary px-6 py-4 rounded text-white w-full"
        >
          {isLoading ? "loading" : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;

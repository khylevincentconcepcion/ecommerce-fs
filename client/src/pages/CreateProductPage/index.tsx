const CreateProductPage = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center space-y-6">
      <h2 className="text-xl font-bold">Create Product</h2>
      <form className="w-[400px] border rounded p-6 space-y-6">
        <div className="flex flex-col">
          <label>Name</label>
          <input type="text" className="px-4 py-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label>Slug</label>
          <input type="text" className="px-4 py-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label>Categry</label>
          <input type="text" className="px-4 py-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label>Price</label>
          <input type="text" className="px-4 py-2 border rounded" />
        </div>
        <div className="flex flex-col">
          <label>Stocks</label>
          <input type="text" className="px-4 py-2 border rounded" />
        </div>
        <button
          type="button"
          className="bg-primary px-6 py-4 rounded text-white w-full"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;

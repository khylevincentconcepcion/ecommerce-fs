import React from "react";

const Category = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 py-6 h-[300px]">
      <div className="border"></div>
      <div className="border row-span-2"></div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border"></div>
      <div className="border col-span-2"></div>
    </div>
  );
};

export default Category;

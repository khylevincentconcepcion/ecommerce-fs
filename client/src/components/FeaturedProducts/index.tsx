import { Link } from "react-router-dom";
import { Props } from "./index.type";

const productsImg = [
  "https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1007017/pexels-photo-1007017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/10370348/pexels-photo-10370348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const FeaturedProducts = ({ name, products }: Props) => {
  return (
    <div className="py-6">
      <div className="flex mb-6">
        <h2 className="text-xl font-bold flex-[2]">{name} Products</h2>
        <p className="flex-[3]">
          {name === "Featured"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet voluptas natus delectus quo, nisi consequatur quod blanditiis sunt voluptatem voluptates fuga corrupti et dolorum dignissimos mollitia repellendus iure laudantium cumque dolorem veniam? Earum eligendi dolor tenetur quibusdam optio eius atque voluptatem? Voluptatum ducimus qui accusamus provident libero, iste aliquam."
            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic? Pariatur magni officiis sint nihil blanditiis ducimus quidem nostrum aut vero, quam beatae hic, illum cupiditate provident placeat ullam reiciendis. Non repudiandae nostrum eligendi minus nam quibusdam. Dolorem, nisi eaque. Accusamus suscipit quisquam ipsam. Sunt?"}
        </p>
      </div>
      {name === "Featured" ? (
        <div className=" grid justify-center gap-4 grid-cols-2 sm:grid-cols-4">
          {products.slice(0, 4).map((product, i) => (
            <Link
              to={`/product/${product.slug}`}
              key={product._id}
              className="border relative"
            >
              <span className="absolute top-3 left-0 w-24 h-8 flex justify-center items-center bg-primary text-white">
                New Arrival
              </span>
              <img
                src={productsImg[i]}
                alt="Image from Pexels"
                className="object-cover w-full"
              />
              <p>{product.name}</p>
              <p className="line-through">120</p>
              <p>{product.price}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className=" grid justify-center gap-4 grid-cols-2 sm:grid-cols-4">
          {products.slice(0, 4).map((product, i) => (
            <Link
              to={`/product/${product.slug}`}
              key={product._id}
              className="border relative"
            >
              <img
                src={productsImg[i]}
                alt="Image from Pexels"
                className="object-cover w-full"
              />
              <p>{product.name}</p>
              <p className="line-through">120</p>
              <p>{product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;

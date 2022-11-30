import { Link } from "react-router-dom";

const categoryImage = [
  "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/346744/pexels-photo-346744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Category = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 py-6">
      <div className="border relative">
        <img
          src={categoryImage[0]}
          alt="Image from Pexels"
          className="object-cover h-full"
        />
        <Link
          to="/"
          className="p-4 bg-white transition-bg absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] inline-block rounded hover:bg-primary hover:text-white"
        >
          SALE
        </Link>
      </div>
      <div className="border row-span-2 relative">
        <img
          src={categoryImage[1]}
          alt="Image from Pexels"
          className="object-cover h-full"
        />
        <Link
          to="/"
          className="p-4 bg-white transition-bg absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] inline-block rounded hover:bg-primary hover:text-white"
        >
          NEW SEASON
        </Link>
      </div>
      <div className="border relative">
        <img
          src={categoryImage[2]}
          alt="Image from Pexels"
          className="object-cover h-full"
        />
        <Link
          to="/"
          className="p-4 bg-white transition-bg absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] inline-block rounded hover:bg-primary hover:text-white"
        >
          MEN
        </Link>
      </div>
      <div className="border relative">
        <img
          src={categoryImage[3]}
          alt="Image from Pexels"
          className="object-cover h-full"
        />
        <Link
          to="/"
          className="p-4 bg-white transition-bg absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] inline-block rounded hover:bg-primary hover:text-white"
        >
          ACCESORIES
        </Link>
      </div>
      <div className="border relative">
        <img
          src={categoryImage[4]}
          alt="Image from Pexels"
          className="object-cover h-full"
        />
        <Link
          to="/"
          className="p-4 bg-white transition-bg absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] inline-block rounded hover:bg-primary hover:text-white"
        >
          WOMEN
        </Link>
      </div>
      <div className="border col-span-2 relative">
        <img
          src={categoryImage[5]}
          alt="Image from Pexels"
          className="object-cover h-full"
        />
        <Link
          to="/"
          className="p-4 bg-white transition-bg absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] inline-block rounded hover:bg-primary hover:text-white"
        >
          SHOES
        </Link>
      </div>
    </div>
  );
};

export default Category;

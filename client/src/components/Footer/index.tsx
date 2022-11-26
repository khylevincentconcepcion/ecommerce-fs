import { Link } from "react-router-dom";

const categoriesItems = [
  {
    name: "Women",
    to: "/",
  },
  { name: "Men", to: "/" },
  { name: "Shoes", to: "/" },
  { name: "Accesories", to: "/" },
  { name: "New Arrivals", to: "/" },
];
const linksItems = [
  { name: "FAQ", to: "/" },
  { name: "Pages", to: "/" },
  { name: "Stores", to: "/" },
  { name: "Compare", to: "/" },
  { name: "Cookies", to: "/" },
];

const Footer = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-4 gap-6">
        <div className="space-y-4">
          <h4 className="font-bold">Categories</h4>
          <ul className="flex flex-col space-y-2">
            {categoriesItems.map((item) => (
              <li key={item.name}>
                <Link to={item.to} className="text-sm">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">Links</h4>
          <ul className="flex flex-col space-y-2">
            {linksItems.map((item) => (
              <li key={item.name}>
                <Link to={item.to} className="text-sm">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">About</h4>
          <p className="text-sm text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fuga
            sit eaque voluptate dolorem autem inventore animi tempore illo
            cupiditate similique accusantium culpa aliquam, vero iste, earum
            sapiente accusamus voluptatum.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">Contact</h4>
          <p className="text-sm text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fugit
            accusamus dolorem iure officiis aut vel expedita facere sequi
            tempore! Commodi quisquam culpa ad quo suscipit explicabo at
            asperiores ipsam totam alias, exercitationem nemo temporibus facilis
            fuga inventore beatae rerum?
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <Link to="/">ecommerce</Link>
        <p className="text-xs">© Copyright 2023. All Rights Reserved</p>
        <p>Payment Method</p>
      </div>
    </div>
  );
};

export default Footer;

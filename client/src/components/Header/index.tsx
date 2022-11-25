import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "../SearchBar";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Contact Us",
    link: "/",
  },
];

const Header = () => {
  return (
    <div className="container flex justify-between mx-auto p-6">
      <Link to="/" className="text-primary">
        ecommerce
      </Link>
      <ul className="hidden md:flex md:space-x-6">
        {navItems.map((item, i) => (
          <li key={i}>
            <Link to={item.link} className="text-primary">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex space-x-6">
        <SearchBar />
        <button>
          <ShoppingCartIcon />{" "}
          <span className="hidden md:inline-block">Cart</span>
        </button>
        <button className="hidden md:block">My Account</button>
      </div>
    </div>
  );
};

export default Header;

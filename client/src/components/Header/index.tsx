import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchBar from "../SearchBar";

const navLeftItems = [
  {
    name: "Men",
    link: "/",
  },
  {
    name: "Women",
    link: "/",
  },
  {
    name: "Children",
    link: "/",
  },
  {
    name: "Accesories",
    link: "/",
  },
];

const navRightItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
  {
    name: "Stores",
    link: "/",
  },
];

const Header = () => {
  return (
    <div className="container flex items-center justify-between mx-auto p-6">
      <div className="hidden md:flex md:space-x-6">
        <button>EN</button>
        <button>PHP</button>
        <ul className="hidden md:flex md:space-x-6">
          {navLeftItems.map((item, i) => (
            <li key={i}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/">ecommerce</Link>
      <div className="flex items-center space-x-6">
        <ul className="hidden md:flex md:space-x-6 md:items-center">
          {navRightItems.map((item, i) => (
            <li key={i}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <SearchBar />
        <button className="hidden md:block">
          <FavoriteBorderOutlinedIcon />
        </button>
        <button className="hidden md:block">
          <PermIdentityOutlinedIcon />
        </button>
        <button className="relative">
          <ShoppingCartOutlinedIcon />
          <span className="flex items-center justify-center text-white absolute top-[-10px] right-[-1rem] text-sm bg-primary rounded-full h-6 w-6">
            0
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;

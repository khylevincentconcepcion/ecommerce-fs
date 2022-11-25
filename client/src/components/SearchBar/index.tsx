import { FormEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <form className="flex items-center border rounded-sm">
      <input
        name="search"
        id="search"
        placeholder="Search..."
        className="w-20 h-8 p-2 transition-width ease-in-out duration-150 focus:w-28 focus:outline-none md:w-32 md:focus:w-40"
      />
      <button>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;

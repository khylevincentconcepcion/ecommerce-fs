import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto bg-primary w-full py-4 px-12 flex items-center justify-between">
      <p>BE IN TOUCH WITH US:</p>
      <form className="flex">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email..."
          className="p-2 rounded-l focus:outline-none"
        />
        <button type="button" className="bg-black text-white p-2 rounded-r">
          JOIN US
        </button>
      </form>
      <div className="flex space-x-4">
        <Link to="/">
          <FacebookIcon />
        </Link>
        <Link to="/">
          <InstagramIcon />
        </Link>
        <Link to="/">
          <TwitterIcon />
        </Link>
        <Link to="/">
          <GoogleIcon />
        </Link>
        <Link to="/">
          <PinterestIcon />
        </Link>
      </div>
    </div>
  );
};

export default Contact;

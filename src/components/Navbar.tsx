import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-6 py-4 fixed top-0 bg-white/70 dark:bg-black/70 backdrop-blur-md">
      <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
        My Portfolio
      </Link>
      <div className="flex space-x-4">
        <Link
          to="/blog"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          Blog
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

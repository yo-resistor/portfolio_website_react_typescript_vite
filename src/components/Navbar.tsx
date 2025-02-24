import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        My Portfolio
      </h1>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;

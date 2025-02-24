import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Home Link */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          My Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" path={location.pathname} label="About" />
          <NavLink
            to="/experience"
            path={location.pathname}
            label="Experience"
          />
          <NavLink to="/projects" path={location.pathname} label="Projects" />
          <NavLink to="/blog" path={location.pathname} label="Blog" />
          <NavLink to="/contact" path={location.pathname} label="Contact" />
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white dark:bg-black">
          <NavLink to="/" path={location.pathname} label="About" />
          <NavLink
            to="/experience"
            path={location.pathname}
            label="Experience"
          />
          <NavLink to="/projects" path={location.pathname} label="Projects" />
          <NavLink to="/blog" path={location.pathname} label="Blog" />
          <NavLink to="/contact" path={location.pathname} label="Contact" />
          <DarkModeToggle />
        </div>
      )}
    </nav>
  );
};

/* Component for Navigation Links with Active State */
const NavLink = ({
  to,
  path,
  label,
}: {
  to: string;
  path: string;
  label: string;
}) => (
  <Link
    to={to}
    className={`text-lg font-medium ${
      path === to
        ? "text-blue-500 dark:text-blue-400 underline"
        : "text-gray-900 dark:text-white hover:text-blue-500"
    }`}
  >
    {label}
  </Link>
);

export default Navbar;

// TODO: Blur the background when the navigation bar is toggled

// Navigation bar
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import logoDarkBG from "../assets/logo_dark_bg.svg";
import logoWhiteBG from "../assets/logo_white_bg.svg";

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-dark-bg-3 backdrop-blur-md shadow-md z-50 font-mono">
      <div className="mx-auto flex items-center justify-between py-2 px-4 md:px-14 sm:px-10">
        {/* Logo / Home Link */}
        <Link to="/">
          <img
            src={logoWhiteBG}
            alt="Logo White Background"
            className="block dark:hidden h-10 transition-opacity duration-300"
          />
          <img
            src={logoDarkBG}
            alt="Logo Dark Background"
            className="dark:block hidden h-10 transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center justify-between space-x-6">
          <NavLink to="/about" path={location.pathname} label="About" />
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
          className="text-2xl pb-1.5 sm:hidden text-gray-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 py-4 bg-white dark:bg-black">
          <NavLink to="/about" path={location.pathname} label="About" />
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
    className={`text-xs font-medium ${
      path === to
        ? "text-blue-500 dark:text-blue-300 underline"
        : "text-gray-900 dark:text-white hover:text-blue-500"
    }`}
  >
    {label}
  </Link>
);

export default Navbar;

// TODO: Blur the background when the navigation bar is toggled
// DONE: Yay!;
// TODO: Logo position and other text position alignment: inspiration from Steven Tey website.

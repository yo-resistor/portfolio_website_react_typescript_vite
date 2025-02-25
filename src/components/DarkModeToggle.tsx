import { useEffect, useState } from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-4 h-4 flex items-center justify-center "
    >
      <img
        src={darkMode ? moon : sun}
        alt={darkMode ? "Dark Mode" : "Light Mode"}
        className="w-4 h-4"
      />
    </button>
  );
};

export default DarkModeToggle;

// TODO: https://www.freepik.com/premium-vector/day-night-switch-simple-dark-mode-switch-icon-concept-gadget-interface-switch-day-night-mode-ui-symbol-day-night-mode-vector-off-switch-light-dark-buttons_17403120.htm Update the toggle button for the light and dark mode

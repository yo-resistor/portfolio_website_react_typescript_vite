import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      {isDark ? "🌙" : "☀️"}
      // TODO: Improve the quality of night mode and light mode. Maybe the
      tutorial website in Notion?
    </button>
  );
}

export default DarkModeToggle;

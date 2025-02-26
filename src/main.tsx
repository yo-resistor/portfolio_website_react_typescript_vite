import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Blog from "./components/Blog.tsx";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import EmailSide from "./components/EmailSide.tsx";
import SocialSide from "./components/SocialSide.tsx";

// Apply dark mode based on localStorage
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <EmailSide />
      <SocialSide />
    </BrowserRouter>
  </StrictMode>
);

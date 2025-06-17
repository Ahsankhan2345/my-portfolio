import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Projects from "./assets/pages/Projects";
import Contact from "./assets/pages/Contact";
import Footer from "./assets/components/Footer";
import ThemeToggle from "./assets/components/ThemeToggle";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 min-h-screen">
      <Router>

        {/* ✅ Fixed Theme Toggle Button */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

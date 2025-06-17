import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // ✅ Import toggle

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-black text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300"
        >
          Ahsan Khan
        </Link>

        {/* Navigation Links + Toggle */}
        <div className="flex items-center space-x-6">
          <div className="space-x-6 hidden md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* ✅ Theme Toggle Button */}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

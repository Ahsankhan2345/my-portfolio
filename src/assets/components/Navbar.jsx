import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ✅ Detect screen size to switch between NavLink and <a>
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const paths = ["/", "/about", "/projects", "/contact"];
  const ids = ["home", "about", "projects", "contact"];
  const labels = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300"
          onClick={closeMenu}
        >
          Ahsan Khan
        </Link>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          {paths.map((path, index) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive ? "text-blue-400" : "hover:text-blue-400"
                }`
              }
            >
              {labels[index]}
            </NavLink>
          ))}
        </div>

        {/* Hamburger (Mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          {ids.map((id, index) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="block py-2 transition duration-300 hover:text-blue-400"
            >
              {labels[index]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

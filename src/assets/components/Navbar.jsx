import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/Services" },
  ];

  return (
    <div className="relative w-full z-50">

      {/* Transparent Navbar */}
      <nav
        className={`w-full max-w-6xl mx-auto transition-all duration-300
          sticky top-0
          bg-transparent
          rounded-full px-8 py-3 border border-white/20
        `}
      >
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="text-xl font-semibold text-white tracking-wide">
            Ahsan Khan.
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative group text-sm font-semibold transition-all
                  ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500"
                      : "text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-blue-500"
                  }`
                }
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}

            {/* LET’S CHAT */}
            <Link
              to="/contact"
              className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              Let’s chat
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="md:hidden pt-4 bg-transparent rounded-xl p-6 space-y-4 border border-white/20"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white text-lg font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-blue-500 transition"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-white text-black font-semibold px-6 py-2 rounded-full"
              >
                Let’s chat
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Rocket, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Contact page wali image ka path yahan add karein
import profilePic from "/ahsan-profile1.png"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-4 px-4 md:px-10">
      <nav
        className={`w-full max-w-6xl mx-auto transition-all duration-500 ease-out border rounded-full px-6 py-2 flex items-center justify-between
          ${scrolled 
            ? "bg-[#0a0a0a]/90 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] py-1.5" 
            : "bg-white/5 backdrop-blur-md border-white/5"
          }
        `}
      >
        {/* LOGO SECTION - Profile Picture instead of AK */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Animated Glow Border */}
            <div className="absolute -inset-0.5 bg-emerald-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
            
            {/* Image Container */}
            <div className="relative w-10 h-10 rounded-full border-2 border-emerald-500 overflow-hidden transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <img 
                src={profilePic} 
                alt="Ahsan Khan" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* AI/Online Notification Dot */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#0a0a0a] rounded-full flex items-center justify-center">
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
            </span>
          </div>

          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-black text-white tracking-tighter uppercase leading-tight group-hover:text-emerald-400 transition-colors">
                Ahsan Khan
            </span>
            <div className="flex items-center gap-1.5">
                <span className="text-[8px] font-black text-emerald-500 uppercase tracking-[0.3em] leading-tight">
                    MERN & AI Architect
                </span>
                <Sparkles size={8} className="text-emerald-300 animate-pulse" />
            </div>
          </div>
        </Link>

        {/* CENTER: DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 py-2
                ${isActive ? "text-emerald-500" : "text-slate-400 hover:text-white"}`
              }
            >
              {link.name}
              <NavLink 
                to={link.path}
                className={({ isActive }) => 
                  `absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-emerald-500 rounded-full transition-all duration-500
                  ${isActive ? "w-1.5 opacity-100" : "w-0 opacity-0"}`
                }
              />
            </NavLink>
          ))}
        </div>

        {/* RIGHT: CTA BUTTON */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:flex group relative px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] active:scale-95 items-center gap-2"
          >
            <Rocket size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <span>Consult</span>
          </Link>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-emerald-500 border border-white/10" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-4 right-4 mt-4 md:hidden"
            >
              <div className="bg-[#0a0a0a] border border-white/10 backdrop-blur-3xl p-8 rounded-[2.5rem] shadow-2xl space-y-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => 
                      `block text-sm font-black uppercase tracking-[0.3em] transition-colors
                      ${isActive ? "text-emerald-500" : "text-slate-500"}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center bg-emerald-500 text-black font-black text-[10px] uppercase tracking-[0.3em] py-4 rounded-2xl"
                >
                  MERN + AI Solutions
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
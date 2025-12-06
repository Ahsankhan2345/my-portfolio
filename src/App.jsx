import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./assets/components/Navbar.jsx";
import Footer from "./assets/components/Footer.jsx";
import Home from "./assets/pages/Home.jsx";
import About from "./assets/pages/About.jsx";
import Projects from "./assets/pages/Projects.jsx";
import Contact from "./assets/pages/Contact.jsx";

import Services from "./assets/pages/Services.jsx";

function App() {
  
  useEffect(() => {
    const handleRouteChange = () => window.scrollTo(0, 0);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        {/* 🔥 Global Background — YE HAR PAGE PAR DIKHE GA */}
        <div className="relative min-h-screen overflow-hidden">

          {/* 🔥 Background Video or Image */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src="/videos/bg-about1.mp4" type="video/mp4" />
          </video>

          {/* Overlay (optional for better text visibility) */}
          <div className="absolute inset-0 bg-black/40 -z-10"></div>

          {/* 🔥 Transparent Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>

          {/* 🔥 Transparent Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

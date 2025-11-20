import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ElectricBorder from "./ElectricBorder";
import { useNavigate } from "react-router-dom";   // ✅ FIXED

export default function HeroSection() {

  const navigate = useNavigate();  // ✅ FIXED

  // Safe navigation on deploy — NO 404 error
  const goToProjects = () => {
    navigate("/projects");  // ✅ FIXED
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white px-6 lg:px-20 pt-0 pb-20">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>

      {/* Floating Lights */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full animate-pulse z-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600/30 blur-3xl rounded-full animate-pulse z-20"></div>

      {/* CONTENT */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-16 z-30">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-[100px] md:mt-[120px]"
        >
          <span className="text-lg tracking-wider">PORTFOLIO.</span>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mt-4">
            I Build Modern
            <span className="text-purple-400"> Web Applications </span>
            For Your Business
          </h1>

          <p className="text-gray-300 mt-5 text-lg">
            I'm <span className="text-white">Ahsan Khan</span>, a Front-End Developer creating fast,
            responsive & modern websites using React, Tailwind CSS & Firebase.
          </p>

          {/* BUTTON */}
          <div className="mt-10">
            <motion.button
              onClick={goToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl text-white font-semibold text-lg transition-all duration-300"
            >
              Explore My Work
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl shadow-purple-500/20">
            <img
              src="/ahsan-profile.png"
              alt="Ahsan Khan"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 relative z-30">

        {/* AI Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <ElectricBorder
            color="#cda6dcff"
            glowColor="#D8B4FE"
            speed={2}
            thickness={4}
            className="rounded-3xl"
          >
            <h3 className="text-2xl font-semibold text-white">AI Solutions</h3>
            <p className="text-gray-300 mt-2">
              AI-driven apps, automation systems & smart digital solutions using modern AI tools.
            </p>
          </ElectricBorder>
        </motion.div>

        {/* Web Dev Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <ElectricBorder
            color="#3B82F6"
            glowColor="#60A5FA"
            speed={1.8}
            thickness={4}
            className="rounded-3xl"
          >
            <h3 className="text-2xl font-semibold text-white">Web Development</h3>
            <p className="text-gray-300 mt-2">
              High-performance, responsive web applications using React & Tailwind CSS.
            </p>
          </ElectricBorder>
        </motion.div>
      </div>

    </div>
  );
}

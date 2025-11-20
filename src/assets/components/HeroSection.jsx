import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react"; 

// --- FRAMER MOTION VARIANTS (Retained) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function HeroSection() {
  const navigate = useNavigate();
  const goToProjects = () => {
    navigate("/projects");
  };

  // Testimonial logic aur imports hata diye gaye hain

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white px-0 lg:px-0 pt-0 pb-20">
      
      {/* Page Metadata for SEO */}
      <Helmet>
        <title>Ahsan Khan | Full Stack MERN & AI Automation Specialist</title>
        <meta name="description" content="Full Stack Engineer (MERN) specializing in high-performance web applications and AI Automation/Agent development." />
      </Helmet>

      {/* Background and Visual Effects (Retained) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"></div>
      {/* Floating Lights (Visual Interest) */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full z-20"
      ></motion.div>
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-52 h-52 bg-blue-600/30 blur-3xl rounded-full z-20"
      ></motion.div>

      {/* MAIN CONTENT GRID */}
      <div className="px-6 lg:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-16 z-30 pt-[80px] pb-[50px] lg:pt-[80px] lg:pb-[60px]" 
           // CHANGED: pt-[100px] -> pt-[80px]. And for large screens: lg:pt-[150px] -> lg:pt-[80px] & lg:pb-[100px] -> lg:pb-[60px]
        >
          {/* LEFT TEXT (Introduction) */}
          <div className="space-y-6">
            <motion.span variants={itemVariants} className="text-xl tracking-widest text-gray-300">
              FULL STACK MERN & AI AUTOMATION EXPERT.
            </motion.span>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Building the Future with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> MERN and AI Agents </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-300 text-xl max-w-lg">
              I'm <span className="text-white font-semibold">Ahsan Khan</span>, a Full Stack MERN Engineer creating dynamic web applications
              and specializing in AI Agents & Automation to deliver intelligent, end-to-end solutions.
            </motion.p>

            {/* BUTTON */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                onClick={goToProjects}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(109, 40, 217, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-full shadow-xl text-white font-bold text-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Projects & Case Studies
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE (Glassmorphism Card - Profile Image visible inside the frame) */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 1, -1, 0] }} 
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative p-4"
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 w-full h-full rounded-[40px] 
              bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-3xl opacity-70 transition-opacity duration-500"></div>

              {/* Profile Container with Glassmorphism and Hover Effect */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1, boxShadow: "0 20px 50px rgba(147, 51, 234, 0.4)" }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[40px] overflow-hidden 
                bg-white/5 border border-white/20 backdrop-blur-xl 
                shadow-2xl shadow-black/50 relative z-10"
              >
                <img
                  src="/ahsan-profile.png"
                  alt="Ahsan Khan"
                  className="w-full h-full object-contain object-center" 
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* --- FEATURE CARDS (Separate AI and Web Dev Focus, now with equal height/width logic) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible" 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 lg:mt-28 relative z-30"
        >
          {/* AI AUTOMATION / AGENTS CARD */}
          <motion.div variants={itemVariants} className="h-full">
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(168, 85, 247, 0.8)" }}
              transition={{ type: "spring", stiffness: 150 }}
              className="rounded-3xl p-8 bg-black/10 border border-purple-400/50 
                          backdrop-blur-xl hover:border-purple-300 transition-all duration-300 cursor-pointer 
                          hover:bg-black/20 h-full"
            >
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 tracking-wide">
                🤖 AI Agents & Workflow Automation
              </h3>
              <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                Building Intelligent AI Agents for complex decision-making, data extraction, and end-to-end business process automation using Python and custom LLM integrations.
              </p>
            </motion.div>
          </motion.div>

          {/* FULL STACK MERN DEVELOPMENT CARD */}
          <motion.div variants={itemVariants} className="h-full">
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 15px 40px rgba(59, 130, 246, 0.8)" }}
              transition={{ type: "spring", stiffness: 150 }}
              className="rounded-3xl p-8 bg-black/10 border border-blue-400/50 
                          backdrop-blur-xl hover:border-blue-300 transition-all duration-300 cursor-pointer
                          hover:bg-black/20 h-full"
            >
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 tracking-wide">
                🚀 High-Performance MERN Stack Development
              </h3>
              <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                Designing and deploying secure, scalable applications using the MERN (MongoDB, Express, React, Node.js) stack, 
                with modern styling via Tailwind CSS.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
      </div> 
    </div>
  );
}
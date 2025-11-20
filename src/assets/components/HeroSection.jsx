import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import React from "react";

// ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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
  const goToProjects = () => navigate("/projects");

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">

      {/* META TAGS */}
      <Helmet>
        <title>Ahsan Khan | Full Stack MERN & AI Automation Specialist</title>
        <meta
          name="description"
          content="Full Stack Engineer (MERN) specializing in high-performance web applications and AI Automation/Agent development."
        />
      </Helmet>

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK LAYER */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"></div>

      {/* FLOATING LIGHTS */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-10 w-44 h-44 bg-purple-500/30 blur-3xl rounded-full z-20"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-52 h-52 bg-blue-600/30 blur-3xl rounded-full z-20"
      />

      {/* MAIN GRID */}
      <div className="relative z-30 px-6 lg:px-20 pt-32 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT TEXT */}
          <div className="space-y-6">
            <motion.span variants={itemVariants} className="text-xl tracking-widest text-gray-300">
              FULL STACK MERN & AI AUTOMATION EXPERT.
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-extrabold leading-tight"
            >
              Building the Future with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {" "}
                MERN and AI Agents
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-300 text-xl max-w-xl">
              I'm <span className="text-white font-semibold">Ahsan Khan</span>, a Full Stack MERN
              Engineer creating high-performance web apps and AI Agents for full business automation.
            </motion.p>

            {/* BUTTON */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                onClick={goToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 
                rounded-full shadow-xl text-white font-bold text-lg hover:-translate-y-1 transition-all"
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

          {/* RIGHT — PROFILE CARD */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 1, -1, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative p-4"
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-3xl opacity-70"></div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[40px] overflow-hidden 
                bg-white/5 border border-white/20 backdrop-blur-xl shadow-2xl relative"
              >
                <img src="/ahsan-profile.png" alt="Ahsan Khan" className="w-full h-full object-contain" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* FEATURE CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
        >
          {/* AI AUTOMATION CARD */}
          <motion.div variants={itemVariants}>
            <div className="rounded-3xl p-8 bg-black/10 border border-purple-400/50 backdrop-blur-xl 
            hover:border-purple-300 hover:bg-black/20 transition-all h-full">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                🤖 AI Agents & Automation
              </h3>
              <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                Building AI Agents for automation, workflows, scraping & intelligent processing.
              </p>
            </div>
          </motion.div>

          {/* MERN CARD */}
          <motion.div variants={itemVariants}>
            <div className="rounded-3xl p-8 bg-black/10 border border-blue-400/50 backdrop-blur-xl 
            hover:border-blue-300 hover:bg-black/20 transition-all h-full">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                🚀 MERN Stack Development
              </h3>
              <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                Creating high-performance, secure & scalable MERN applications.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

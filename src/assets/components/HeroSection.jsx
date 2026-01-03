import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { SiOpenai, SiLangchain, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";

export default function HeroSection() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#080808] text-[#e5e7eb] overflow-x-hidden font-sans selection:bg-[#10b981]/30 flex flex-col justify-center"
    >
      <Helmet>
        <title>Ahsan Khan | AI-First Full Stack Engineer</title>
      </Helmet>

      {/* BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[100%] md:w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(16,185,129,0.07)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE: TYPOGRAPHY */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
              <span className="text-[8px] md:text-[10px] font-black tracking-[0.2em] uppercase text-emerald-500/80">Available for Scalable Solutions</span>
            </div>

            {/* Responsive Heading: Text size adjusts from 4xl (mobile) to 9xl (large screens) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.85]">
              AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-emerald-500 to-blue-600">
                ARCHITECT
              </span>
            </h1>

            <p className="max-w-md mx-auto lg:mx-0 text-sm md:text-base lg:text-lg text-slate-400 font-light leading-relaxed px-2 sm:px-0">
              I’m <span className="text-white font-medium">Ahsan Khan</span>. Crafting high-performance <span className="text-emerald-400">MERN</span> ecosystems and autonomous <span className="text-blue-400">AI Agents</span>.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 items-center justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                className="w-full sm:w-auto bg-[#10b981] text-black font-black px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg transition-all"
              >
                VIEW SYSTEMS
              </motion.button>
              
              <div className="flex -space-x-2">
                {[SiOpenai, SiLangchain, SiNodedotjs, SiReact, SiMongodb].map((Icon, i) => (
                  <div key={i} className="h-8 w-8 md:h-12 md:w-12 rounded-full border border-[#111] bg-[#1a1a1a] flex items-center justify-center text-sm md:text-xl text-slate-300 shadow-xl">
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: VISUAL */}
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative flex justify-center perspective-1000 order-1 lg:order-2"
          >
            {/* Image Container: Scales based on screen width */}
            <div className="relative w-[220px] h-[320px] sm:w-[280px] sm:h-[400px] md:w-[350px] md:h-[480px] lg:w-[380px] lg:h-[520px]">
              <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group">
                <img 
                  src="/ahsan-profile.png" 
                  alt="Ahsan" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute bottom-4 md:bottom-10 left-0 w-full px-4 md:px-8">
                   <div className="p-2 md:p-4 rounded-xl bg-black/60 border border-white/5 backdrop-blur-md">
                      <div className="text-[7px] md:text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">Expertise</div>
                      <div className="text-[10px] md:text-sm font-medium">Neural Workflows & MERN</div>
                   </div>
                </div>
              </div>

              {/* Floating Elements: Adjusted for mobile visibility */}
              <div className="block">
                <FloatingElement icon="⚡" label="Speed" top="-5%" right="-5%" delay={0} />
                <FloatingElement icon="🤖" label="AI" bottom="10%" left="-10%" delay={1.5} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTER STRIP */}
        <motion.div className="mt-12 md:mt-24 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500">
          <div className="text-center md:text-left">
             <div className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">Core Capabilities</div>
             <div className="text-[8px] md:text-[10px] font-light">End-to-end Automation & Full Stack Logic</div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[8px] md:text-[10px] font-black tracking-[.2em] uppercase">
             <div className="hover:text-emerald-400 transition-colors cursor-pointer">Scraping</div>
             <div className="hover:text-emerald-400 transition-colors cursor-pointer">LLM Integration</div>
             <div className="hover:text-emerald-400 transition-colors cursor-pointer">React Architect</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FloatingElement({ icon, label, top, right, bottom, left, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ top, right, bottom, left }}
      className="absolute z-20 px-2 py-1 md:px-4 md:py-3 rounded-lg md:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl flex items-center gap-1.5 md:gap-3"
    >
      <span className="text-xs md:text-lg">{icon}</span>
      <span className="text-[7px] md:text-[10px] font-black uppercase tracking-widest text-white/70">{label}</span>
    </motion.div>
  );
}
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { SiOpenai, SiLangchain, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";

export default function HeroSection() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Mouse Tracking for 3D Parallax
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
      className="relative min-h-screen w-full bg-[#080808] text-[#e5e7eb] overflow-hidden font-sans selection:bg-[#10b981]/30"
    >
      <Helmet>
        <title>Ahsan Khan | AI-First Full Stack Engineer</title>
      </Helmet>

      {/* ADVANCED BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Radial Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(16,185,129,0.07)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
        
        {/* Subtle Grid with Fade */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 invert"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: TYPOGRAPHY */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-2xl shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-emerald-500/80">Available for Scalable Solutions</span>
            </div>

            <h1 className="text-7xl lg:text-9xl font-bold tracking-tighter leading-none">
              AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-emerald-500 to-blue-600">
                ARCHITECT
              </span>
            </h1>

            <p className="max-w-md text-lg text-slate-400 font-light leading-relaxed">
              I’m <span className="text-white font-medium">Ahsan Khan</span>. Crafting high-performance <span className="text-emerald-400">MERN</span> ecosystems and autonomous <span className="text-blue-400">AI Agents</span> that operate at the speed of thought.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-6 items-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                className="bg-[#10b981] text-black font-black px-10 py-5 rounded-full text-lg transition-all"
              >
                VIEW SYSTEMS
              </motion.button>
              
              <div className="flex -space-x-3">
                {[SiOpenai, SiLangchain, SiNodedotjs, SiReact, SiMongodb].map((Icon, i) => (
                  <div key={i} className="h-12 w-12 rounded-full border border-[#111] bg-[#1a1a1a] flex items-center justify-center text-xl text-slate-300 shadow-xl hover:-translate-y-2 transition-transform cursor-pointer">
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: ADVANCED VISUAL */}
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative flex justify-center perspective-1000"
          >
            <div className="relative w-[320px] h-[450px] md:w-[400px] md:h-[550px]">
              {/* Outer Glass Layer */}
              <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden group">
                <img 
                  src="/ahsan-profile.png" 
                  alt="Ahsan" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                
                {/* Holographic Sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Internal Label */}
                <div className="absolute bottom-10 left-0 w-full px-8 translate-z-50">
                   <div className="p-4 rounded-2xl bg-black/60 border border-white/5 backdrop-blur-md">
                      <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">Expertise</div>
                      <div className="text-sm font-medium">Neural Workflows & MERN</div>
                   </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <FloatingElement icon="⚡" label="High Speed" top="-5%" right="-5%" delay={0} />
              <FloatingElement icon="🤖" label="Autonomous" bottom="15%" left="-15%" delay={1.5} />
            </div>
          </motion.div>
        </div>

        {/* MODERN FOOTER STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-slate-500"
        >
          <div className="space-y-1">
             <div className="text-white font-bold tracking-widest">CORE CAPABILITIES</div>
             <div className="text-sm font-light">End-to-end Automation & Full Stack Logic</div>
          </div>
          <div className="flex gap-12 text-[11px] font-black tracking-[.25em] uppercase">
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
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ top, right, bottom, left }}
      className="absolute z-20 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl flex items-center gap-3"
    >
      <span className="text-lg">{icon}</span>
      <span className="text-[10px] font-black uppercase tracking-widest text-white/70">{label}</span>
    </motion.div>
  );
}
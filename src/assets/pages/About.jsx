import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaReact,
  FaNodeJs,
  FaDownload,
} from "react-icons/fa";
import { SiOpenai, SiLangchain } from "react-icons/si";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Ahsan Khan — Architecting Intelligence</title>
        <meta name="description" content="About Ahsan Khan - AI Automation & MERN Specialist" />
      </Helmet>

      <section className="relative min-h-screen w-full bg-[#080808] text-[#e5e7eb] overflow-x-hidden font-sans selection:bg-[#10b981]/30">
        
        {/* BACKGROUND ARCHITECTURE */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] right-[-5%] w-[100%] md:w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:50px_50px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE — THE HOLOGRAPHIC ORBIT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center py-8 md:py-12 order-2 lg:order-1"
            >
              <div className="absolute w-60 h-60 md:w-[450px] md:h-[450px] bg-[#10b981]/5 blur-[80px] md:blur-[100px] rounded-full animate-pulse"></div>

              <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] flex items-center justify-center">
                {/* ORBIT LINES */}
                <div className="absolute inset-0 rounded-full border border-emerald-500/10 rotate-clockwise"></div>
                <div className="absolute inset-8 md:inset-12 rounded-full border border-blue-500/10 rotate-anticlockwise"></div>
                <div className="absolute inset-16 md:inset-24 rounded-full border border-white/5"></div>

                {/* SPINNING ICONS (Emerald Theme) */}
                <div className="absolute inset-0 rotate-clockwise-fast">
                  {/* Reduced offsets for mobile icons to keep them within view */}
                  <FloatingOrbitIcon Icon={FaReact} color="text-blue-400" top="-10px" mdTop="-20px" left="50%" />
                  <FloatingOrbitIcon Icon={FaNodeJs} color="text-emerald-500" bottom="-10px" mdBottom="-20px" left="50%" />
                  <FloatingOrbitIcon Icon={SiOpenai} color="text-white" left="-10px" mdLeft="-20px" top="50%" />
                  <FloatingOrbitIcon Icon={SiLangchain} color="text-yellow-500" right="-10px" mdRight="-20px" top="50%" />
                </div>

                {/* CENTER PROFILE */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative w-36 h-36 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10 bg-[#111] backdrop-blur-2xl">
                    <img
                      src="/about-profile.png"
                      alt="Ahsan Khan"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE — CONTENT */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-2"
            >
              <div className="space-y-4">
                <h2 className="text-[10px] md:text-sm font-black tracking-[0.4em] md:tracking-[0.5em] uppercase text-emerald-500">The Architect</h2>
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
                  Decoding <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Complexity.</span>
                </h3>
                <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  I treat code as an art form. From architecting scalable <span className="text-emerald-400/80">MERN</span> systems to training autonomous <span className="text-white font-medium">AI Agents</span>, my goal is to bridge the gap between human logic and machine efficiency.
                </p>
              </div>

              {/* STATS CARD - Stacked on mobile */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 py-6 border-y border-white/5">
                <StatBox number="2+" label="Years Exp" />
                <StatBox number="15+" label="Projects" />
                <StatBox number="100%" label="Uptime" />
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-5">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="/Ahsan-CV.pdf"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-black rounded-2xl text-xs md:text-sm tracking-widest hover:bg-emerald-500 hover:text-white transition-all w-full sm:w-auto"
                >
                  <FaDownload /> DOWNLOAD CV
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="/contact"
                  className="px-8 py-4 border border-white/10 rounded-2xl text-xs md:text-sm font-bold tracking-widest hover:bg-white/5 transition-all text-center w-full sm:w-auto"
                >
                  GET IN TOUCH
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* EXPERIENCE BENTO GRID */}
          <div className="mt-24 md:mt-40 space-y-8 md:space-y-12">
            <h4 className="text-2xl md:text-3xl font-bold tracking-tighter border-l-4 border-emerald-500 pl-4 md:pl-6 text-white">Professional Timeline</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <ExperienceCard 
                year="2025 - Present"
                title="Head of Dev"
                company="DeepVision.ai"
                desc="Leading high-concurrency architecture and AI workflow integration."
                isPrimary={true}
              />
              <ExperienceCard 
                year="2024 - 2025"
                title="Fullstack Dev"
                company="Hashmakers"
                desc="Optimized production MERN apps for 40% faster response times."
              />
              <ExperienceCard 
                year="2023 - 2024"
                title="Web Specialist"
                company="Digital Experts"
                desc="Custom theme engineering and SEO performance scaling."
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spinClockwise { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinAnti { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .rotate-clockwise { animation: spinClockwise 40s linear infinite; }
        .rotate-anticlockwise { animation: spinAnti 30s linear infinite; }
        .rotate-clockwise-fast { animation: spinClockwise 20s linear infinite; }
      `}</style>
    </>
  );
}

// HELPER COMPONENTS
function FloatingOrbitIcon({ Icon, color, top, left, bottom, right, mdTop, mdBottom, mdLeft, mdRight }) {
  return (
    <div 
      style={{ 
        top: window.innerWidth < 768 ? top : (mdTop || top), 
        left: window.innerWidth < 768 ? left : (mdLeft || left), 
        bottom: window.innerWidth < 768 ? bottom : (mdBottom || bottom), 
        right: window.innerWidth < 768 ? right : (mdRight || right) 
      }}
      className={`absolute w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#080808] border border-white/10 flex items-center justify-center text-lg md:text-xl ${color} shadow-2xl backdrop-blur-xl transition-all`}
    >
      <Icon />
    </div>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="text-center lg:text-left group">
      <p className="text-xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">{number}</p>
      <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-500 font-bold">{label}</p>
    </div>
  );
}

function ExperienceCard({ year, title, company, desc, isPrimary }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border transition-all ${
        isPrimary ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-white/[0.02] border-white/5 hover:border-white/10'
      }`}
    >
      <span className="text-[9px] md:text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">{year}</span>
      <h5 className="text-lg md:text-xl font-bold mt-2 text-white">{title}</h5>
      <p className="text-xs md:text-sm text-slate-400 mb-4">{company}</p>
      <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}
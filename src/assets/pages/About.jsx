import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPaintBrush,
  FaCode,
  FaBrain,
  FaDownload,
} from "react-icons/fa";
import { SiOpenai, SiLangchain, SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Ahsan Khan — Architecting Intelligence</title>
        <meta name="description" content="About Ahsan Khan - AI Automation & MERN Specialist" />
      </Helmet>

      {/* MAIN CONTAINER */}
      <section className="relative min-h-screen w-full bg-[#080808] text-[#e5e7eb] overflow-hidden font-sans selection:bg-[#10b981]/30">
        
        {/* BACKGROUND ARCHITECTURE (Matching Hero) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE — THE HOLOGRAPHIC ORBIT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center py-12"
            >
              {/* Pulsing Outer Glow */}
              <div className="absolute w-72 h-72 md:w-[450px] md:h-[450px] bg-[#10b981]/5 blur-[100px] rounded-full animate-pulse"></div>

              <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center">
                {/* ORBIT LINES */}
                <div className="absolute inset-0 rounded-full border border-emerald-500/10 rotate-clockwise"></div>
                <div className="absolute inset-12 rounded-full border border-blue-500/10 rotate-anticlockwise"></div>
                <div className="absolute inset-24 rounded-full border border-white/5"></div>

                {/* SPINNING ICONS (Emerald Theme) */}
                <div className="absolute inset-0 rotate-clockwise-fast">
                  <FloatingOrbitIcon Icon={FaReact} color="text-blue-400" top="-20px" left="50%" />
                  <FloatingOrbitIcon Icon={FaNodeJs} color="text-emerald-500" bottom="-20px" left="50%" />
                  <FloatingOrbitIcon Icon={SiOpenai} color="text-white" left="-20px" top="50%" />
                  <FloatingOrbitIcon Icon={SiLangchain} color="text-yellow-500" right="-20px" top="50%" />
                </div>

                {/* CENTER PROFILE WITH GLASSMISM */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative w-44 h-44 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10 bg-[#111] backdrop-blur-2xl">
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
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-sm font-black tracking-[0.5em] uppercase text-emerald-500">The Architect</h2>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                  Decoding <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Complexity.</span>
                </h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed max-w-xl">
                  I treat code as an art form. From architecting scalable <span className="text-white font-medium text-emerald-400/80 underline decoration-emerald-500/30">MERN</span> systems to training autonomous <span className="text-white font-medium">AI Agents</span>, my goal is to bridge the gap between human logic and machine efficiency.
                </p>
              </div>

              {/* DYNAMIC STATS CARD */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
                <StatBox number="+2" label="Years Experience" />
                <StatBox number="15+" label="Deep Projects" />
                <StatBox number="100%" label="Uptime Logic" />
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-5">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="/Ahsan-CV.pdf"
                  className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black rounded-2xl text-sm tracking-widest hover:bg-emerald-500 hover:text-white transition-all"
                >
                  <FaDownload /> DOWNLOAD CV
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="/contact"
                  className="px-8 py-4 border border-white/10 rounded-2xl text-sm font-bold tracking-widest hover:bg-white/5 transition-all"
                >
                  GET IN TOUCH
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* EXPERIENCE BENTO GRID */}
          <div className="mt-40 space-y-12">
            <h4 className="text-3xl font-bold tracking-tighter border-l-4 border-emerald-500 pl-6">Professional Timeline</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* STYLES */}
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
function FloatingOrbitIcon({ Icon, color, top, left, bottom, right }) {
  return (
    <div 
      style={{ top, left, bottom, right }}
      className={`absolute w-12 h-12 rounded-xl bg-[#080808] border border-white/10 flex items-center justify-center text-xl ${color} shadow-2xl backdrop-blur-xl`}
    >
      <Icon className="animate-spin-slow" style={{ animationDuration: '8s' }} />
    </div>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="text-left group">
      <p className="text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">{number}</p>
      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{label}</p>
    </div>
  );
}

function ExperienceCard({ year, title, company, desc, isPrimary }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-8 rounded-[2rem] border transition-all ${
        isPrimary ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-white/[0.02] border-white/5 hover:border-white/10'
      }`}
    >
      <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">{year}</span>
      <h5 className="text-xl font-bold mt-2 text-white">{title}</h5>
      <p className="text-sm text-slate-400 mb-4">{company}</p>
      <p className="text-sm text-slate-500 leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}
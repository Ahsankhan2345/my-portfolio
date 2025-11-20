import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPaintBrush,
  FaCss3Alt,
  FaCode,
  FaBrain,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Ahsan Khan — About | MERN Stack Developer</title>
        <meta
          name="description"
          content="Ahsan Khan — MERN Stack Developer. I build scalable React + Node.js apps with clean architecture, responsive UI and performance-first approach."
        />
        <meta
          property="og:title"
          content="Ahsan Khan — MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="MERN Stack developer specializing in React, Node.js, Express and MongoDB. Portfolio of modern, responsive web apps."
        />
        <meta property="og:image" content="/about-profile.png" />
      </Helmet>

      {/* MAIN SECTION */}
      <section className="relative pt-0 min-h-screen w-full overflow-hidden font-[Poppins,sans-serif]">
        {/* BG VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-20"
        >
          <source src="/videos/bg-about1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 z-30"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-black via-[#0b0b12] to-[#0b0820] animate-gradientBackground"></div>

        <section className="relative w-full min-h-screen text-white px-6 md:px-16 pt-20 pb-20 overflow-hidden z-40">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
            {/* LEFT SIDE — ORBIT */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start gap-8"
            >
              <div className="relative w-full flex items-center justify-center py-10">
                <div className="relative w-64 h-64 md:w-[420px] md:h-[420px] flex items-center justify-center">

                  {/* OUTER ORBIT CLOCKWISE */}
                  <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] 
                    rounded-full border border-white/30 rotate-clockwise">
                  </div>

                  {/* INNER ORBIT ANTI-CLOCKWISE */}
                  <div className="absolute w-[230px] h-[230px] md:w-[300px] md:h-[300px] 
                    rounded-full border border-white/20 rotate-anticlockwise">
                  </div>

                  {/* ICONS CONTAINER — FAST CLOCKWISE */}
                  <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rotate-clockwise-fast">

                    {/* REACT */}
                    <div className="orbit-icon rotate-anticlockwise">
                      <FaReact size={20} className="text-blue-400" />
                    </div>

                    {/* NODE */}
                    <div className="orbit-icon2 rotate-clockwise">
                      <FaNodeJs size={20} className="text-green-500" />
                    </div>

                    {/* MONGO */}
                    <div className="orbit-icon3 rotate-anticlockwise">
                      <FaDatabase size={20} className="text-green-700" />
                    </div>

                    {/* UI/UX */}
                    <div className="orbit-icon4 rotate-clockwise">
                      <FaPaintBrush size={20} className="text-pink-500" />
                    </div>

                    {/* BRAIN */}
                    <div className="orbit-icon5 rotate-anticlockwise">
                      <FaBrain size={20} className="text-red-400" />
                    </div>
                  </div>

                  {/* CENTER IMAGE */}
                  <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-white/10 backdrop-blur-xl shadow-xl z-20">
                    <img
                      src="/about-profile.png"
                      alt="Ahsan Khan"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* STATS */}
              <div className="w-full grid grid-cols-3 gap-4 md:gap-6">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-extrabold">+2</p>
                  <p className="text-xs text-gray-300">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-extrabold">10+</p>
                  <p className="text-xs text-gray-300">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-extrabold">5+</p>
                  <p className="text-xs text-gray-300">Clients</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE CONTENT */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Me
                </span>
              </h2>

              <p className="text-gray-300 max-w-xl leading-relaxed">
                Hi, I’m <strong>Ahsan Khan</strong> — a MERN Stack developer
                focused on building scalable, production-ready web applications.
                I build intuitive user interfaces with React and Tailwind,
                design clean backend APIs with Node.js & Express, and store data
                reliably with MongoDB.
              </p>

              <p className="text-gray-300 max-w-xl leading-relaxed">
                I treat every project like a product: planning architecture,
                writing modular code, and keeping performance and accessibility
                in mind.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="/Ahsan-CV.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white font-semibold shadow-md hover:scale-105 transition"
                >
                  Download CV
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 transition"
                >
                  Hire Me
                </a>
              </div>

              {/* SKILLS */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: <FaReact size={20} className="text-blue-400" />,
                    label: "React.js",
                  },
                  {
                    icon: <FaNodeJs size={20} className="text-green-500" />,
                    label: "Node.js",
                  },
                  {
                    icon: <FaDatabase size={20} className="text-green-700" />,
                    label: "MongoDB",
                  },
                  {
                    icon: <FaCss3Alt size={20} className="text-blue-500" />,
                    label: "Tailwind CSS",
                  },
                  {
                    icon: <FaCode size={20} className="text-yellow-400" />,
                    label: "REST APIs",
                  },
                  {
                    icon: <FaBrain size={20} className="text-red-400" />,
                    label: "AI/ML Integration",
                  },
                  {
                    icon: <FaPaintBrush size={20} className="text-pink-500" />,
                    label: "UI/UX",
                  },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/6"
                  >
                    <div>{s.icon}</div>
                    <div>
                      <p className="text-sm font-semibold">{s.label}</p>
                      <p className="text-xs text-gray-400">Intermediate</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* EXPERIENCE TIMELINE — SAME AS YOUR ORIGINAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mt-12 relative z-20"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold mb-10 text-white">
              Experience
            </h3>

            <div className="relative border-l-2 border-gray-600 pl-10 space-y-12">
              {[
                {
                  year: "2025 – Present",
                  title: "Head of Web Development — DeepVision.ai",
                  desc: "Leading the web development department, architecting scalable web applications, mentoring a team of developers, and implementing cutting-edge UI/UX designs.",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  year: "2024 – 2025",
                  title: "Full-stack Developer — Hashmakers Solutions",
                  desc: "Built robust MERN stack applications, developed REST APIs, integrated databases, and optimized frontend performance.",
                  color: "from-blue-500 to-cyan-400",
                },
                {
                  year: "2023 – 2024",
                  title: "WordPress Developer — Top Digital Experts",
                  desc: "Designed custom WordPress themes, optimized websites for performance and SEO, and provided client support and maintenance.",
                  color: "from-green-400 to-teal-400",
                },
              ].map((job, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-28 top-0 w-28 text-right text-sm font-medium text-gray-400">
                    {job.year}
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`absolute -left-[14px] w-5 h-5 rounded-full mt-1 bg-gradient-to-tr ${job.color} shadow-lg transition-transform duration-300 group-hover:scale-125`}
                  ></motion.div>

                  <div className="pl-10">
                    <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                      {job.title}
                    </h4>
                    <p className="text-gray-400 mt-2">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </section>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes gradientBackground {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradientBackground {
            background-size: 400% 400%;
            animation: gradientBackground 15s ease infinite;
          }

          /* ROTATIONS */
          @keyframes spinClockwise {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spinAntiClockwise {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }

          .rotate-clockwise {
            animation: spinClockwise 25s linear infinite;
          }
          .rotate-anticlockwise {
            animation: spinAntiClockwise 30s linear infinite;
          }
          .rotate-clockwise-fast {
            animation: spinClockwise 12s linear infinite;
          }

          /* ICON POSITIONS */
          .orbit-icon, .orbit-icon2, .orbit-icon3, .orbit-icon4, .orbit-icon5 {
            width: 40px; 
            height: 40px;
            border-radius: 9999px;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.3);
            display: flex; 
            align-items: center; 
            justify-content: center;
            position: absolute;
          }
          .orbit-icon { top: -20px; left: 50%; transform: translateX(-50%); }
          .orbit-icon2 { right: -20px; top: 50%; transform: translateY(-50%); }
          .orbit-icon3 { bottom: -20px; left: 50%; transform: translateX(-50%); }
          .orbit-icon4 { left: -20px; top: 50%; transform: translateY(-50%); }
          .orbit-icon5 { top: 10%; right: 10%; }
        `}
      </style>
    </>
  );
}

// src/assets/pages/About.jsx
import { motion } from "framer-motion";

function About() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
    "Firebase", "Node.js", "WordPress"
  ];

  return (
    <section
      id="about"
      className="bg-black text-white min-h-screen px-6 py-20 md:py-28 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="text-lg text-gray-400 md:text-xl text-center mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm <span className="text-blue-500 font-semibold">Ahsan Khan</span>,
          a passionate Full Stack Web Developer currently in my 7th semester at
          <span className="text-white font-medium"> Superior University</span>.
          I specialize in crafting modern, responsive websites using{" "}
          <span className="text-white">React</span>,{" "}
          <span className="text-white">Tailwind CSS</span>,{" "}
          <span className="text-white">Node.js</span>,{" "}
          <span className="text-white">Firebase</span>, and{" "}
          <span className="text-white">WordPress</span>. I've had the opportunity
          to gain hands-on experience with companies like{" "}
          <span className="text-white font-medium">Iffa Tech (2023)</span>,{" "}
          <span className="text-white font-medium">Top Digital Expert (2024)</span>, and{" "}
          <span className="text-white font-medium">Hashmaker Solutions (2025)</span>.
        </motion.p>

        {/* Skills */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-full text-sm text-gray-200 hover:bg-blue-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Experience
            </h3>
            <ul className="text-gray-400 space-y-3 pl-4 list-disc">
              <li>💼 MERN Stack Intern – Iffa Tech (2023)</li>
              <li>💼 WordPress Developer – Top Digital Expert (2024)</li>
              <li>💼 MERN Stack Intern – Hashmaker Solutions (2025)</li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Education
            </h3>
            <ul className="text-gray-400 space-y-3 pl-4 list-disc">
              <li>🎓 School: The Hope</li>
              <li>🏫 College: Aspire College</li>
              <li>🏛️ University: Superior University Lahore</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

// src/assets/pages/About.jsx
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-black text-white min-h-screen px-6 py-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="text-lg text-gray-300 mb-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm <span className="text-blue-400 font-semibold">Ahsan Khan</span>,
          a passionate Full Stack Web Developer currently in my 7th semester at
          Superior University. I specialize in building modern, responsive
          websites using React, Tailwind CSS, Node.js, Firebase, and WordPress.
          I've worked with multiple companies like Iffa Tech, Hashmakers
          Solutions, and Top Digital.
        </motion.p>

        {/* Skills */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Skills:</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Firebase",
              "Node.js",
              "WordPress",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 text-sm px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3">Experience</h3>
            <ul className="text-gray-400 space-y-2">
                <li>💼 MERN Stack Intern – Hashmaker Solutions</li>
              <li>💼 MERN Stack Intern – Iffa Tech</li>
              <li>💼 WordPress Web Developer – Top Digital Expert</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <ul className="text-gray-400 space-y-2">
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

import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 👈 Link imported from react-router-dom
import profileImg from "/ahsan-profile.jpg"; // Make sure this image is in public folder

function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Ahsan Khan</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Web Developer | React & Node.js | WordPress Expert
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf" // 👈 Make sure resume.pdf is in public folder
              download
              className="border border-white px-6 py-3 rounded-xl text-white hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
            <Link
              to="/projects" // 👈 React route to the Projects page
              className="bg-blue-600 px-6 py-3 rounded-xl text-white font-medium hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profileImg}
            alt="Ahsan Khan"
            className="w-full max-w-sm h-auto rounded-2xl object-cover border-4 border-white shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

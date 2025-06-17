import { motion } from "framer-motion";

function Projects() {
  const dummyProjects = [
    {
      title: "Portfolio Website",
      tech: "React, Tailwind CSS",
      image: "https://via.placeholder.com/400x250",
      github: "#",
      live: "#",
    },
    {
      title: "E-commerce Store",
      tech: "React, Node.js, MongoDB",
      image: "https://via.placeholder.com/400x250",
      github: "#",
      live: "#",
    },
    {
      title: "Blog Platform",
      tech: "Next.js, Tailwind CSS",
      image: "https://via.placeholder.com/400x250",
      github: "#",
      live: "#",
    },
  ];

  return (
    <motion.div
      className="bg-black text-white min-h-screen px-6 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-blue-400"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dummyProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.3)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 italic">
                  {project.tech}
                </p>
                <div className="flex justify-between items-center text-sm font-medium">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline hover:text-blue-300 transition"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline hover:text-green-300 transition"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;

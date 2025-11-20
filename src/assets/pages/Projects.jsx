import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Code, ExternalLink, Github, Monitor, BookOpen } from 'lucide-react'; 

// --- Custom Modal Component ---
const ProjectDetailModal = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm overflow-y-auto">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-3xl w-full border border-blue-500/50 my-10"
            >
                <h3 className="text-3xl font-bold mb-2 text-blue-400 flex items-center">
                    <BookOpen className="mr-3 w-6 h-6"/> {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700 pb-4">
                    {project.tech.split(',').map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-gray-700 rounded-lg text-gray-300 font-medium">
                            {tag.trim()}
                        </span>
                    ))}
                </div>

                <div className="text-gray-300 text-base space-y-4 leading-relaxed">
                    <p className="whitespace-pre-wrap">{project.description}</p>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                    {project.live && !project.underDevelopment && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-md font-semibold transition py-2 px-5 rounded-xl bg-green-600 hover:bg-green-700 text-white"
                        >
                            <Monitor className="w-5 h-5 mr-2" /> Live
                        </a>
                    )}
                    <button 
                        onClick={onClose} 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </div>
    );
};


// --- Project Card Component ---
const ProjectCard = ({ project, index }) => {
    const [showModal, setShowModal] = useState(false);

    const isEven = index % 2 === 0; 
    const categoryColor = isEven ? 'text-green-300 bg-green-500/20' : 'text-purple-300 bg-purple-500/20';
    const accentColor = isEven ? 'text-green-400 hover:text-green-300' : 'text-purple-400 hover:text-purple-300';
    const isAIML = project.tech.includes("AI") || project.tech.includes("TensorFlow");
    const imagePlaceholder = isAIML 
        ? "https://placehold.co/750x550/4C1D95/white?text=AI+PROJECT" 
        : "https://placehold.co/750x550/065F46/white?text=WEB+PROJECT"; 
    
    const cardSummary = project.description.split('.')[0].trim() + (project.description.includes('.') ? '.' : '');

    return (
        <>
            <motion.div
                className="w-full relative p-[2px] rounded-[1.5rem] shadow-2xl"
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
            >
                <div className={`absolute inset-0 rounded-[1.5rem] p-[2px] opacity-100 transition-opacity duration-500 
                    ${isEven ? 'bg-gradient-to-br from-green-500/50 to-black' : 'bg-gradient-to-bl from-purple-500/50 to-black'}
                `}></div>

                <div className={`relative bg-gray-900 rounded-[1.4rem] p-6 lg:p-10 flex ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8 items-center`}>
                    
                    <div className="lg:w-1/2 w-full text-left space-y-5">
                        <span className={`px-4 py-1.5 text-sm font-bold rounded-full ${categoryColor}`}>
                            {isAIML ? "AI/ML" : project.tech.split(',')[0].trim()} 
                        </span>
                        
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            {project.title}
                        </h3>
                        
                        <p className="text-gray-400 text-lg">
                           {cardSummary}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.tech.split(',').map((tag, i) => (
                                <span key={i} className="px-3 py-1 text-sm bg-gray-700 rounded-lg text-gray-300 font-medium">
                                    <Code className="inline w-3 h-3 mr-1" />{tag.trim()}
                                </span>
                            ))}
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row gap-4">
                            {project.live && !project.underDevelopment && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center text-lg font-semibold transition py-2 px-5 rounded-xl ${isEven ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'} text-white`}
                                >
                                    <Monitor className="w-5 h-5 mr-2" /> Live Demo
                                </a>
                            )}
                            
                            {project.github && !project.underDevelopment && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center text-lg font-semibold transition py-2 px-5 rounded-xl border border-gray-600 bg-gray-700 hover:bg-gray-600 ${accentColor}`}
                                >
                                    <Github className="w-5 h-5 mr-2" /> View Code
                                </a>
                            )}
                            
                            {project.underDevelopment && (
                                <p className="text-yellow-400 font-semibold italic flex items-center">
                                    🚧 Project Under Development
                                </p>
                            )}

                            <button
                                onClick={() => setShowModal(true)}
                                className={`flex items-center text-lg font-semibold transition py-2 px-5 rounded-xl border border-blue-600 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400`}
                            >
                                <ExternalLink className="w-5 h-5 mr-2"/>
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full relative group">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-2xl object-cover aspect-square md:aspect-video shadow-2xl border border-gray-700 transition duration-300 group-hover:shadow-lg group-hover:shadow-gray-700/50"
                            onError={(e) => { e.target.onerror = null; e.target.src = imagePlaceholder; }}
                        />
                        <div className={`absolute inset-0 rounded-2xl opacity-20 transition-opacity duration-500 pointer-events-none 
                            ${isEven ? 'bg-green-400' : 'bg-purple-400'} mix-blend-screen`}></div>
                    </div>
                </div>
            </motion.div>

            {showModal && (
                <ProjectDetailModal 
                    project={project} 
                    onClose={() => setShowModal(false)} 
                />
            )}
        </>
    );
};


function Projects() {
    const dummyProjects = [
        {
            title: "Dr. Zohaib Buzdar Website",
            tech: "React, Tailwind CSS, Framer Motion",
            image: "https://dr-zohaib-portfolio.vercel.app/assets/dr-zohaib-CWjaMEPe.jpg", 
            github: "https://github.com/Ahsankhan2345/dr-zohaib-portfolio",
            live: "https://dr-zohaib-portfolio.vercel.app/",
            underDevelopment: false,
            description: `A custom-built, highly responsive web presence for a medical professional...`,
        },
        {
            title: "My Portfolio Website",
            tech: "React, Tailwind CSS, Framer Motion",
            image: "https://cdn.dribbble.com/userupload/40420207/file/original-7c70cb1da33d4e1fcd9e0c3b416f1c3a.png?resize=1600x1200&vertical=center", 
            github: "https://github.com/Ahsankhan2345/my-portfolio",
            live: "https://my-portfolio-lac-nine-28.vercel.app/",
            underDevelopment: false,
            description: `This is my personal portfolio, engineered to be a showcase of my technical skills...`,
        },
        {
            title: "E-commerce Store Front",
            tech: "React, Node.js, MongoDB, Express",
            image: "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2025/11/6916bd9055341198350619.jpg", 
            underDevelopment: true,
            description: `A full-stack E-commerce solution using React...`,
        },
        {
            title: "Advanced Blog Platform",
            tech: "Next.js, Tailwind CSS, CMS Integration (Mock)",
            image: "https://cdn.dribbble.com/userupload/12692083/file/original-2bb684263cdb2dacfe450a05916a0134.png?resize=2048x1536&vertical=center", 
            underDevelopment: true,
            description: `A high-performance content platform built with Next.js...`,
        },
        {
            title: "Real-time Object Detector",
            tech: "TensorFlow.js, React, WebGL, PoseNet",
            image: "https://cdn.dribbble.com/userupload/3510039/file/original-9ff5a3366e26ec52b43cc9e07bb1a715.jpg?resize=2048x1382&vertical=center", 
            underDevelopment: true,
            description: `An advanced machine learning application designed to run entirely in the browser...`,
        },
        {
            title: "Generative Text API Service",
            tech: "Python (Flask), Google Generative AI, RESTful API",
            image: "https://cdn.dribbble.com/userupload/20449200/file/original-55083fb76f70c03b0237b198ed48eda7.png?resize=1504x1128&vertical=center", 
            underDevelopment: true,
            description: `A robust and scalable backend service for Natural Language Generation tasks...`,
        },
    ];

    return (
        <>
            <motion.div
                className="bg-black text-white min-h-screen px-4 sm:px-6 pt-36 pb-16 md:pb-24 font-['Inter']"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto space-y-16">
                    <motion.h2
                        className="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-300"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Featured Projects
                    </motion.h2>

                    <p className="text-gray-400 text-center italic max-w-3xl mx-auto text-lg mb-10">
                        As a dedicated developer, I focus on building high-performance web applications...
                    </p>

                    <div className="space-y-16">
                        {dummyProjects.map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                project={project} 
                                index={index} 
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Projects;

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Github, Cpu, Layers } from 'lucide-react';

// --- Custom Modal Component ---
const ProjectDetailModal = ({ project, onClose }) => (
    <AnimatePresence>
        <div className="fixed inset-0 bg-[#080808]/95 flex items-center justify-center z-[9999] p-4 backdrop-blur-md overflow-y-auto">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-[#111] p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl max-w-2xl w-full border border-emerald-500/20 my-auto relative overflow-hidden"
            >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px]"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center tracking-tighter leading-tight">
                    <Cpu className="mr-3 w-6 h-6 text-emerald-400 shrink-0"/> {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6 border-b border-white/5 pb-6">
                    {project.tech.split(',').map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-emerald-500/5 border border-emerald-500/20 rounded-full text-emerald-400">
                            {tag.trim()}
                        </span>
                    ))}
                </div>

                <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed mb-8">
                    {project.description}
                </p>

                <div className="flex justify-end">
                    <button 
                        onClick={onClose} 
                        className="w-full md:w-auto bg-white/5 text-white font-bold py-3 px-8 rounded-xl border border-white/10 text-[10px] tracking-widest uppercase hover:bg-emerald-500 hover:text-black transition-all"
                    >
                        Back to Gallery
                    </button>
                </div>
            </motion.div>
        </div>
    </AnimatePresence>
);

// --- Project Card Component ---
const ProjectCard = ({ project, index }) => {
    const [showModal, setShowModal] = useState(false);
    const isEven = index % 2 === 0;

    const handleImgError = (e) => {
        e.target.src = `https://placehold.co/800x450/111/10b981?text=${project.title.replace(/ /g, '+')}`;
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center py-12 md:py-20 border-b border-white/5 group`}
        >
            {/* Project Image */}
            <div className="w-full lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 bg-[#111] aspect-video">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        onError={handleImgError}
                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                    />
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[8px] md:text-[9px] font-black tracking-[0.3em] uppercase text-emerald-400">
                        {project.category}
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 text-emerald-500/60 font-black text-[9px] md:text-[10px] tracking-[0.4em]">
                    <Layers size={14} /> PROJECT {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.1]">
                    {project.title}
                </h3>
                
                <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {project.description.split('.')[0]}.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {project.tech.split(',').slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span> {tag.trim()}
                        </span>
                    ))}
                </div>

                <div className="pt-4 md:pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-8">
                    <button 
                        onClick={() => setShowModal(true)} 
                        className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black text-[10px] tracking-[0.2em] rounded-full uppercase hover:bg-emerald-500 hover:text-white transition-all active:scale-95"
                    >
                        Explore Architecture
                    </button>
                    {project.github && (
                        <a href={project.github} className="text-slate-500 hover:text-emerald-400 transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                            <Github size={20} /> <span className="sm:hidden">View Source</span>
                        </a>
                    )}
                </div>
            </div>

            {showModal && <ProjectDetailModal project={project} onClose={() => setShowModal(false)} />}
        </motion.div>
    );
};

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const projectsData = [
        { title: "Nexus AI Researcher", category: "AI", tech: "LangGraph, OpenAI, Python", image: "https://picsum.photos/seed/ai1/800/450", description: "Autonomous multi-agent system for deep academic research and automated report generation." },
        { title: "Zenith SaaS Dashboard", category: "Fullstack", tech: "MERN, Redux, Chart.js", image: "https://picsum.photos/seed/dash1/800/450", description: "Enterprise-level analytics platform with real-time data visualization and RBAC security." },
        { title: "Visionary Tracker", category: "AI", tech: "TensorFlow.js, WebGL, React", image: "https://picsum.photos/seed/vis1/800/450", description: "High-performance browser-based object detection using neural networks." },
        { title: "SwiftCart Commerce", category: "Fullstack", tech: "Next.js, Stripe, MongoDB", image: "https://picsum.photos/seed/shop1/800/450", description: "Ultra-fast headless commerce solution optimized for Core Web Vitals." },
        { title: "Sentix Sentiment Bot", category: "Automation", tech: "NLP, Node.js, Puppeteer", image: "https://picsum.photos/seed/bot1/800/450", description: "Social media intelligence tool that analyzes public perception using NLP." }
        // ... (Baqi data same rahega)
    ];

    const filteredProjects = useMemo(() => 
        filter === "All" ? projectsData : projectsData.filter(p => p.category === filter),
    [filter]);

    return (
        <div className="bg-[#080808] text-[#e5e7eb] min-h-screen selection:bg-[#10b981]/30 pb-20 font-sans overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 md:pt-40">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-20 space-y-4">
                    <h2 className="text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-emerald-500">Portfolio Archive</h2>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-600">COLLECTION.</span>
                    </h1>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-20">
                    {["All", "AI", "Fullstack", "Automation"].map((tab) => (
                        <button 
                            key={tab} 
                            onClick={() => setFilter(tab)}
                            className={`px-5 md:px-8 py-2 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-black tracking-widest uppercase border transition-all ${filter === tab ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-white/10 text-slate-500 hover:border-white/30'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="space-y-4 md:space-y-10">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
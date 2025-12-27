import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Monitor, Cpu, Layers, Code, Brain, Globe, Search } from 'lucide-react';

// --- Custom Modal Component ---
const ProjectDetailModal = ({ project, onClose }) => (
    <AnimatePresence>
        <div className="fixed inset-0 bg-[#080808]/95 flex items-center justify-center z-[9999] p-4 backdrop-blur-md overflow-y-auto">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-[#111] p-8 rounded-[2.5rem] shadow-2xl max-w-3xl w-full border border-emerald-500/20 my-10 relative overflow-hidden"
            >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px]"></div>
                <h3 className="text-3xl font-bold mb-4 text-white flex items-center tracking-tighter">
                    <Cpu className="mr-3 w-6 h-6 text-emerald-400"/> {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6 border-b border-white/5 pb-6">
                    {project.tech.split(',').map((tag, i) => (
                        <span key={i} className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-emerald-500/5 border border-emerald-500/20 rounded-full text-emerald-400">
                            {tag.trim()}
                        </span>
                    ))}
                </div>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">{project.description}</p>
                <div className="flex flex-wrap gap-4 justify-end">
                    <button onClick={onClose} className="bg-white/5 text-white font-bold py-3 px-8 rounded-2xl border border-white/10 text-sm tracking-widest uppercase hover:bg-white/10 transition-all">Back</button>
                </div>
            </motion.div>
        </div>
    </AnimatePresence>
);

// --- Project Card Component ---
const ProjectCard = ({ project, index }) => {
    const [showModal, setShowModal] = useState(false);
    const isEven = index % 2 === 0;

    // Fallback image function if link fails
    const handleImgError = (e) => {
        e.target.src = `https://placehold.co/800x450/111/10b981?text=${project.title.replace(/ /g, '+')}`;
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center py-16 border-b border-white/5 group`}
        >
            <div className="lg:w-1/2 w-full relative">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#111] aspect-video">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        onError={handleImgError}
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                    />
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-black tracking-[0.3em] uppercase text-emerald-400">
                        {project.category}
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full space-y-6">
                <div className="flex items-center gap-4 text-emerald-500/60 font-black text-[10px] tracking-[0.4em]">
                    <Layers size={14} /> PROJECT {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight">{project.title}</h3>
                <p className="text-slate-400 text-lg font-light leading-relaxed">{project.description.split('.')[0]}.</p>
                <div className="flex flex-wrap gap-3">
                    {project.tech.split(',').slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span> {tag.trim()}
                        </span>
                    ))}
                </div>
                <div className="pt-6 flex items-center gap-6">
                    <button onClick={() => setShowModal(true)} className="px-8 py-4 bg-white text-black font-black text-[10px] tracking-[0.2em] rounded-full uppercase hover:bg-emerald-500 hover:text-white transition-all">Explore Architecture</button>
                    {project.github && <a href={project.github} className="text-slate-500 hover:text-emerald-400 transition-colors"><Github size={20} /></a>}
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
        { title: "Sentix Sentiment Bot", category: "Automation", tech: "NLP, Node.js, Puppeteer", image: "https://picsum.photos/seed/bot1/800/450", description: "Social media intelligence tool that analyzes public perception using NLP." },
        { title: "NeuralDoc RAG", category: "AI", tech: "LangChain, Pinecone, OpenAI", image: "https://picsum.photos/seed/doc1/800/450", description: "Advanced document intelligence system utilizing vector databases." },
        { title: "VibeStream Chat", category: "Fullstack", tech: "Socket.io, Express, Redis", image: "https://picsum.photos/seed/chat1/800/450", description: "High-concurrency messaging application with real-time delivery status." },
        { title: "AutoScrape Pro", category: "Automation", tech: "Python, Selenium, AWS", image: "https://picsum.photos/seed/data1/800/450", description: "Cloud-based web mining engine capable of bypassing anti-bot measures." },
        { title: "GhostWriter AI", category: "AI", tech: "GPT-4, Node.js, CronJobs", image: "https://picsum.photos/seed/write1/800/450", description: "Automated content pipeline that generates and publishes SEO articles." },
        { title: "DevOps Health", category: "Automation", tech: "Go, Prometheus, Grafana", image: "https://picsum.photos/seed/dev1/800/450", description: "Real-time infrastructure monitoring dashboard for microservices." },
        { title: "CryptoVault", category: "Fullstack", tech: "Web3.js, React, CoinGecko", image: "https://picsum.photos/seed/crypto1/800/450", description: "Secure digital asset manager with live price tracking." },
        { title: "LingoFlow", category: "AI", tech: "Whisper AI, React, FastAPI", image: "https://picsum.photos/seed/lang1/800/450", description: "Real-time speech translation system leveraging OpenAI's Whisper model." },
        { title: "EduSync LMS", category: "Fullstack", tech: "MERN, Cloudinary, Framer", image: "https://picsum.photos/seed/edu1/800/450", description: "Comprehensive learning platform with interactive video modules." },
        { title: "Pulse UI Library", category: "Fullstack", tech: "TypeScript, Tailwind, Storybook", image: "https://picsum.photos/seed/ui1/800/450", description: "Optimized, accessible React component library for rapid development." }
    ];

    const filteredProjects = useMemo(() => 
        filter === "All" ? projectsData : projectsData.filter(p => p.category === filter),
    [filter]);

    return (
        <div className="bg-[#080808] text-[#e5e7eb] min-h-screen selection:bg-[#10b981]/30 pb-20 font-sans">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-[10px] font-black tracking-[0.6em] uppercase text-emerald-500">Portfolio Archive</h2>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-600">COLLECTION.</span></h1>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {["All", "AI", "Fullstack", "Automation"].map((tab) => (
                        <button 
                            key={tab} 
                            onClick={() => setFilter(tab)}
                            className={`px-8 py-2 rounded-full text-[10px] font-black tracking-widest uppercase border transition-all ${filter === tab ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-white/10 text-slate-500 hover:border-white/30'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="space-y-10">
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
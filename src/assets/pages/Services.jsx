import React from 'react';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
    Cpu, Zap, Layers, Search, Code, Terminal, Rocket, CheckCircle2, ArrowRight 
} from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Services() {
    const coreServices = [
        {
            title: "Full-Stack MVP Development",
            icon: <Terminal size={28} />,
            desc: "End-to-end MERN Stack development for launching Minimum Viable Products quickly. Scalable architecture from day one.",
            features: ["React/Tailwind Frontend", "Node/Express REST API", "MongoDB Architecture"],
        },
        {
            title: "API & Backend Systems",
            icon: <Cpu size={28} />,
            desc: "Designing secure, high-performance RESTful APIs. Focus on clean code, JWT auth, and database optimization.",
            features: ["Microservices", "JWT/OAuth Security", "Query Optimization"],
        },
        {
            title: "React UI/UX Systems",
            icon: <Layers size={28} />,
            desc: "Transforming Figma designs into pixel-perfect, highly responsive React components with advanced state management.",
            features: ["Framer Motion Animations", "Redux/Zustand State", "Mobile-First Design"],
        },
    ];

    const pricingPackages = [
        {
            name: "Starter Prototype",
            price: "$499",
            features: ["Single Page React App", "Basic API Integration", "Mobile Responsive", "3 Days Delivery"],
            highlight: false
        },
        {
            name: "MVP Launchpad",
            price: "$1,499",
            features: ["Full MERN Stack App", "User Authentication", "Admin Dashboard", "15 Days Delivery", "Priority Support"],
            highlight: true
        },
        {
            name: "Custom Enterprise",
            price: "Custom",
            features: ["Microservices Architecture", "Advanced Security", "Payment Gateways", "30 Days Support", "Scalability Audit"],
            highlight: false
        }
    ];

    return (
        <>
            <Helmet>
                <title>Services — Ahsan Khan | MERN Stack Architect</title>
            </Helmet>

            <div className="bg-[#080808] text-[#e5e7eb] min-h-screen selection:bg-emerald-500/30 pb-20 font-sans overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 md:pt-40">
                    
                    {/* Header */}
                    <div className="text-center mb-16 md:mb-32 space-y-4">
                        <h2 className="text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase text-emerald-500">Expertise & Solutions</h2>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-tight">
                            CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-600 font-black">SERVICES.</span>
                        </h1>
                    </div>

                    {/* 1. Core Services Grid */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-40"
                    >
                        {coreServices.map((service, i) => (
                            <motion.div 
                                key={i}
                                variants={itemVariants}
                                className="group relative p-8 md:p-10 bg-[#111] rounded-[2rem] md:rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-700 hover:border-emerald-500/30"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative z-10">
                                    <div className="mb-6 md:mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 text-emerald-400 group-hover:text-black group-hover:bg-emerald-500 transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-200 transition-colors">{service.desc}</p>
                                    <ul className="space-y-3">
                                        {service.features.map((f, idx) => (
                                            <li key={idx} className="flex items-center text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-emerald-400/80 transition-colors">
                                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 shrink-0"></span> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* 2. Packages Section */}
                    <div className="mb-24 md:mb-40">
                        <div className="text-center mb-12 md:mb-20 space-y-4">
                            <h2 className="text-[10px] font-black tracking-[0.6em] uppercase text-emerald-500">Investment Tiers</h2>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase">Flexible Packages</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                            {pricingPackages.map((pkg, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className={`relative p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border transition-all duration-500 group overflow-hidden ${
                                        pkg.highlight 
                                        ? 'bg-[#111] border-emerald-500 shadow-xl' 
                                        : 'bg-[#0c0c0c] border-white/5'
                                    }`}
                                >
                                    <h3 className="text-emerald-500 text-[10px] font-black tracking-widest uppercase mb-4 md:mb-6">{pkg.name}</h3>
                                    <div className="text-4xl md:text-5xl font-black text-white mb-6 md:mb-8 tracking-tighter">{pkg.price}</div>
                                    
                                    <ul className="space-y-4 mb-8 md:mb-12">
                                        {pkg.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-tight">
                                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to="/contact">
                                        <button className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
                                            pkg.highlight ? 'bg-emerald-500 text-black' : 'bg-white/5 text-white hover:bg-white/10'
                                        }`}>
                                            Get Started <ArrowRight size={14} />
                                        </button>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 3. Engineering Process */}
                    <div className="mb-24 md:mb-40">
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-6 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase">Engineering Process</h2>
                            <p className="text-slate-500 max-w-sm text-sm italic">"Systematic thinking for complex problems."</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {[
                                { step: "01", title: "Discovery", icon: <Search size={20}/>, desc: "Scope definition." },
                                { step: "02", title: "Architecture", icon: <Code size={20}/>, desc: "Schema design." },
                                { step: "03", title: "Development", icon: <Terminal size={20}/>, desc: "Agile sprints." },
                                { step: "04", title: "QA & Testing", icon: <Zap size={20}/>, desc: "Rigorous testing." },
                                { step: "05", title: "Deployment", icon: <Rocket size={20}/>, desc: "Production launch." },
                            ].map((step, i) => (
                                <div key={i} className="group relative p-6 md:p-8 bg-[#111] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500">
                                    <span className="relative z-10 text-3xl md:text-4xl font-black text-white/5 block mb-4 group-hover:text-emerald-500/20 transition-colors">{step.step}</span>
                                    <div className="relative z-10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
                                    <h4 className="relative z-10 text-base md:text-lg font-bold text-white mb-2">{step.title}</h4>
                                    <p className="relative z-10 text-[10px] md:text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. CTA Section */}
                    <div className="group relative p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-[#111] border border-white/5 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">Ready to start?</h3>
                            <p className="text-slate-400 max-w-xl mx-auto mb-8 md:mb-10 text-base md:text-lg font-light italic leading-relaxed">"Let's architect the next great solution together."</p>
                            
                            <Link to="/contact">
                                <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-emerald-500 text-black font-black text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] rounded-full uppercase hover:bg-emerald-400 transition-all active:scale-95">
                                    Request a Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
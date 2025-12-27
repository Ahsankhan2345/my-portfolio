import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebook, FaArrowUp, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

// Apni image ka sahi path yahan check karlein
import profilePic from "/ahsan-profile1.png"; 

export default function SimpleFooter() {
    const currentYear = new Date().getFullYear();
    const yourName = "Ahsan Khan";

    const socialIcons = [
        { icon: FaTwitter, href: "https://x.com/Ahsankhan5232", label: "X", color: "hover:text-[#1DA1F2]" },
        { icon: FaFacebook, href: "https://www.facebook.com/ahsan.khan.857681", label: "Facebook", color: "hover:text-[#1877F2]" },
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ahsan-khan-04a8a0279/", label: "LinkedIn", color: "hover:text-[#0077B5]" },
        { icon: FaInstagram, href: "https://www.instagram.com/ahsankhan___23/", label: "Instagram", color: "hover:text-[#E4405F]" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#080808] border-t border-white/5 pt-20 pb-10 overflow-hidden">
            
            {/* AI-Inspired Neural Glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none opacity-50"></div>
            <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
                    
                    {/* Brand Section with Profile Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center md:items-start gap-4"
                    >
                        <div className="flex items-center gap-4 group cursor-pointer">
                            {/* Profile Image with Neural Pulse */}
                            <div className="relative">
                                <div className="absolute -inset-1 bg-emerald-500/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative w-16 h-16 rounded-2xl border-2 border-emerald-500/50 overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                                    <img 
                                        src={profilePic} 
                                        alt={yourName} 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                {/* AI Status indicator */}
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#080808] rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-white tracking-tighter uppercase leading-tight group-hover:text-emerald-400 transition-colors">
                                    {yourName}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] leading-tight">
                                        MERN & AI Architect
                                    </span>
                                    <FaRobot className="text-emerald-500/50 animate-bounce text-[10px]" />
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm max-w-sm text-center md:text-left font-medium leading-relaxed">
                            Crafting intelligent full-stack architectures by merging robust MERN engineering with cutting-edge AI solutions.
                        </p>
                    </motion.div>

                    {/* Social Interaction Grid */}
                    <div className="grid grid-cols-4 gap-4">
                        {socialIcons.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -10, scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`w-14 h-14 flex items-center justify-center bg-white/[0.02] border border-white/5 rounded-2xl text-slate-400 transition-all duration-300 ${item.color} hover:border-emerald-500/40 hover:bg-emerald-500/5 shadow-2xl shadow-black group`}
                            >
                                <item.icon size={22} className="transition-transform duration-500" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Animated Divider */}
                <div className="relative w-full h-[1px] bg-white/5 mb-10 overflow-hidden">
                    <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"
                    />
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.25em]">
                            &copy; {currentYear} ALL RIGHTS RESERVED
                        </p>
                        <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">
                           Curated by <span className="text-emerald-500">Ahsan Khan</span>
                        </p>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -3 }}
                        className="group flex items-center gap-4 px-6 py-3 bg-white/[0.02] border border-white/5 rounded-full hover:border-emerald-500/30 transition-all"
                    >
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-emerald-400 transition-colors">
                            Scroll to Top
                        </span>
                        <div className="text-emerald-500 group-hover:animate-bounce">
                            <FaArrowUp size={12} />
                        </div>
                    </motion.button>
                </div>

            </div>
        </footer>
    );
}
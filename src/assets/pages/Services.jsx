import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
    FaLaptopCode,
    FaRocket,
    FaCodeBranch,
    FaHandshake,
    FaClipboardList,
    FaChartLine,
    FaCogs,
    FaSearch,
    FaPenNib
} from "react-icons/fa";

// Animation Variants (No changes needed here, they are fine)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

// Dummy FaCheck icon (must be outside the component or imported properly)
const FaCheck = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>;


export default function Services() {
    // --- Service Data (No changes needed, data is perfect) ---
    
    const coreServices = [
        {
            title: "Full-Stack MVP Development",
            icon: <FaLaptopCode size={24} className="text-blue-400" />,
            desc: "End-to-end MERN Stack development for launching Minimum Viable Products quickly and efficiently. Scalable architecture from day one.",
            features: ["React/Tailwind Frontend", "Node/Express REST API", "MongoDB Setup"],
            tag: "Primary",
            color: "border-blue-500/50"
        },
        {
            title: "API & Backend Architecture",
            icon: <FaCogs size={24} className="text-green-500" />,
            desc: "Designing secure, high-performance RESTful APIs. Focus on clean code, JWT authentication, and database optimization.",
            features: ["Microservices Approach", "Auth & Security Implementation", "Performance Tuning"],
            tag: "Specialized",
            color: "border-green-500/50"
        },
        {
            title: "React UI/UX Implementation",
            icon: <FaPenNib size={24} className="text-pink-500" />,
            desc: "Transforming design mockups (Figma, Sketch) into pixel-perfect, highly responsive, and dynamic React components using Tailwind CSS.",
            features: ["Mobile-First Design", "Advanced State Management", "Cross-Browser Compatibility"],
            tag: "Frontend",
            color: "border-pink-500/50"
        },
    ];

    const packages = [
        {
            name: "Starter (Consultation & Audit)",
            price: "$250 (Flat Rate)",
            desc: "Perfect for defining project scope, technology roadmaps, and reviewing existing codebases.",
            features: ["1-hour Discovery Session", "Tech Stack Recommendation", "Detailed Project Blueprint"],
            color: "from-gray-600 to-gray-800"
        },
        {
            name: "MVP Launch (Full-Stack)",
            price: "Custom Quote",
            desc: "Complete development of your initial web application product (MVP), ready for user testing and funding.",
            features: ["Core Services Included", "Deployment & Hosting Setup", "30 Days Post-Launch Support"],
            color: "from-purple-600 to-blue-500"
        },
        {
            name: "Backend Scaling & Optimization",
            price: "Custom Quote",
            desc: "Focus on increasing the speed, scalability, and security of your existing Node.js application.",
            features: ["Database Indexing", "API Stress Testing", "Security Review"],
            color: "from-cyan-500 to-teal-400"
        },
    ];

    const processSteps = [
        { step: 1, title: "Discovery & Planning", icon: <FaSearch className="text-blue-400" />, desc: "Discuss goals, define scope, and prepare technical documentation." },
        { step: 2, title: "Architecture & Design", icon: <FaClipboardList className="text-purple-400" />, desc: "Design database schemas, API endpoints, and system architecture." },
        { step: 3, title: "Development Sprints", icon: <FaCodeBranch className="text-green-500" />, desc: "Agile development in short cycles with regular progress updates." },
        { step: 4, title: "Testing & Review", icon: <FaRocket className="text-red-400" />, desc: "Thorough testing (unit & integration) and client feedback integration." },
        { step: 5, title: "Deployment & Launch", icon: <FaChartLine className="text-cyan-400" />, desc: "Deploying the final product to your preferred hosting (Vercel/AWS/Heroku)." },
    ];

    return (
        <>
            <Helmet>
                <title>Ahsan Khan — Services & Packages | MERN Stack Freelancer</title>
                <meta
                    name="description"
                    content="Professional MERN Stack development services including React frontend, Node.js backend, and complete web application architecture."
                />
            </Helmet>

            {/* MAIN SECTION */}
            <section 
                id="services" 
                className="relative pt-0 w-full overflow-hidden font-[Poppins,sans-serif] bg-[#0b0b12]"
            >
                
                {/* 1. Animated Gradient Background (Z-10) */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-black via-[#0b0b12] to-[#0b0820] animate-gradientBackground"></div>
                
                {/* 2. Dark Overlay for Contrast (Z-20) */}
                <div className="absolute inset-0 bg-black/50 z-20"></div>

                {/* Main Content Area (Z-30) */}
                <section className="relative w-full min-h-screen text-white px-4 sm:px-8 md:px-16 pt-24 sm:pt-28 pb-20 overflow-hidden z-30">
                    <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24">
                        
                        {/* ---------------------------------------------------- */}
                        {/* 1. CORE SERVICES (THE VALUE PROPOSITION) */}
                        {/* ---------------------------------------------------- */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={containerVariants}
                            className="pt-10"
                        >
                            <motion.h2 
                                variants={itemVariants}
                                className="text-3xl md:text-5xl font-extrabold mb-4 text-center"
                            >
                                MERN Stack {" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                                    Development
                                </span>
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                                I translate complex business ideas into high-performance, scalable web applications.
                            </motion.p>

                            {/* Responsive Grid: 1 Column -> 2 Columns -> 3 Columns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {coreServices.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ y: -6, boxShadow: "0 10px 40px rgba(100,50,200,0.2)" }}
                                        className={`p-6 bg-white/5 border-t-4 ${service.color} rounded-xl space-y-4 backdrop-blur-sm cursor-pointer transition-shadow duration-300`}
                                    >
                                        <div className="flex items-center gap-3">
                                            {service.icon}
                                            <h3 className="text-lg sm:text-xl font-bold text-white">
                                            {service.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-300 text-sm">{service.desc}</p>
                                        
                                        <ul className="text-sm text-gray-400 list-disc list-inside space-y-1 pt-2">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="text-xs">{feature}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Horizontal Separator */}
                        <hr className="border-t border-gray-700/50 max-w-4xl mx-auto my-12 sm:my-20" />

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={containerVariants}
                        >
                            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-extrabold mb-10 text-center">
                                Flexible <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-500">
                                    Packages
                                </span>
                            </motion.h2>

                            {/* Responsive Grid: 1 Column -> 3 Columns (Stacked) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {packages.map((pkg, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        // Highlight the middle package responsively
                                        className={`p-6 sm:p-8 rounded-xl space-y-6 bg-gray-900 border border-purple-400/20 shadow-xl transition-all duration-300 
                                            ${index === 1 ? 'md:scale-[1.05] md:shadow-[0_0_60px_rgba(168,85,247,0.3)] bg-gradient-to-br from-gray-900 to-black/80' : ''}`}
                                    >
                                        <h3 className={`text-xl sm:text-2xl font-extrabold ${index === 1 ? 'text-blue-400' : 'text-white'}`}>
                                            {pkg.name}
                                        </h3>
                                        <p className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                                            {pkg.price}
                                        </p>
                                        <p className="text-gray-300 text-sm">{pkg.desc}</p>
                                        
                                        <ul className="space-y-3 text-sm text-gray-200 pt-3">
                                            {pkg.features.map((f, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <FaCheck className="text-green-400 mt-1 flex-shrink-0 w-4 h-4" /> {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <a 
                                            href="#contact"
                                            className={`block w-full text-center py-3 rounded-lg font-bold transition-all mt-6 sm:mt-8
                                                ${index === 1 ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-gray-900 hover:scale-[1.02]' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                                        >
                                            {index === 0 ? "Book a Session" : "Request Quote"}
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        
                        {/* Horizontal Separator */}
                        <hr className="border-t border-gray-700/50 max-w-4xl mx-auto my-12 sm:my-20" />

                       
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={containerVariants}
                            className="pt-10"
                        >
                            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-extrabold mb-12 text-center">
                                My <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
                                    Process
                                </span>
                            </motion.h2>
                            
                            <div className="relative flex flex-col items-center">
                                {/* Timeline Line (Hidden on Mobile, Visible on Desktop) */}
                                <div className="hidden md:block absolute h-full w-0.5 bg-gray-700 top-0 left-1/2 transform -translate-x-1/2"></div>
                                
                                <div className="w-full">
                                {processSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        // Alternating layout for medium screens and up
                                        className={`flex flex-col md:flex-row mb-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="md:w-1/2 p-4">
                                            <motion.div 
                                                className={`p-6 rounded-xl bg-gray-900 border border-gray-700/50 space-y-2 transition-all duration-300 hover:border-blue-400/50 
                                                    ${index % 2 === 0 ? 'md:text-right md:ml-auto md:max-w-md' : 'md:mr-auto md:max-w-md'}`}
                                                whileHover={{ y: -4 }}
                                            >
                                                <h4 className={`text-lg sm:text-xl font-bold text-white flex items-center gap-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                    {/* Icon Placement Logic */}
                                                    {index % 2 !== 0 && step.icon}
                                                    <span className={`text-xl sm:text-2xl font-extrabold ${step.icon.props.className.replace('text-', 'text-')}`}>{`0${step.step}.`}</span> {step.title}
                                                    {index % 2 === 0 && step.icon}
                                                </h4>
                                                <p className="text-gray-400 text-sm">{step.desc}</p>
                                            </motion.div>
                                        </div>
                                        
                                        {/* Circle Indicator (Desktop Only) */}
                                        <div className="hidden md:flex absolute top-0 h-full w-full items-start justify-center">
                                            <motion.div 
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className={`w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 shadow-xl border-2 border-gray-900 mt-8`}
                                            ></motion.div>
                                        </div>
                                        
                                        <div className="md:w-1/2"></div>
                                    </motion.div>
                                ))}
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Horizontal Separator */}
                        <hr className="border-t border-gray-700/50 max-w-4xl mx-auto my-12 sm:my-20" />

                    
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center py-10 sm:py-16 px-4 rounded-xl bg-gradient-to-r from-gray-900 to-black/80 border border-purple-500/30 shadow-2xl"
                        >
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Start Your Project?</h3>
                            <p className="text-base sm:text-lg text-gray-400 mb-8">
                                Let's discuss your vision and build the next great web application together.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white font-bold text-base sm:text-lg shadow-xl hover:scale-105 transition"
                            >
                                <FaHandshake className="w-5 h-5"/> Get a Free Consultation
                            </a>
                        </motion.div>
                        
                    </div>
                </section>
            </section>

            {/* ANIMATIONS (Same as About.jsx) */}
            <style>
                {`
                    @keyframes gradientBackground {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }
                    .animate-gradientBackground {
                        background-size: 400% 400%;
                        animation: gradientBackground 18s ease infinite;
                    }
                `}
            </style>
        </>
    );
}
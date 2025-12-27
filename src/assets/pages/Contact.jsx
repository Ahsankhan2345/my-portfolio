import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle, FaEnvelope, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    const url = `https://wa.me/923440217023?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-full min-h-screen bg-[#080808] font-sans selection:bg-emerald-500/30">
      
      {/* Background Video with subtle overlay */}
      <video
        src="/videos/bg-about1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      ></video>

      {/* Overlay - Gradient adds depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-transparent to-[#080808] backdrop-blur-[2px]"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE: Info & Branding */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Profile Card - Glass effect */}
            <div className="inline-flex items-center gap-4 p-3 pr-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl">
              <img
                src="/ahsan-profile1.png"
                alt="Ahsan Khan"
                className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              />
              <div>
                <h3 className="text-white font-bold tracking-tight">Ahsan Khan</h3>
                <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">Available for Hire</p>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none uppercase">
              Let’s build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-500">
                Something Great.
              </span>
            </h1>

            <p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
              Have an idea or a complex problem? I specialize in transforming visions into 
              <span className="text-white font-medium"> high-performance MERN Stack </span> solutions.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Modern & Responsive Interfaces",
                "Scalable Backend Architecture",
                "Security & Performance Audits"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300 font-medium tracking-tight">
                  <FaCheckCircle className="text-emerald-500" /> {item}
                </div>
              ))}
            </div>

            {/* Social Connect - Modern Pill Style */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="https://wa.me/923440217023" target="_blank" className="p-4 bg-emerald-500 text-black rounded-2xl hover:bg-emerald-400 transition-all hover:-translate-y-1 shadow-lg shadow-emerald-500/20">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ahsan-khan-04a8a0279/" target="_blank" className="p-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/ahsankhan___23/" target="_blank" className="p-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1">
                <FaInstagram size={24} />
              </a>
              <a href="mailto:ahsankhan523123@gmail.com" className="flex items-center gap-3 px-6 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1">
                <FaEnvelope className="text-emerald-400" /> <span className="text-sm font-bold uppercase tracking-widest">Email Me</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-[#111]/90 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Estimate Project</h2>
              <p className="text-slate-500 mb-8 text-sm uppercase tracking-[0.2em] font-black">Fill the details below</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-emerald-500 tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-emerald-500 tracking-widest ml-1">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-emerald-500 tracking-widest ml-1">Project Details</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell me about your goals..."
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group bg-emerald-500 hover:bg-emerald-400 text-black py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-emerald-500/10"
                >
                  Send Proposal <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
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
    <div className="relative w-full min-h-screen bg-[#080808] font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* Background Video - Opacity reduced for better readability on small screens */}
      <video
        src="/videos/bg-about1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-40"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-[#080808] backdrop-blur-[1px] md:backdrop-blur-[2px]"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">

          {/* LEFT SIDE: Info & Branding */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-10 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Profile Card - Centered on mobile */}
            <div className="inline-flex items-center gap-4 p-2 md:p-3 pr-6 md:pr-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl mx-auto lg:mx-0">
              <img
                src="/ahsan-profile1.png"
                alt="Ahsan Khan"
                className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              />
              <div className="text-left">
                <h3 className="text-white text-sm md:text-base font-bold tracking-tight">Ahsan Khan</h3>
                <p className="text-emerald-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest">Available for Hire</p>
              </div>
            </div>

            {/* Title - Scaled for mobile */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight uppercase">
              Let’s build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-500">
                Something Great.
              </span>
            </h1>

            <p className="text-slate-400 text-base md:text-lg max-w-md font-light leading-relaxed mx-auto lg:mx-0">
              Have an idea or a complex problem? I specialize in transforming visions into 
              <span className="text-white font-medium"> high-performance MERN Stack </span> solutions.
            </p>

            {/* Features List - Hidden or simplified on tiny screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-left max-w-sm mx-auto lg:mx-0">
              {[
                "Modern & Responsive Interfaces",
                "Scalable Backend Architecture",
                "Security & Performance Audits"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm md:text-base font-medium tracking-tight">
                  <FaCheckCircle className="text-emerald-500 shrink-0" /> {item}
                </div>
              ))}
            </div>

            {/* Social Connect - Wrap on small devices */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-4">
              <div className="flex gap-3">
                <SocialIcon href="https://wa.me/923440217023" Icon={FaWhatsapp} primary />
                <SocialIcon href="https://www.linkedin.com/in/ahsan-khan-04a8a0279/" Icon={FaLinkedin} />
                <SocialIcon href="https://www.instagram.com/ahsankhan___23/" Icon={FaInstagram} />
              </div>
              <a href="mailto:ahsankhan523123@gmail.com" className="flex items-center gap-3 px-5 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all text-xs md:text-sm font-bold uppercase tracking-widest">
                <FaEnvelope className="text-emerald-400" /> Email Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group order-1 lg:order-2"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-[2rem] md:rounded-[2.5rem] blur opacity-10 md:opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-[#111]/90 backdrop-blur-3xl border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Estimate Project</h2>
              <p className="text-slate-500 mb-6 md:mb-8 text-[10px] md:text-sm uppercase tracking-[0.2em] font-black">Fill the details below</p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <InputField label="Full Name" name="name" type="text" placeholder="e.g. John Doe" value={form.name} onChange={handleChange} />
                <InputField label="Work Email" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} />
                
                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black uppercase text-emerald-500 tracking-widest ml-1">Project Details</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell me about your goals..."
                    className="w-full bg-white/5 border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all resize-none text-sm md:text-base"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group bg-emerald-500 hover:bg-emerald-400 text-black py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-emerald-500/10"
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

// Sub-Components for cleaner code
function SocialIcon({ href, Icon, primary }) {
  return (
    <a href={href} target="_blank" className={`p-3 md:p-4 rounded-2xl transition-all hover:-translate-y-1 shadow-lg ${primary ? 'bg-emerald-500 text-black shadow-emerald-500/20' : 'bg-white/5 border border-white/10 text-white'}`}>
      <Icon size={20} className="md:w-6 md:h-6" />
    </a>
  );
}

function InputField({ label, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-[9px] md:text-[10px] font-black uppercase text-emerald-500 tracking-widest ml-1">{label}</label>
      <input
        {...props}
        required
        className="w-full bg-white/5 border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 transition-all text-sm md:text-base"
      />
    </div>
  );
}
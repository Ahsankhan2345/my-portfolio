import { useState } from "react";
import { FaWhatsapp, FaCheckCircle, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

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
    const msg = `Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;
    const url = `https://wa.me/923001234567?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">

      {/* ---------------- BACKGROUND VIDEO ---------------- */}
      <video
        src="/videos/bg-about1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* ---------------- DARK + BLUR OVERLAY ---------------- */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="relative w-full min-h-screen flex items-center justify-center py-12 px-4 md:px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ---------------- LEFT SECTION ---------------- */}
          <div className="flex flex-col justify-center text-white space-y-6">

            {/* Profile Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 flex items-center gap-4 shadow-xl">
              <img
                src="/ahsan-profile1.png"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-white/40"
              />
              <div>
                <h3 className="text-xl font-semibold">Ahsan Khan</h3>
                <p className="text-white/70 text-sm md:text-base">Professional Web Developer</p>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
              Get in Touch <br />
              Let’s Build Something <br />
              Amazing Together
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-base md:text-lg max-w-md">
              Whether you need a new website, want to improve your existing one,
              or need a reliable developer — I’m here to help.
              <br />
              <span className="font-semibold text-white">I respond within 24 hours.</span>
            </p>

            {/* Bullet Points */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 text-base md:text-lg">
                <FaCheckCircle className="text-green-400" /> Modern & Responsive Websites
              </div>
              <div className="flex items-center gap-2 text-base md:text-lg">
                <FaCheckCircle className="text-green-400" /> Complete Frontend / Backend Solutions
              </div>
              <div className="flex items-center gap-2 text-base md:text-lg">
                <FaCheckCircle className="text-green-400" /> Website Fixing & Performance Optimization
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-xl shadow-md flex items-center gap-2 justify-center">
                <FaInstagram size={20} /> Connect on Instagram
              </button>

              <button className="w-full sm:w-auto bg-gradient-to-r from-[#2ad05f] to-[#0ca73f] text-white px-6 py-3 rounded-xl shadow-md flex items-center gap-2 justify-center">
                <FaWhatsapp size={20} /> Chat on WhatsApp
              </button>
            </div>

            <div className="mt-4 w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl shadow-md flex items-center gap-2 justify-center">
                <FaLinkedin size={20} /> Connect on LinkedIn
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mt-6 text-white/90">
            Prefer Email?
              <FaEnvelope size={22} className="text-yellow-300" />
              <span className="text-base md:text-lg">ahsankhan523123@gmail.com</span>
            </div>
          </div>

          {/* ---------------- RIGHT FORM ---------------- */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl w-full">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Send Me a Message
            </h2>

            <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
              Fill out the form and I’ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 md:p-3.5 border border-gray-300 rounded-xl focus:outline-blue-500 focus:ring-2 focus:ring-blue-400 transition"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your professional email"
                className="w-full p-3 md:p-3.5 border border-gray-300 rounded-xl focus:outline-blue-500 focus:ring-2 focus:ring-blue-400 transition"
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Write your requirements and goals about your business and project..."
                className="w-full p-3 md:p-3.5 border border-gray-300 rounded-xl focus:outline-blue-500 focus:ring-2 focus:ring-blue-400 transition"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
              >
                Send via WhatsApp <FaWhatsapp size={20} />
              </button>

            </form>
          </div>

        </div>
      </div>

    </div>
  );
}

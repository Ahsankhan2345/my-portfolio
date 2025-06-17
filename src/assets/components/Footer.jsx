import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Contact Info
        </motion.h2>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg"
        >
          <a href="tel:03440217023" className="flex items-center gap-2 hover:text-blue-400 transition">
            <FaPhoneAlt /> 0344-0217023
          </a>
          <a
            href="https://maps.google.com/?q=Ali+Town,+Lahore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaMapMarkerAlt /> Ali Town, Lahore
          </a>
          <a
            href="https://wa.me/923440217023"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-2xl mt-4">
          <a href="https://www.facebook.com/ahsan.khan.857681" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/ahsankhan___23/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/ahsan-khan-04a8a0279/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Ahsankhan5232" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <p className="text-sm text-gray-500 mt-6">© {new Date().getFullYear()} Ahsan Khan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

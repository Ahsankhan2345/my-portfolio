import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_5ci8kei",
        "template_5wqieux",
        formData,
        "aKGcGIhdKbaHthGS_"
      )
      .then(() => {
        toast.success(" Message sent successfully!", {
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#fff",
            borderRadius: "8px",
          },
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error(" Failed to send message. Try again later.", {
          duration: 4000,
          style: {
            background: "#7f1d1d",
            color: "#fff",
            borderRadius: "8px",
          },
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-10">
          Have a project or want to connect? Let’s talk!
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gray-900 rounded-2xl p-8 shadow-xl space-y-6 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white py-3 rounded-xl font-semibold transition`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left"
        >
          {[
            {
              icon: (
                <MdPhone className="text-3xl text-green-400 group-hover:scale-110 transition-transform" />
              ),
              label: "Phone",
              value: "0344-0217023",
              href: "tel:03440217023",
            },
            {
              icon: (
                <MdEmail className="text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
              ),
              label: "Email",
              value: "ahsankhan523123@gmail.com",
              href: "mailto:ahsankhan523123@gmail.com",
            },
            {
              icon: (
                <MdLocationOn className="text-3xl text-yellow-400 group-hover:scale-110 transition-transform" />
              ),
              label: "Location",
              value: "Ali Town, Lahore",
              href: "https://www.google.com/maps/place/Ali+Town,+Lahore",
            },
            {
              icon: (
                <FaLinkedin className="text-3xl text-blue-500 group-hover:scale-110 transition-transform" />
              ),
              label: "LinkedIn",
              value: "linkedin.com/in/ahsan-khan-04a8a0279",
              href: "https://www.linkedin.com/in/ahsan-khan-04a8a0279",
            },
            {
              icon: (
                <FaWhatsapp className="text-3xl text-green-400 group-hover:scale-110 transition-transform" />
              ),
              label: "WhatsApp",
              value: "Chat on WhatsApp",
              href: "https://wa.me/923440217023",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-gray-800 hover:bg-gray-700 transition p-4 rounded-xl border border-gray-700 hover:shadow-md"
            >
              {item.icon}
              <div>
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="font-medium text-white">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;

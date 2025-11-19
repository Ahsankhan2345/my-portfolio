import { FaTwitter, FaXing, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";

export default function SimpleFooter() {
    const currentYear = new Date().getFullYear();
    const yourName = "Ahsan Khan";

    const socialIcons = [
        { icon: FaXing, href: "https://x.com/Ahsankhan5232", label: "X (Twitter)" },
        { icon: FaFacebook, href: "https://www.facebook.com/ahsan.khan.857681", label: "Facebook" },
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ahsan-khan-04a8a0279/", label: "LinkedIn" },
        { icon: FaInstagram, href: "https://www.instagram.com/ahsankhan___23/", label: "Instagram" },
    ];

    return (
        <footer className="
            bg-transparent 
            backdrop-blur-md 
            text-gray-400 
            py-6 
            border-t border-white/20
        ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Left Section: Logo/Name */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold text-lg">
                            AK
                        </div>

                        <span className="text-white text-lg font-semibold">
                            Ahsan Khan
                        </span>
                    </div>

                    {/* Middle Section */}
                    <p className="text-sm text-gray-300 order-last sm:order-none">
                        Copyright {currentYear} &copy; {yourName}
                    </p>

                    {/* Right Section: Social Icons */}
                    <div className="flex space-x-4">
                        {socialIcons.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200 text-xl"
                                aria-label={item.label}
                            >
                                <item.icon />
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
}

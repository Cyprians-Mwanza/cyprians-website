import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Topbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      id="topbar"
      className={`bg-gray-900 text-gray-300 text-sm transition-all duration-300 ${
        show ? "h-14 opacity-100" : "h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Left - Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition transform hover:scale-110"
          >
            <FaGithub size={26} className="text-gray-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition transform hover:scale-110"
          >
            <FaLinkedin size={26} className="text-blue-700" />
          </a>
          <a
            href="https://wa.me/254798770210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition transform hover:scale-110"
          >
            <FaWhatsapp size={26} className="text-green-500" />
          </a>
        </div>

       {/* Right - Email & Phone */}
<div className="hidden sm:flex space-x-8 items-center text-gray-200">
  <div className="flex items-center space-x-2">
    <MdEmail size={22} className="text-red-400" />
    <span className="text-sm sm:text-base font-medium">cypriansmwanza</span>
  </div>
  <div className="flex items-center space-x-2">
    <MdPhone size={22} className="text-yellow-400" />
    <span className="text-sm sm:text-base font-medium">+254 798 770 210</span>
  </div>
</div>

      </div>
    </div>
  );
};

export default Topbar;

// === src/components/Topbar.js ===
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Topbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // scrolling down -> hide
      } else {
        setShow(true); // scrolling up -> show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-full bg-gray-900 text-white text-sm transition-all duration-500 ease-in-out z-50 ${
        show ? "h-14 opacity-100 translate-y-0" : "h-0 opacity-0 -translate-y-full overflow-hidden"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
        {/* Left - Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/cypriansmwanza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-xl transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/cypriansmwanza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-xl transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/254798770210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 text-xl transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Right - Email & Phone */}
        <div className="hidden sm:flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <MdEmail className="text-red-400 text-lg" />
            <span>cypriansmwanza@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <MdPhone className="text-yellow-400 text-lg" />
            <span>+254 798 770 210</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        
        {/* Left - Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin size={18} />
          </a>
          <a href="https://wa.me/254798770210" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* Right - Email & Phone */}
        <div className="hidden sm:flex space-x-6 items-center">
          <div className="flex items-center space-x-1">
            <MdEmail size={16} className="text-red-400" />
            <span>cypriansmwanza</span>
          </div>
          <div className="flex items-center space-x-1">
            <MdPhone size={16} className="text-yellow-400" />
            <span>+254 798 770 210</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

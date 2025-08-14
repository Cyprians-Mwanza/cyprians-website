import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed w-full top-[40px] z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Cyprian</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          <a
            href="resume.pdf"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>Contact</a>
            <a
              href="resume.pdf"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

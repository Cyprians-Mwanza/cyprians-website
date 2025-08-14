import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll direction to hide/show topbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowTopbar(false);
      } else {
        setShowTopbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const topbarHeight = showTopbar ? 40 : 0;

  return (
    <header
      className="bg-white shadow-md fixed w-full z-50 transition-all duration-300"
      style={{ top: `${topbarHeight}px` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Cyprian Mwanza</div>

        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex space-x-8 items-center font-medium">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </a>
          </nav>
        </div>

        {/* Resume Button */}
        <div className="hidden md:flex">
          <a
            href="resume.pdf"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
            Contact
          </a>
          <a
            href="resume.pdf"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

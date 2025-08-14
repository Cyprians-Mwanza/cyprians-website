// === src/components/Navbar.js ===
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);
  const [float, setFloat] = useState(0); // For floating effect

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide/show topbar
      if (currentY > lastScrollY && currentY > 50) setShowTopbar(false);
      else setShowTopbar(true);

      // Shadow on scroll
      setShadow(currentY > 10);

      // Floating effect (move navbar up slightly when scrolling down)
      if (currentY > lastScrollY && currentY > 20) setFloat(-5);
      else setFloat(0);

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const topbarHeight = showTopbar ? 48 : 0;

  return (
    <header
      className={`bg-white transition-all duration-500 ease-in-out fixed w-full z-50 ${
        shadow ? "shadow-xl" : "shadow-md"
      }`}
      style={{ top: `${topbarHeight}px`, transform: `translateY(${float}px)` }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center transition-all duration-500 ease-in-out">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Cyprian Mwanza</div>

        {/* Desktop Navigation */}
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
        className={`md:hidden bg-white shadow-md transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
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
    </header>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);
  const [float, setFloat] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#home", id: "home", label: "Home" },
    { href: "#about", id: "about", label: "About" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#skills", id: "skills", label: "Skills" },
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#education", id: "education", label: "Education" },
    { href: "#certifications", id: "certifications", label: "Certifications" },
    { href: "#leadership", id: "leadership", label: "Leadership" },
    { href: "#contact", id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide/show topbar
      setShowTopbar(!(currentY > lastScrollY && currentY > 50));

      // Shadow on scroll
      setShadow(currentY > 10);

      // Floating effect
      setFloat(currentY > lastScrollY && currentY > 20 ? -5 : 0);

      setLastScrollY(currentY);

      // Detect active section
      let currentSection = "home";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (currentY >= sectionTop && currentY < sectionTop + sectionHeight) {
            currentSection = link.id;
          }
        }
      });
      setActiveSection(currentSection);
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
          <nav className="flex space-x-6 items-center font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition ${
                  activeSection === link.id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </a>
            ))}
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition ${
                activeSection === link.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          ))}
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

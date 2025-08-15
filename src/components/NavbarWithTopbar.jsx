// === src/components/NavbarWithTopbar.js ===
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const NavbarWithTopbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopbar, setShowTopbar] = useState(false);
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
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      const scrollingUp = currentY < lastScrollY;
      const notTop = currentY > 50;
      const notBottom = currentY < maxScroll - 20;

      setShowTopbar(scrollingUp && notTop && notBottom);
      setShadow(currentY > 10);
      setFloat(!scrollingUp && currentY > 20 ? -5 : 0);
      setLastScrollY(currentY);

      // Active section detection
      let currentSection = "home";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop - 120;
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

  const linkClasses = (id) =>
    `relative transition-all duration-300 ease-in-out
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:w-full after:h-[2px] after:origin-left after:scale-x-0
     after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-pink-500
     after:bg-[length:200%_100%]
     after:transition-all after:duration-500 after:ease-in-out
     ${
       activeSection === id
         ? "text-blue-600 font-semibold opacity-100 after:scale-x-100 after:animate-shimmer"
         : "text-gray-700 hover:text-blue-600 opacity-70 hover:after:scale-x-100 hover:after:animate-shimmer"
     }`;

  return (
    <div className="fixed w-full z-50">
      {/* Topbar */}
      <div
        className={`w-full bg-gray-900 text-white text-sm transition-all duration-500 ease-in-out ${
          showTopbar
            ? "h-14 opacity-100 translate-y-0"
            : "h-0 opacity-0 -translate-y-full overflow-hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
          <div className="flex items-center space-x-4">
            <a href="https://github.com/cypriansmwanza" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-xl transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/cypriansmwanza" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-xl transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/254798770210" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 text-xl transition-colors">
              <FaWhatsapp />
            </a>
          </div>
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

      {/* Navbar */}
      <header
        className={`bg-white transition-all duration-500 ease-in-out ${
          shadow ? "shadow-xl" : "shadow-md"
        }`}
        style={{ transform: `translateY(${float}px)` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center transition-all duration-500 ease-in-out">
          <div className="text-2xl font-bold text-blue-600">Cyprian Mwanza</div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex space-x-6 items-center font-medium">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={linkClasses(link.id)}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resume */}
          <div className="hidden md:flex">
            <a
              href="resume.pdf"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-md transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClasses(link.id)} onClick={toggleMenu}>
                {link.label}
              </a>
            ))}
            <a href="resume.pdf" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition" onClick={toggleMenu}>
              Resume
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavbarWithTopbar;


import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [time, setTime] = useState(0);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse effect
  useEffect(() => {
    const handleMouse = (e) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Fade-in
  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 300);
    return () => clearTimeout(timer);
  }, []);

  // Time for blob floating
  useEffect(() => {
    const interval = setInterval(() => setTime((prev) => prev + 0.02), 20);
    return () => clearInterval(interval);
  }, []);

  const floatingTransform = (xAmp, yAmp, speed, phase = 0) => {
    const x = xAmp * Math.sin(time * speed + phase) + 0;
    const y = yAmp * Math.cos(time * speed + phase) + 0;
    return `translate(${x}px, ${y}px)`;
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden text-white bg-gray-900"
      style={{ opacity }}
    >
      {/* Floating Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <span
          className="absolute w-72 h-72 rounded-full opacity-40 filter blur-2xl top-10 left-10"
          style={{
            background: "linear-gradient(45deg, #ff9a9e, #fad0c4)",
            transform: floatingTransform(20, 15, 0.5),
          }}
        />
        <span
          className="absolute w-96 h-96 rounded-full opacity-30 filter blur-3xl top-20 right-20"
          style={{
            background: "linear-gradient(45deg, #a18cd1, #fbc2eb)",
            transform: floatingTransform(30, 20, 0.3, Math.PI),
          }}
        />
        <span
          className="absolute w-56 h-56 rounded-full opacity-35 filter blur-2xl bottom-10 left-32"
          style={{
            background: "linear-gradient(45deg, #fbc2eb, #a6c1ee)",
            transform: floatingTransform(15, 25, 0.7, Math.PI / 2),
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between w-full transition-opacity duration-1000"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      >
        {/* Left */}
        <div className="text-center md:text-left md:max-w-xl">
          {/* Static Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-yellow-400">Cyprian Mwanza</span>
          </h1>

          {/* Typewriter Line */}
          <div className="text-xl md:text-2xl mb-6">
            <Typewriter
              words={[
                "Software Engineer | Building modern, scalable, and user-friendly applications."
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300"
            >
              My Projects
            </a>
            <a
              href="resume.pdf"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg shadow hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-3xl">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transform hover:scale-125 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transform hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/254798770210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transform hover:scale-125 transition-all duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="mt-8 md:mt-0 md:ml-12 flex-shrink-0 transition-transform duration-700"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        >
          <img
            src={profilePic}
            alt="Cyprian Mwanza"
            className="w-56 md:w-72 max-w-full rounded-full shadow-2xl border-4 border-yellow-400 hover:scale-105 transform transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

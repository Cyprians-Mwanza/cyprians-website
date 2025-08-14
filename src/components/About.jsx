// === src/components/About.jsx ===
import React from "react";
import profilePic from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="Cyprian Mwanza"
            className="w-64 md:w-72 rounded-full shadow-2xl border-4 border-yellow-400 hover:scale-105 transform transition-all duration-500"
          />
        </div>

        {/* Right: Content */}
        <div className="md:max-w-xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m Cyprian Mwanza, a passionate Full Stack Developer and AI Enthusiast from Nairobi, Kenya.
            I have experience in building efficient, scalable, and user-friendly applications using technologies like React, Django, Tailwind CSS, and more.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I love solving real-world problems with code, exploring AI & machine learning, and creating products that make a difference.
          </p>
          <a
            href="resume.pdf"
            className="inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

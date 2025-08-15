// === src/components/Projects.jsx ===
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "WhatsApp Contribution Automation",
      description: "A system that automates payments and receipts for SACCOs, churches, and savings groups using WhatsApp.",
      tech: ["Django", "React", "AWS", "Docker", "CI/CD"],
      link: "#",
    },
    {
      title: "TechCodeVision Platform",
      description: "A talent discovery platform for developers to showcase projects, receive gifts, and get discovered by tech companies.",
      tech: ["Laravel", "PHP", "Tailwind CSS", "XAMPP", "MySQL"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and resume.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "#",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={item}
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-yellow-400 text-gray-900 px-2 py-1 rounded font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-yellow-400 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

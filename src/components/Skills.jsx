// === src/components/Skills.jsx ===
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    "Languages": ["JavaScript", "Python", "Dart", "Java", "SQL"],
    "Frameworks & Libraries": ["React", "Flutter", "Django", "Spring Boot"],
    "Databases": ["MySQL", "PostgreSQL"],
    "Containerization": ["Docker"],
    "Version Control": ["Git"],
    "Cloud Platforms": ["AWS"],
    "Development Practices": ["Microservices Architecture", "CI/CD", "Agile/Scrum"],
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              variants={item}
            >
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <ul className="list-disc list-inside space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-gray-200 hover:text-yellow-400 transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

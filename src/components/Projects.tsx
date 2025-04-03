import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

// Real projects data from the user's resume
const projects = [
  {
    title: "TypeScript Unused Imports Remover",
    description:
      "A utility tool that automatically removes unused import statements from TypeScript files, improving code cleanliness and build performance for TypeScript projects.",
    technologies: ["TypeScript", "Node.js", "CLI", "AST", "npm"],
    image: "/placeholders/project-1.svg",
    github: "https://github.com/zemmelMootez/ts-remove-unused-imports",
    demo: "https://www.npmjs.com/package/ts-remove-unused-imports",
    stats: {
      stars: 7,
      forks: 2,
      downloads: "1100+",
    },
  },
  {
    title: "Next.js Form Wizard",
    description:
      "A reusable form wizard component for Next.js applications with multi-step form validation and state management for better user experience.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Form Validation",
      "State Management",
    ],
    image: "/placeholders/project-2.svg",
    github: "https://github.com/zemmelMootez/next-form-wizard",
    demo: "https://www.npmjs.com/package/next-form-wizard",
    stats: {
      stars: 5,
      forks: 2,
      downloads: "400+",
    },
  },
  {
    title: "Distributed Application with Docker Swarm & Kafka",
    description:
      "A distributed application using Docker Swarm and Kafka with microservices architecture implemented with Spring Boot applications and comprehensive deployment configuration.",
    technologies: [
      "Java",
      "Spring Boot",
      "Docker Swarm",
      "Kafka",
      "Microservices",
    ],
    image: "/placeholders/project-3.svg",
    github:
      "https://github.com/zemmelMootez/Distributed-Application-Docker-Swarm-Kafka",
    demo: "https://github.com/zemmelMootez/Distributed-Application-Docker-Swarm-Kafka#readme",
    stats: {
      stars: 3,
      forks: 1,
    },
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center section-title"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-lg shadow-lg overflow-hidden ${
                isDark ? "bg-dark-light/70" : "bg-white/90"
              }`}
            >
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-full ${
                        isDark
                          ? "bg-dark text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 ${
                        isDark ? "text-primary" : "text-primary-light"
                      }`}
                    >
                      <FaGithub className="text-lg" />
                      <span>Code</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 ${
                        isDark ? "text-secondary" : "text-secondary-light"
                      }`}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Demo</span>
                    </motion.a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <FaStar
                        className={`mr-1 ${
                          isDark ? "text-yellow-400" : "text-yellow-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {project.stats.stars}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaCodeBranch
                        className={`mr-1 ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {project.stats.forks}
                      </span>
                    </div>
                    {project.stats.downloads && (
                      <div className="flex items-center">
                        <span
                          className={`text-sm ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {project.stats.downloads} downloads
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

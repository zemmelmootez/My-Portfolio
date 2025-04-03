import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaLaptopCode, FaServer, FaDatabase, FaDocker } from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center section-title"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div
              className={`mb-8 text-lg ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p className="mb-4">
                I'm Mootez Zemmel, a Fullstack Developer with a passion for
                building robust, scalable web applications. Currently pursuing
                my Engineering Degree in Computer Science at the Higher
                Institute of Applied Science and Technology in Sousse, Tunisia,
                while working professionally in the industry.
              </p>
              <p className="mb-4">
                With experience spanning frontend and backend technologies, I
                specialize in developing applications using modern frameworks
                and tools including React, Angular, Node.js, and various cloud
                platforms. I'm particularly interested in distributed systems,
                authentication mechanisms, and creating developer tools that
                improve workflow efficiency.
              </p>
              <p>
                Beyond coding, I enjoy sharing knowledge through technical
                writing and teaching - having worked as a Web Development
                Instructor at Gomycode, where I mentored students in full-stack
                development. I'm constantly learning and exploring new
                technologies to expand my skillset and tackle interesting
                challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-lg shadow-md ${
                  isDark ? "bg-dark-light/50" : "bg-white"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-3 flex items-center gap-2 ${
                    isDark ? "text-primary" : "text-primary-light"
                  }`}
                >
                  <FaLaptopCode />
                  Frontend Development
                </h3>
                <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Creating responsive, user-friendly interfaces with modern
                  frameworks like React and Angular. Emphasizing performance
                  optimization and accessibility.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-lg shadow-md ${
                  isDark ? "bg-dark-light/50" : "bg-white"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-3 flex items-center gap-2 ${
                    isDark ? "text-secondary" : "text-secondary-light"
                  }`}
                >
                  <FaServer />
                  Backend Engineering
                </h3>
                <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Building robust APIs and services with Node.js, Spring Boot,
                  and more. Focusing on security, scalability, and clean
                  architecture.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-lg shadow-md ${
                  isDark ? "bg-dark-light/50" : "bg-white"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-3 flex items-center gap-2 ${
                    isDark ? "text-work-dark" : "text-work-light"
                  }`}
                >
                  <FaDatabase />
                  Database Design
                </h3>
                <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Working with various database technologies including MongoDB,
                  MySQL, PostgreSQL, and more. Implementing efficient data
                  models and query optimization.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-lg shadow-md ${
                  isDark ? "bg-dark-light/50" : "bg-white"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-3 flex items-center gap-2 ${
                    isDark ? "text-education-dark" : "text-education-light"
                  }`}
                >
                  <FaDocker />
                  DevOps & Cloud
                </h3>
                <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Implementing CI/CD pipelines, containerization with Docker,
                  and orchestration with Kubernetes. Experience with server
                  administration and cloud platforms.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
              className={`p-6 rounded-lg shadow-md ${
                isDark ? "bg-dark-light/70" : "bg-white"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Personal Information
              </h3>
              <ul className="space-y-3">
                <li
                  className={`flex items-start gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span className="font-semibold min-w-24">Name:</span>
                  <span>Mootez Zemmel</span>
                </li>
                <li
                  className={`flex items-start gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span className="font-semibold min-w-24">Location:</span>
                  <span>Sousse, Tunisia</span>
                </li>
                <li
                  className={`flex items-start gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span className="font-semibold min-w-24">Email:</span>
                  <a
                    href="mailto:zemmel.mootez@gmail.com"
                    className={
                      isDark
                        ? "text-primary hover:underline"
                        : "text-primary-light hover:underline"
                    }
                  >
                    zemmel.mootez@gmail.com
                  </a>
                </li>
                <li
                  className={`flex items-start gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span className="font-semibold min-w-24">Languages:</span>
                  <span>
                    English (Fluent), Arabic (Native), French (Fluent)
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={`p-6 rounded-lg shadow-md ${
                isDark ? "bg-dark-light/70" : "bg-white"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Interests
              </h3>
              <ul className="space-y-2">
                <li
                  className={`flex items-center gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span>⚡ Distributed Systems & Architecture</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span>⚡ Developer Tooling & Automation</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span>⚡ Technical Writing & Education</span>
                </li>
                <li
                  className={`flex items-center gap-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <span>⚡ Open Source Contribution</span>
                </li>
              </ul>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-lg shadow-md ${
                isDark
                  ? "bg-gradient-to-br from-primary/20 to-secondary/20"
                  : "bg-gradient-to-br from-primary-light/10 to-secondary-light/10"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Current Focus
              </h3>
              <p
                className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                I'm currently focused on expanding my knowledge of distributed
                systems, authentication patterns, and developing tools that
                enhance developer productivity.
              </p>
              <a
                href="/contact"
                className={`inline-block mt-2 ${
                  isDark
                    ? "text-primary hover:text-primary/80"
                    : "text-primary-light hover:text-primary-light/80"
                }`}
              >
                Let's collaborate →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

// User's actual experience from their resume
const experiences = [
  {
    title: "Fullstack Developer",
    company: "Reportix GmbH",
    location: "Mannheim, Germany",
    period: "Feb 2024 - Present",
    type: "work",
    description:
      "Working as a Fullstack Developer to develop and maintain web applications and infrastructure.",
    achievements: [
      "Developed and maintained frontend features using JavaScript and Next.js",
      "Implemented and tested backend API endpoints using Quarkus",
      "Currently developing a CLI tool to enhance development workflow",
      "Collaborated with cross-functional teams to ensure code quality and testing standards",
      "Technical Skills: JavaScript, Next.js, Quarkus, Spring Boot, Docker, CI/CD",
    ],
  },
  {
    title: "Frontend Developer / Infrastructure Support",
    company: "Elbaladiya.tn",
    location: "Remote (Sousse, Tunisia)",
    period: "Apr 2023 - Jan 2024",
    type: "work",
    description:
      "Worked on frontend development and infrastructure support for a civic engagement platform.",
    achievements: [
      "Developed new features and maintained existing frontend applications",
      "Identified and resolved bugs to improve application stability",
      "Joined the infrastructure team to deploy and maintain the eTicket system for municipalities",
      "Provided server maintenance and support during deployments",
      "Implemented responsive design that increased mobile user engagement by 25%",
      "Reduced page load time by 35% through code optimization and asset compression",
      "Successfully deployed eTicket system to 16 municipalities, serving approximately 500,000 citizens",
      "Technical Skills: Angular, RxJS, Git, GitLab, Docker, Ansible, Linux",
    ],
  },
  {
    title: "Web Development Instructor",
    company: "Gomycode",
    location: "Sousse, Tunisia",
    period: "Jun 2022 - Feb 2024",
    type: "work",
    description:
      "Taught comprehensive web development courses covering frontend and backend technologies.",
    achievements: [
      "Taught comprehensive web development courses covering frontend and backend technologies",
      "Mentored students through hands-on projects and coding challenges",
      "Mentored over 150 students with a 95% course completion rate",
      "Developed 20+ hands-on projects used in curriculum",
      "Maintained an average student satisfaction score of 98% based on post-course surveys",
      "Technical Skills: HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, MongoDB",
    ],
  },
  {
    title: "Engineering Degree in Computer Science",
    company: "Higher Institute of Applied Science and Technology",
    location: "Sousse, Tunisia",
    period: "Sept 2020 - Jul 2025 (Expected)",
    type: "education",
    description:
      "Studying computer science with a focus on software engineering, algorithms, and systems design.",
    achievements: [
      "Participating in programming competitions and hackathons.",
      "Completed coursework in database systems, web development, and distributed systems.",
    ],
  },
  {
    title: "High School Diploma",
    company: "Sahline High School",
    location: "Monastir, Tunisia",
    period: "Sept 2016 - Jun 2020",
    type: "education",
    description:
      "Completed secondary education with a focus on mathematics and computer science.",
    achievements: [
      "Graduated with honors.",
      "Participated in national competitions in  computer science.",
      "Finished the web exam with a score of 100% in the national exam.",
    ],
  },
];

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center section-title"
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-0 md:left-1/2 h-full w-1 transform -translate-x-1/2 ${
              isDark ? "bg-primary/30" : "bg-primary-light/30"
            }`}
          ></div>

          {/* Timeline content */}
          <div className="relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
                key={index}
              >
                <div
                  className={`flex items-center justify-center absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full z-10 shadow-lg ${
                    exp.type === "education"
                      ? isDark
                        ? "bg-education-dark"
                        : "bg-education-light"
                      : isDark
                      ? "bg-work-dark"
                      : "bg-work-light"
                  }`}
                >
                  {exp.type === "education" ? (
                    <FaGraduationCap className="text-white text-xl" />
                  ) : (
                    <FaBuilding className="text-white text-xl" />
                  )}
                </div>

                <div
                  className={`md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`p-6 rounded-lg shadow-lg ${
                      isDark ? "bg-dark-light/70" : "bg-white/90"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3
                        className={`text-xl font-bold ${
                          exp.type === "education"
                            ? isDark
                              ? "text-education-dark"
                              : "text-education-light"
                            : isDark
                            ? "text-work-dark"
                            : "text-work-light"
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <div
                        className={`flex items-center text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <FaCalendarAlt className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div
                        className={`text-lg font-medium ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {exp.company}
                      </div>
                      <div
                        className={`flex items-center text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <FaMapMarkerAlt className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p
                      className={`mb-4 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>

                    <div>
                      <h4
                        className={`text-md font-medium mb-2 ${
                          isDark ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Key Achievements:
                      </h4>
                      <ul
                        className={`list-disc pl-5 ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="mb-1">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

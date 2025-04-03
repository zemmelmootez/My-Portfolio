import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiQuarkus,
  SiPhp,
  SiSymfony,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiLinux,
  SiApachekafka,
  SiPython,
  SiGraphql,
  SiJest,
  SiCypress,
  SiJasmine,
  SiFigma,
  SiAdobexd,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiGrafana,
  SiChartdotjs,
  SiSqlite,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

// Skills from the user's resume
const skills = {
  frontend: [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "AngularJS", icon: SiAngular, color: "#E23237" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
    { name: "Quarkus", icon: SiQuarkus, color: "#4695EB" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Symfony", icon: SiSymfony, color: "#000000" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Oracle", icon: SiOracle, color: "#F80000" },
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ],
  devops: [
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "GitLab", icon: SiGitlab, color: "#FCA121" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
    { name: "Grafana", icon: SiGrafana, color: "#F46800" },
  ],
  testing: [
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Cypress", icon: SiCypress, color: "#17202C" },
    { name: "Jasmine", icon: SiJasmine, color: "#8A4182" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ],
  design: [
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
  ],
};

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center section-title"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg ${
                isDark ? "bg-dark-light/70" : "bg-white/90"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-6 capitalize ${
                  isDark ? "text-primary" : "text-primary-light"
                }`}
              >
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {items.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-colors ${
                        isDark
                          ? "bg-dark hover:bg-dark-light"
                          : "bg-light-dark/30 hover:bg-light-dark/50"
                      }`}
                    >
                      <Icon
                        className="text-3xl"
                        style={{ color: skill.color }}
                      />
                      <span
                        className={`text-sm font-medium text-center ${
                          isDark ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

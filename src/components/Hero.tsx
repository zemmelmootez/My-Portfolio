import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiMedium, SiUpwork } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";
import Hero3DModel from "./Hero3DModel";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/zemmelMootez",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/zemmel-mootez/",
  },
  {
    name: "Medium",
    icon: SiMedium,
    url: "https://medium.com/@zemmel.mootez",
  },
  {
    name: "Upwork",
    icon: SiUpwork,
    url: "https://www.upwork.com/freelancers/~0107307c60d80b3c5b?mp_source=share",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:zemmel.mootez@gmail.com",
  },
];

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className={`absolute top-20 right-20 w-64 h-64 rounded-full ${
            isDark ? "bg-primary" : "bg-primary-light"
          } filter blur-3xl`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className={`absolute bottom-20 left-20 w-72 h-72 rounded-full ${
            isDark ? "bg-secondary" : "bg-secondary-light"
          } filter blur-3xl`}
        />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className={`text-xl md:text-2xl font-medium mb-4 ${
                  isDark ? "text-primary" : "text-primary-light"
                }`}
              >
                Hi, my name is
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Mootez Zemmel
              </h1>
              <h2
                className={`text-2xl md:text-3xl font-medium mb-6 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Full-Stack Developer & Infrastructure Engineer
              </h2>
              <p
                className={`text-base md:text-lg mb-8 max-w-lg ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm a passionate Full-Stack Developer with experience in
                developing and maintaining web applications and infrastructure.
                Specialized in creating efficient, scalable, and user-friendly
                solutions.
                <span className="block mt-2 font-semibold">
                  Available for new opportunities starting August 2025.
                </span>
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-md font-medium ${
                    isDark
                      ? "bg-primary !text-gray-900 hover:bg-opacity-90"
                      : "bg-primary-light !text-white hover:bg-opacity-90"
                  } transition-all`}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-md font-medium border-2 ${
                    isDark
                      ? "border-primary !text-primary hover:bg-primary/10"
                      : "border-primary-light !text-primary-light hover:bg-primary-light/10"
                  } transition-all`}
                >
                  View Projects
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={`text-2xl ${
                      isDark
                        ? "text-gray-400 hover:text-primary"
                        : "text-gray-600 hover:text-primary-light"
                    } transition-colors`}
                    aria-label={social.name}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 flex items-center justify-center relative"
          >
            <div className="w-full h-[600px]">
              <div className="w-full h-full">
                <Hero3DModel />
              </div>

              {/* 3D Experience Button for Mobile */}
              <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // You can add fullscreen functionality here if needed
                    document
                      .querySelector(".hero-3d-container")
                      ?.requestFullscreen();
                  }}
                  className={`px-4 py-2 rounded-md font-medium ${
                    isDark
                      ? "bg-primary text-gray-900 hover:bg-opacity-90"
                      : "bg-primary-light text-white hover:bg-opacity-90"
                  } transition-all shadow-lg flex items-center gap-2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                    />
                  </svg>
                  View in 3D
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div
          className={`w-6 h-10 border-2 ${
            isDark ? "border-gray-400" : "border-gray-600"
          } rounded-full flex justify-center`}
        >
          <motion.div
            className={`w-1 h-2 ${
              isDark ? "bg-gray-400" : "bg-gray-600"
            } rounded-full mt-2`}
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

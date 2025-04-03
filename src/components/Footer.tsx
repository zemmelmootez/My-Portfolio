import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${isDark ? "bg-dark-light" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p
              className={`text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © {currentYear} Mootez Zemmel. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/zemmelMootez"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl transition-colors ${
                isDark
                  ? "text-gray-400 hover:text-primary"
                  : "text-gray-600 hover:text-primary-light"
              }`}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/zemmel-mootez/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl transition-colors ${
                isDark
                  ? "text-gray-400 hover:text-primary"
                  : "text-gray-600 hover:text-primary-light"
              }`}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p
            className={`text-sm flex items-center justify-center ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Made with <FaHeart className="text-red-500 mx-1" /> using React &
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

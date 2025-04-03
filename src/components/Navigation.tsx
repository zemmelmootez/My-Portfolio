import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string, event: React.MouseEvent) => {
    event.preventDefault();
    setActiveSection(section);
    setMobileMenuOpen(false);

    const element = document.getElementById(section);
    if (element) {
      setTimeout(() => {
        const headerOffset = 80; // Height of the fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "articles", label: "Publications" },
    { id: "tutorials", label: "Tutorials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-dark/90 backdrop-blur-md shadow-md"
            : "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <a
            href="#hero"
            className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            onClick={(e) => handleNavClick("hero", e)}
          >
            MZ
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative transition-colors ${
                  activeSection === item.id
                    ? isDark
                      ? "text-primary"
                      : "text-primary-light"
                    : isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    className={`absolute bottom-0 left-0 h-0.5 w-full ${
                      isDark ? "bg-primary" : "bg-primary-light"
                    }`}
                    layoutId="activeSection"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? "bg-dark-light hover:bg-dark-light/80 text-primary"
                  : "bg-gray-200 hover:bg-gray-300 text-primary-light"
              }`}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 mr-2 rounded-full transition-colors ${
                isDark
                  ? "bg-dark-light hover:bg-dark-light/80 text-primary"
                  : "bg-gray-200 hover:bg-gray-300 text-primary-light"
              }`}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                isDark
                  ? "bg-dark-light hover:bg-dark-light/80 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-900"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden w-full ${
            isDark ? "bg-dark shadow-lg" : "bg-white shadow-lg"
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block py-2 px-4 rounded-md transition-colors ${
                      activeSection === item.id
                        ? isDark
                          ? "bg-dark-light text-primary"
                          : "bg-gray-100 text-primary-light"
                        : isDark
                        ? "text-gray-300 hover:bg-dark-light hover:text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                    onClick={(e) => handleNavClick(item.id, e)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navigation;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import About from "./components/About";
import Contact from "./components/Contact";
import YouTubeTutorials from "./components/YouTubeTutorials";
import InteractiveBackground from "./components/InteractiveBackground";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.3 });
  const [articlesRef, articlesInView] = useInView({ threshold: 0.3 });
  const [tutorialsRef, tutorialsInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (heroInView) setActiveSection("hero");
    else if (aboutInView) setActiveSection("about");
    else if (skillsInView) setActiveSection("skills");
    else if (experienceInView) setActiveSection("experience");
    else if (projectsInView) setActiveSection("projects");
    else if (articlesInView) setActiveSection("articles");
    else if (tutorialsInView) setActiveSection("tutorials");
    else if (contactInView) setActiveSection("contact");
  }, [
    heroInView,
    aboutInView,
    skillsInView,
    experienceInView,
    projectsInView,
    articlesInView,
    tutorialsInView,
    contactInView,
  ]);

  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans relative overflow-hidden bg-gradient-to-b from-light to-light-dark dark:from-dark dark:to-dark-light transition-colors duration-500">
        <InteractiveBackground />

        <div className="relative z-10">
          <Navigation
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <main>
            <motion.section
              ref={heroRef}
              initial={{ opacity: 0 }}
              animate={{
                opacity: heroInView || activeSection === "hero" ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Hero />
            </motion.section>

            <motion.section
              ref={aboutRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={activeSection === "about" ? "active" : ""}
            >
              <About />
            </motion.section>

            <motion.section
              ref={skillsRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={activeSection === "skills" ? "active" : ""}
            >
              <Skills />
            </motion.section>

            <motion.section
              ref={experienceRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={activeSection === "experience" ? "active" : ""}
            >
              <Experience />
            </motion.section>

            <motion.section
              ref={projectsRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={activeSection === "projects" ? "active" : ""}
            >
              <Projects />
            </motion.section>

            <motion.section
              ref={articlesRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={activeSection === "articles" ? "active" : ""}
            >
              <Articles />
            </motion.section>

            <motion.section
              ref={tutorialsRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={activeSection === "tutorials" ? "active" : ""}
            >
              <YouTubeTutorials />
            </motion.section>

            <motion.section
              ref={contactRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={activeSection === "contact" ? "active" : ""}
            >
              <Contact />
            </motion.section>
          </main>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

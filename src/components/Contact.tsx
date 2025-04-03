import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Format the email body with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `);

      // Open email client with pre-filled data
      window.location.href = `mailto:zemmel.mootez@gmail.com?subject=${subject}&body=${body}`;

      // Set success state
      setSubmitSuccess(true);
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitSuccess(false);
      }, 3000);
    } catch {
      setSubmitError(
        "There was an error opening your email client. Please try again or contact directly at zemmel.mootez@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title text-center mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDark ? "text-primary" : "text-primary-light"
              }`}
            >
              Contact Information
            </h3>
            <p className={`mb-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              I'm interested in freelance opportunities and full-time positions.
              If you have any questions or want to discuss potential
              collaborations, feel free to reach out!
            </p>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div
                  className={`p-3 rounded-full ${
                    isDark
                      ? "bg-dark-light text-primary"
                      : "bg-gray-200 text-primary-light"
                  }`}
                >
                  <FaEnvelope />
                </div>
                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:zemmel.mootez@gmail.com"
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-primary"
                        : "text-gray-600 hover:text-primary-light"
                    }`}
                  >
                    zemmel.mootez@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div
                  className={`p-3 rounded-full ${
                    isDark
                      ? "bg-dark-light text-primary"
                      : "bg-gray-200 text-primary-light"
                  }`}
                >
                  <FaPhone />
                </div>
                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Phone
                  </h4>
                  <a
                    href="tel:+4915510231855"
                    className={`${
                      isDark
                        ? "text-gray-300 hover:text-primary"
                        : "text-gray-600 hover:text-primary-light"
                    }`}
                  >
                    +49 155 10231855
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div
                  className={`p-3 rounded-full ${
                    isDark
                      ? "bg-dark-light text-primary"
                      : "bg-gray-200 text-primary-light"
                  }`}
                >
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4
                    className={`text-lg font-semibold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Location
                  </h4>
                  <p
                    className={`${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Mannheim, Germany
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12">
              <h4
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Connect on Social Media
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/zemmel-mootez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`p-3 rounded-full ${
                    isDark
                      ? "bg-dark-light text-gray-300 hover:text-primary"
                      : "bg-gray-200 text-gray-600 hover:text-primary-light"
                  }`}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://github.com/zemmelMootez"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`p-3 rounded-full ${
                    isDark
                      ? "bg-dark-light text-gray-300 hover:text-primary"
                      : "bg-gray-200 text-gray-600 hover:text-primary-light"
                  }`}
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href="https://medium.com/@zemmel.mootez"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`p-3 rounded-full ${
                    isDark
                      ? "bg-dark-light text-gray-300 hover:text-primary"
                      : "bg-gray-200 text-gray-600 hover:text-primary-light"
                  }`}
                >
                  <SiMedium />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDark ? "text-primary" : "text-primary-light"
              }`}
            >
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? "bg-dark-light text-white border-gray-700 focus:border-primary focus:ring-primary"
                      : "bg-white text-gray-900 border-gray-300 focus:border-primary-light focus:ring-primary-light"
                  } border focus:outline-none focus:ring-1`}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? "bg-dark-light text-white border-gray-700 focus:border-primary focus:ring-primary"
                      : "bg-white text-gray-900 border-gray-300 focus:border-primary-light focus:ring-primary-light"
                  } border focus:outline-none focus:ring-1`}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className={`block mb-2 text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? "bg-dark-light text-white border-gray-700 focus:border-primary focus:ring-primary"
                      : "bg-white text-gray-900 border-gray-300 focus:border-primary-light focus:ring-primary-light"
                  } border focus:outline-none focus:ring-1`}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 text-sm font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDark
                      ? "bg-dark-light text-white border-gray-700 focus:border-primary focus:ring-primary"
                      : "bg-white text-gray-900 border-gray-300 focus:border-primary-light focus:ring-primary-light"
                  } border focus:outline-none focus:ring-1`}
                />
              </div>

              {submitError && (
                <div className="text-red-500 text-sm">{submitError}</div>
              )}

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-sm"
                >
                  Your email client has been opened with your message details!
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg font-semibold text-center ${
                  isDark
                    ? "!bg-primary text-black hover:bg-primary/90 shadow-md"
                    : "!bg-primary-light text-white hover:bg-primary-light/90 shadow-md"
                } transition-all w-full disabled:opacity-70 border-2 ${
                  isDark ? "border-primary/30" : "border-primary-light/30"
                }`}
              >
                {isSubmitting ? "Opening Email..." : "Compose Email"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

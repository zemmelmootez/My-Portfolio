import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaRegThumbsUp,
  FaRegComment,
  FaRegBookmark,
} from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

// Real articles data from the user's resume
const articles = [
  {
    id: 1,
    title: "Implementing Keycloak Authentication in a Next.js Application",
    excerpt:
      "Authored a comprehensive tutorial on integrating Keycloak authentication with Next.js applications, demonstrating secure user authentication flows and best practices for implementation.",
    date: "March 2024",
    link: "https://medium.com/p/0033a6569ec2",
    image: "/placeholders/article-1.jpg",
    readTime: "10 min read",
    stats: {
      likes: 142,
      comments: 23,
      views: "3400+ views, 2000+ reads",
    },
    tags: [
      "Next.js",
      "Keycloak",
      "OAuth 2.0",
      "OpenID Connect",
      "Authentication",
    ],
    codeSnippet: {
      language: "javascript",
      code: `// Middleware for protecting routes in Next.js
export default function middleware(req) {
  const session = getSession(req);
  
  // Check if user is authenticated for protected routes
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    const url = new URL('/api/auth/login', req.url);
    url.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}`,
    },
  },
  {
    id: 2,
    title: "Building a Distributed Application with Docker Swarm and Kafka",
    excerpt:
      "Created a technical guide on developing distributed systems using Docker Swarm and Kafka, exploring microservice architecture patterns and event-driven communication.",
    date: "February 2024",
    link: "https://medium.com/p/291f0bd5207e",
    image: "/placeholders/article-2.jpg",
    readTime: "12 min read",
    stats: {
      likes: 98,
      comments: 14,
      views: "1800+ views",
    },
    tags: [
      "Docker Swarm",
      "Kafka",
      "Microservices",
      "Event Streaming",
      "Distributed Systems",
    ],
    codeSnippet: {
      language: "typescript",
      code: `// Producer service sending messages to Kafka
const produceMessage = async (topic: string, message: any) => {
  try {
    const producer = kafka.producer();
    await producer.connect();
    
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }]
    });
    
    await producer.disconnect();
    console.log('Message published to Kafka');
  } catch (error) {
    console.error('Error producing message:', error);
  }
};`,
    },
  },
];

const Articles = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="articles" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title text-center mb-16"
        >
          Publications
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`overflow-hidden rounded-xl shadow-lg ${
                isDark ? "bg-dark-light/40" : "bg-white"
              }`}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <SiMedium
                    size={24}
                    className={isDark ? "text-primary" : "text-primary-light"}
                  />
                  <span
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {article.date} · {article.readTime}
                  </span>
                </div>

                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {article.title}
                </h3>

                <p
                  className={`mb-6 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDark
                          ? "bg-dark text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-6 rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    language={article.codeSnippet.language}
                    style={isDark ? oneDark : oneLight}
                    customStyle={{
                      borderRadius: "0.5rem",
                      fontSize: "0.9rem",
                      padding: "1rem",
                      margin: 0,
                    }}
                  >
                    {article.codeSnippet.code}
                  </SyntaxHighlighter>
                </div>

                <div className="flex justify-between items-center">
                  <motion.a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-center ${
                      isDark
                        ? "bg-primary !text-black  hover:bg-primary/90 shadow-md border-2 border-primary/30"
                        : "bg-primary-light !text-white hover:bg-primary-light/90 shadow-md border-2 border-primary-light/30"
                    }`}
                  >
                    <span>Read on Medium</span>
                    <FaExternalLinkAlt size={14} />
                  </motion.a>

                  <div className="flex items-center gap-4">
                    <div
                      className={`flex items-center gap-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <FaRegThumbsUp />
                      <span className="text-sm">{article.stats.likes}</span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <FaRegComment />
                      <span className="text-sm">{article.stats.comments}</span>
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <FaRegBookmark />
                      <span className="text-sm">{article.stats.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;

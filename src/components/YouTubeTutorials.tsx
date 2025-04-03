import { motion } from "framer-motion";
import { FaYoutube, FaPlay } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  likes: number;
  date: string;
  url: string;
}

const YouTubeTutorials = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // YouTube video data
  const videos: YouTubeVideo[] = [
    {
      id: "vid1",
      title: "Mern stack Authentification (register)",
      thumbnail: "https://img.youtube.com/vi/eW9bkrcVlmc/hqdefault.jpg",
      duration: "15:54",
      views: 341,
      likes: 5,
      date: "Mar 25, 2023",
      url: "https://youtu.be/eW9bkrcVlmc?list=PL-frcjiqUSNx5IUiD3jLWNLj4O2PKx4aE",
    },
    {
      id: "vid2",
      title: "Mern stack Authentification (login)",
      thumbnail: "https://img.youtube.com/vi/TZ8qdWEKQ-Y/hqdefault.jpg",
      duration: "18:06",
      views: 178,
      likes: 5,
      date: "Mar 26, 2023",
      url: "https://youtu.be/TZ8qdWEKQ-Y?list=PL-frcjiqUSNx5IUiD3jLWNLj4O2PKx4aE",
    },
    {
      id: "vid3",
      title: "Mern stack Authnetification Frontend (part 1)",
      thumbnail: "https://img.youtube.com/vi/ph8-ipYHbCA/hqdefault.jpg",
      duration: "14:29",
      views: 159,
      likes: 3,
      date: "Mar 27, 2023",
      url: "https://youtu.be/ph8-ipYHbCA?list=PL-frcjiqUSNx5IUiD3jLWNLj4O2PKx4aE",
    },
    {
      id: "vid4",
      title: "Mern stack Authentification Frontend (part 2)",
      thumbnail: "https://img.youtube.com/vi/kDx5lNjVLSw/hqdefault.jpg",
      duration: "22:41",
      views: 136,
      likes: 2,
      date: "Mar 27, 2023",
      url: "https://youtu.be/kDx5lNjVLSw?list=PL-frcjiqUSNx5IUiD3jLWNLj4O2PKx4aE",
    },
    {
      id: "vid5",
      title: "Mern stack Authentification Frontend (part 3)",
      thumbnail: "https://img.youtube.com/vi/6p6JqFQznwk/hqdefault.jpg",
      duration: "24:11",
      views: 132,
      likes: 2,
      date: "Mar 27, 2023",
      url: "https://youtu.be/6p6JqFQznwk?list=PL-frcjiqUSNx5IUiD3jLWNLj4O2PKx4aE",
    },
  ];

  return (
    <section id="tutorials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">YouTube Tutorials</h2>
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I create educational content to share my knowledge about web
            development. Check out my MERN stack tutorial series!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-xl overflow-hidden shadow-lg ${
                isDark ? "bg-dark-light" : "bg-white"
              }`}
            >
              <div className="relative group">
                <div className="aspect-video w-full bg-gray-200 relative overflow-hidden">
                  {/* Use an image with correct YouTube thumbnail URL format */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full ${
                        isDark ? "bg-primary" : "bg-primary-light"
                      } text-white`}
                    >
                      <FaPlay />
                    </a>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block font-bold text-lg mb-2 hover:underline ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {video.title}
                </a>
                <div
                  className={`flex items-center text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span>{video.views} views</span>
                  <span className="mx-2">•</span>
                  <span>{video.date}</span>
                </div>
                <div
                  className={`mt-3 flex items-center text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <FaYoutube className="text-red-600 text-xl mr-2" />
                  <span>MERN Stack Tutorials (b tounsi)</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.youtube.com/playlist?list=PL-frcjiqUSNx5IUiD3jLWNLj4O2PKx4aE"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
              isDark
                ? "bg-primary !text-black hover:bg-opacity-90"
                : "bg-primary-light !text-white hover:bg-opacity-90"
            } transition-all`}
          >
            <FaYoutube className="text-xl" />
            View Full Playlist
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeTutorials;

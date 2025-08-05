"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";

const projects = [
  {
    id: "gethired",
    name: "GetHiredAI",
    title: "Autonomous Multi-Agent Job Search Assistant",
    image: "/projects/GetHired.png",
    videoId: "0wDw9HG9y6w",
    link: "https://devpost.com/software/gethired-g6kxs2",
    bullets: [/* your bullet points */],
    tags: ["Python", "Google ADK", "Firebase", "OpenAI API"]
  },
  {
    id: "promptly",
    name: "Promptly",
    title: "AI Prompt Assistant (Apple App Store)",
    image: "/projects/ecommerce.png",
    videoId: "NhygDvUzAQU",
    link: "#",
    bullets: [/* your bullet points */],
    tags: ["React Native", "TypeScript", "Firebase"]
  },
  {
    id: "tsla",
    name: "TSLA Stock Threshold Detector",
    title: "Binary Search Algorithm Project",
    image: "/projects/image.png",
    videoId: null,
    link: "https://github.com/justliya/Algorithm-Projects",
    bullets: [/* your bullet points */],
    tags: ["Python", "Pandas", "Matplotlib"]
  },
  {
    id: "skyline",
    name: "Skyline",
    title: "Interactive Baseball Platform",
    image: "/projects/analytics.jpg",
    videoId: "iZ6Ee2VmO2Q",
    link: "https://devpost.com/software/skyline-x20soe",
    bullets: [/* your bullet points */],
    tags: ["React Native", "TypeScript", "Firebase", "Node.js"]
  }
];

const ProjectsSection: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setShowDetails(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setShowDetails(false);
  };

  const handleProjectClick = () => {
    setShowDetails(!showDetails);
  };

  const onYouTubeReady: YouTubeProps["onReady"] = (event) => {
    // Optional: Auto-pause if needed
    // event.target.pauseVideo();
  };

  const current = projects[currentProject];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interactive showcase of my latest work in AI, mobile development, and data analysis
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <button onClick={prevProject} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full hover:bg-black/70 backdrop-blur-sm border border-white/10">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={nextProject} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full hover:bg-black/70 backdrop-blur-sm border border-white/10">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden"
            >
              {!showDetails ? (
                <div onClick={handleProjectClick} className="cursor-pointer group">
                  <div className="relative h-96 md:h-[500px]">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <h2 className="text-3xl md:text-4xl font-bold">{current.name}</h2>
                      <p className="text-xl text-gray-300 mb-4">{current.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {current.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 text-purple-400 font-medium flex items-center gap-2">
                        <span>Click to view details</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Video or Image */}
                    <div className="relative">
                      {current.videoId ? (
                        <YouTube
                          videoId={current.videoId}
                          onReady={onYouTubeReady}
                          opts={{
                            height: "390",
                            width: "100%",
                            playerVars: { autoplay: 1, mute: 1 }
                          }}
                          className="rounded-xl overflow-hidden"
                        />
                      ) : (
                        <Image
                          src={current.image}
                          alt={current.name}
                          width={640}
                          height={390}
                          className="rounded-xl object-cover"
                        />
                      )}
                    </div>

                    {/* Details */}
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{current.name}</h2>
                      <p className="text-xl text-purple-400 mb-6">{current.title}</p>
                      <div className="space-y-4 mb-6">
                        {current.bullets.map((bullet: string, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                            <p className="text-gray-300">{bullet}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex gap-4 mt-4">
                        <a
                          href={current.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => setShowDetails(false)}
                          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium"
                        >
                          Back to Overview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentProject(idx);
                  setShowDetails(false);
                }}
                className={`w-3 h-3 rounded-full ${
                  idx === currentProject ? "bg-purple-500" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
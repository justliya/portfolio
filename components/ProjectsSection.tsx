"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "gethired",
    name: "GetHiredAI",
    title: "Autonomous Multi-Agent Job Search Assistant",
    image: "/projects/GetHired.png",
    videoUrl: "https://www.youtube.com/embed/0wDw9HG9y6w?autoplay=1&mute=1",
    link: "https://devpost.com/software/gethired-g6kxs2",
    bullets: [/*...*/],
    tags: ["Python", "Google ADK", "Firebase", "OpenAI API"]
  },
  {
    id: "promptly",
    name: "Promptly",
    title: "AI Prompt Assistant (Apple App Store)",
    image: "/projects/ecommerce.png",
    videoUrl: "https://www.youtube.com/embed/NhygDvUzAQU?autoplay=1&mute=1",
    link: "#",
    bullets: [/*...*/],
    tags: ["React Native", "TypeScript", "Firebase"]
  },
  {
    id: "tsla",
    name: "TSLA Stock Threshold Detector",
    title: "Binary Search Algorithm Project",
    image: "/projects/image.png",
    videoUrl: null,
    link: "https://github.com/justliya/Algorithm-Projects",
    bullets: [/*...*/],
    tags: ["Python", "Pandas", "Matplotlib"]
  },
  {
    id: "skyline",
    name: "Skyline",
    title: "Interactive Baseball Platform",
    image: "/projects/analytics.jpg",
    videoUrl: "https://www.youtube.com/embed/iZ6Ee2VmO2Q?autoplay=1&mute=1",
    link: "https://devpost.com/software/skyline-x20soe",
    bullets: [/*...*/],
    tags: ["React Native", "TypeScript", "Firebase", "Node.js"]
  }
];

const ProjectsSection: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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

  const toggleMute = () => {
    const current = projects[currentProject];
    const baseUrl = current.videoUrl?.split("?")[0];
    if (!baseUrl || !iframeRef.current) return;

    const newMuteValue = !isMuted ? 1 : 0;
    const newSrc = `${baseUrl}?autoplay=1&mute=${newMuteValue}`;
    iframeRef.current.src = newSrc;
    setIsMuted(!isMuted);
  };

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

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Nav Buttons */}
          <button onClick={prevProject} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-sm border border-white/10">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={nextProject} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-sm border border-white/10">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Main Display */}
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
                <div className="cursor-pointer group" onClick={handleProjectClick}>
                  <div className="relative h-96 md:h-[500px]">
                    <Image
                      src={projects[currentProject].image}
                      alt={projects[currentProject].name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{projects[currentProject].name}</h2>
                      <p className="text-xl text-gray-300 mb-4">{projects[currentProject].title}</p>
                      <div className="flex flex-wrap gap-2">
                        {projects[currentProject].tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">{tag}</span>
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
                    {/* Video/Image Section */}
                    <div className="relative">
                      {projects[currentProject].videoUrl ? (
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                          <iframe
                            ref={iframeRef}
                            src={projects[currentProject].videoUrl}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            referrerPolicy="no-referrer"
                          />
                          <button onClick={toggleMute} className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-sm">
                            {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                          </button>
                        </div>
                      ) : (
                        <div className="aspect-video rounded-xl overflow-hidden">
                          <Image
                            src={projects[currentProject].image}
                            alt={projects[currentProject].name}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {/* Details Section */}
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{projects[currentProject].name}</h2>
                      <p className="text-xl text-purple-400 mb-6">{projects[currentProject].title}</p>
                      <div className="space-y-4 mb-6">
                        {projects[currentProject].bullets.map((bullet, idx) => (
                          <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-gray-300 leading-relaxed">{bullet}</p>
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {projects[currentProject].tags.map((tag, idx) => (
                          <span key={idx} className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">{tag}</span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-medium">
                          <span>View Project</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button onClick={() => setShowDetails(false)} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors font-medium">
                          Back to Overview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentProject(idx);
                  setShowDetails(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentProject ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center gap-4 mt-6">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentProject(idx);
                  setShowDetails(false);
                }}
                className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                  idx === currentProject ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
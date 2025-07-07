"use client";
import { motion } from "framer-motion";
import { FaNode, FaReact } from "react-icons/fa";
import { SiFirebase, SiTypescript } from "react-icons/si";
import Image from "next/image";

const projects = [
    {
        title: "GetHiredAI",
        description: "Autonomous multi-agent job search assistant that automates the entire application pipeline through coordinated AI agents with custom MCP server integration.",
        tech: [
            { name: "Python", icon: FaNode, color: "#3776AB" },
            { name: "Google ADK", icon: SiTypescript, color: "#4285F4" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "OpenAI API", icon: FaNode, color: "#412991" }
        ],
        image: '/projects/GetHired.png',
        link: "https://devpost.com/software/gethired-g6kxs2"
    },
    {
        title: "Promptly",
        description: "AI prompt assistant published on Apple App Store with 100+ downloads, helping creators craft high-quality prompts.",
        tech: [
            { name: "React Native", icon: FaReact, color: "#61DAFB" },
            { name: "Typescript", icon: SiTypescript, color: "#412991" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      
        ],
        image: '/projects/ecommerce.png',
        link: "#"
    },
    {
        title: "TSLA Stock Threshold Detector",
        description: "Binary search algorithm detecting stock threshold data",
        tech: [
            { name: "Python", icon: FaNode, color: "#3776AB" },
            { name: "Pandas", icon: SiFirebase, color: "#150458" },
            { name: "Matplotlib", icon: SiFirebase, color: "#11557C" },
         
        ],
        image: '/projects/image.png',
        link: "https://github.com/justliya/Algorithm-Projects"

    },
    {
        title: "Skyline",
        description: "AI-powered baseball companion that explains key plays, analyzes matchups, and predicts win probabilities.",
        tech: [
            { name: "React Native", icon: FaReact, color: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "Node.js", icon: FaNode, color: "#339933" }
        ],
        image: '/projects/analytics.jpg',
        link: "https://devpost.com/software/skyline-x20soe"
    },
]


export default function Main() {
  return (
    <section className=" py-32 relative id='work'">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-bold
                    text-content mb-4 text-center"
          >
            Selected Work
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-primary
                    to-tertiary rounded-full"
          />
        </motion.div>
        {/* Project Grid */}

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8 relative z-10"
        >
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[500px] rounded-3xl overflow-hidden
                                bg-surface border border-white/10 cursor-pointer hover:shadow-lg transition-transform duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Image Section */}
                <motion.div
                  className="h-[250px] relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="p-6 h-[25px] bg-surface"
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="flex justify-between items-start
                                mb-4 group/title"
                  >
                    <h3 className="text-2xl font-bold text-content">
                      {project.title}
                    </h3>
                    <motion.div
                      className="h-6 w-6 text-content/50
                                            group-hover/title:text-primary transition-colors duration-300
                                            hover:scale-110"
                    ></motion.div>
                  </div>
                  <p className="text-content/80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-white/5 text-content/80
                                                text-sm border border-white/5
                                                hover:bg-surface transition-colors flex items-center
                                                gap-1.5 group/tech"
                      >
                        <tech.icon
                          style={{ color: tech.color }}
                          className="w-4 h-4 transition-colors"
                        />
                        <span className="group-hover/tech:text-content transition-colors">
                          {tech.name}
                        </span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

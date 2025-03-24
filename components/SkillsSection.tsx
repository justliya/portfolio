"use client";

import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiJest,
  SiOpenai,
  SiTensorflow,
} from "react-icons/si";
import { MdFunctions } from "react-icons/md";

const skills = [
  {
    name: "React.js",
    icon: FaReact,
    points: [
      "Craft responsive user interfaces with reusable components",
      "Built real-time UI in Promptly and Skyline using hooks and state"
    ]
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    points: [
      "Built fullstack apps with SSR, API routes, and dynamic routing",
      "Used in portfolio and NeuroInsight for SEO-friendly architecture"
    ]
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    points: [
      "Improve reliability with static typing and interface enforcement",
      "Maintain scalable codebases across all major apps"
    ]
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    points: [
      "Develop backend logic and serverless APIs",
      "Implemented live data processing in Skyline using MLB API"
    ]
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    points: [
      "Style interfaces rapidly with utility classes",
      "Build polished, mobile-friendly UIs like Promptly"
    ]
  },
  {
    name: "Jest",
    icon: SiJest,
    points: [
      "Write unit and integration tests to ensure logic reliability",
      "Validate prompt rendering and user flows"
    ]
  },
  {
    name: "Python",
    icon: FaPython,
    points: [
      "Used for automation, scripting, and AI integration",
      "Builds logic in NeuroInsight and connects with OpenAI"
    ]
  },
  {
    name: "Git",
    icon: FaGitAlt,
    points: [
      "Maintain clean code history with proper branching",
      "Collaborate and resolve conflicts efficiently"
    ]
  },
  {
    name: "Algorithms & Problem Solving",
    icon: MdFunctions,
    points: [
      "Optimize performance with clean logic and structure",
      "Manage data flow and application state effectively"
    ]
  },
  {
    name: "AI & Prompt Engineering",
    icon: SiOpenai,
    points: [
      "Design precise prompts for GPT-4 and Gemini",
      "Developed AI flows in Promptly and NeuroInsight"
    ]
  },
  {
    name: "Machine Learning (TensorFlow)",
    icon: SiTensorflow,
    points: [
      "Experiment with training models for adaptive user support",
      "Prototype accessibility-driven features for neurodivergent users"
    ]
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6 ">
      <h1 className="text-4xl font-bold mb-8">
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text z-80">
          My Skills
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-purple-700/40 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <skill.icon className="text-3xl text-purple-400" />
              <h2 className="text-xl font-semibold">{skill.name}</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-400 text-sm space-y-1">
              {skill.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
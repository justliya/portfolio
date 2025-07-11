"use client";

import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiJest,
  SiOpenai,
  SiFirebase,
  SiExpo,
  SiGooglecloud,
  SiRedux,
  SiPostgresql,

} from "react-icons/si";


const skills = [
  {
    name: "React.js & React Native",
    icon: FaReact,
    points: [
      "Build responsive web and mobile applications with reusable components",
      "Developed Promptly,  Skyline, and NeuroInsight using React Native",
      "Expert in hooks, state management, and performance optimization"
    ]
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    points: [
      "Full-stack applications with API routes, and dynamic routing",
      "SEO-optimized architecture for portfolio and production applications",
      "Integrated with modern deployment platforms like Vercel"
    ]
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    points: [
      "Type-safe development with interface enforcement and static analysis",
      "Maintain scalable codebases across web and mobile applications",
      "Enhanced code reliability and developer experience"
    ]
  },
  {
    name: "Python",
    icon: FaPython,
    points: [
      "Backend development, automation, and AI/ML integration",
      "Built GetHiredAI platform using Google ADK and FastMCP",
      "Data analysis with Pandas and visualization with Matplotlib"
    ]
  },
  {
    name: "Node.js & APIs",
    icon: FaNodeJs,
    points: [
      "RESTful API development and serverless functions",
      "Real-time data processing for live applications like Skyline",
      "Integration with external APIs including OpenAI, Stock API, and MLB GUMBO"
    ]
  },
  {
    name: "Firebase & Supabase",
    icon: SiFirebase,
    points: [
      "Authentication, Firestore, and real-time database management",
      "Secure user sessions and data persistence across applications",
      "Cloud storage and deployment with CI/CD integration"
    ]
  },
  {
    name: "Expo & Mobile Development",
    icon: SiExpo,
    points: [
      "Cross-platform mobile app development and deployment",
      "Over-the-air (OTA) updates using EAS and Revopush",
    ]
  },
  {
    name: "AI/ML & Multi-Agent Systems",
    icon: SiOpenai,
    points: [
      "Multi-agent orchestration with Google ADK and Model Context Protocol (MCP)",
      "Custom MCP server development for dynamic agent workflows and tool coordination",
      "Prompt engineering"
    ]
  },
  {
    name: "Cloud Platforms",
    icon: SiGooglecloud,
    points: [
      "Google Cloud, Vercel, Render deployment and scaling",
      "CI/CD pipelines with GitHub Actions for automated delivery",
      "Environment management and production-ready configurations"
    ]
  },
  {
    name: "Database Technologies",
    icon: SiPostgresql,
    points: [
      "SQL and NoSQL database design and optimization",
      "PostgreSQL, MongoDB, and Firestore for flexible data management",
      "Efficient querying and data modeling for scalable applications"
    ]
  },
  {
    name: "Testing & Quality Assurance",
    icon: SiJest,
    points: [
      "Unit and integration testing with Jest for reliable code",
      "UI component validation and backend routing logic testing",

    ]
  },
  {
    name: "State Management & Architecture",
    icon: SiRedux,
    points: [
      "Redux for complex state management in scalable applications",
      "Object-Oriented Programming principles for modular design",
      "Clean architecture patterns and performance optimization"
    ]
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Technical Skills
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
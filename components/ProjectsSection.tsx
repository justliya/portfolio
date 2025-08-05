"use client";

const projects = [
  {
    name: "GetHiredAI - Autonomous Multi-Agent Job Search Assistant",
    bullets: [
      "Autonomous multi-agent system automating entire job application pipeline through coordinated AI agents.",
      "Custom remote MCP server with JSearch API integration for dynamic tool orchestration and agent workflows.",
      "Google ADK architecture with modular sub-agent logic, prompt routing, and multi-step coordination.",
      "Standardized JSON schemas for inter-agent communication with fallback logic for API timeouts.",
      "Reduces manual application time from hours to minutes with contextually relevant resume modifications.",
      "Firebase integration: Authentication, Firestore data persistence, and Storage for resume management."
    ],
    link: "https://devpost.com/software/gethired-g6kxs2",
  },
  {
    name: "Promptly - AI Prompt Assistant (Apple App Store)",
    bullets: [
      "React Native mobile app helping creators craft high-quality AI prompts with precision.",
      "Integrated Firebase for authentication, NoSQL database management, and state persistence.",
      "Implemented CI/CD pipelines using GitHub Actions and EAS/Revopush for seamless OTA updates.",
      "Leveraged OpenAI API to generate prompts optimized for relevance, clarity, and structure.",
      "Achieved 100+ downloads within first 2 weeks through performance tuning and intuitive UX."
    ],
    link: "#",
  },
  {
    name: "TSLA Stock Threshold Detector (Binary Search Algorithm)",
    bullets: [
      "Binary search algorithm efficiently detecting first occurrence of Tesla stock threshold breach in O(log n) time.",
      "Visualizes TSLA stock data with key political and economic events (Trump Inauguration, All-Time High markers).",
      "Integrated Alpha Vantage API for real historical market data from Dec 2024 - Mar 2025 period.",
      "Matplotlib visualization with annotated plots showing threshold crossings and market crash analysis.",
      "Demonstrates algorithm optimization on real-world financial data with monthly and daily view options.",
      "Analyzes correlation between political events and Tesla stock performance during volatile market period."
    ],
    link: "https://github.com/justliya/Algorithm-Projects",
  },
  {
    name: "Skyline - Interactive Baseball Platform",
    bullets: [
      "Built during Google Cloud x MLB Hackathon using React Native, Firebase, and MLB's GUMBO API.",
      "Real-time AI sports analytics helping fans understand game momentum and win probabilities.",
      "Led UI/UX design and AI integration to support both casual fans and analysts.",
      "Implemented live data processing for comprehensive matchup analysis and predictions."
    ],
    link: "https://devpost.com/software/skyline-x20soe",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-10">
      <h1 className="text-4xl font-bold text-gradient mb-6">
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Projects
        </span>
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-6 rounded-xl shadow-md hover:bg-gray-800 transition group"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold group-hover:text-primary">
                {project.name}
              </h2>
            </div>
            <ul className="list-disc pl-4 text-sm text-gray-400 space-y-1">
              {project.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
"use client";



const projects = [
  {
    name: "Skyline - Interactive Baseball Platform",
    bullets: [
      "Built during the Google Cloud x MLB Hackathon.",
      "Real-time AI sports analytics using React Native, Firebase, Node.js, and MLB’s GUMBO API.",
      "Helps fans understand game momentum, matchups, and win probabilities.",
      "Led UI/UX and AI integration to support both casual fans and analysts."
    ],
    link: "https://devpost.com/software/skyline-x20soe",
  },
  {
    name: "NeuroInsight - AI Study Assistant",
    bullets: [
      "Empowers neurodivergent users with task planning, routine tracking, and emotional check-ins.",
      "Designed for accessibility and modular customization.",
      "Built using React Native, Firebase, and TypeScript.",
      "Adapts dynamically to user habits and priorities."
    ],
    link: "#",
  },
  {
    name: "Promptly - AI Prompt Assistant",
    bullets: [
      "Mobile-friendly app for creating, editing, and managing AI prompts.",
      "Secure API key storage and Firestore integration for personal prompt libraries.",
      "Features dynamic UI updates and customization without subscription.",
      "Built for usability, scalability, and autonomy."
    ],
    link: "#",
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
"use client";

type Project = {
  name: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    name: "Skyline - Interactive Baseball Platform",
    description: "Real-time AI sports analytics tool utilizing MLB's GUMBO API.",
    link: "https://devpost.com/software/skyline-x20soe"
  },
  {
    name: "NeuroInsight - AI Study Assistant",
    description: "Customizable AI-driven study tool for neurodivergent users.",
    link: "#"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-gradient mb-6">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer"
             className="block bg-gray-900 p-4 rounded-lg shadow-lg hover:bg-primary/20 transition">
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="text-gray-400 mt-1">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
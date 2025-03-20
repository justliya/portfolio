"use client";

type Experience = {
  role: string;
  company: string;
  date: string;
  description: string;
};

const experiences: Experience[] = [
  {
    role: "Prompt Engineer",
    company: "Outlier AI",
    date: "2024 - Present",
    description: "Optimized LLM prompts for better AI interactions and efficiency."
  },
  {
    role: "Software Engineer Trainee",
    company: "Coding Temple",
    date: "Oct 2024 - Present",
    description: "Built full-stack applications with React and Flask."
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-gradient mb-6">Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-primary pl-4 bg-gray-900 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{exp.role}</h2>
            <p className="text-lg text-primary">{exp.company}</p>
            <p className="text-gray-400 text-sm">{exp.date}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
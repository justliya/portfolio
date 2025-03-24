import {Code, Sparkles } from 'lucide-react';

const experiences = [
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    role: 'Prompt Engineer',
    company: 'Outlier AI',
    time: '2024 – Present · Remote',
    description: [
      'Crafted and fine-tuned prompts to enhance AI creativity, factuality, and relevance.',
      'Developed multimodal prompts for diverse media inputs.',
      'Conducted real-time evaluations and research to improve prompt accuracy and user value.'
    ],
    badges: ['Prompt Engineering', 'OpenAI API', 'Gemini', 'LangChain']
  },
  {
    icon: <Code className="w-6 h-6 text-blue-400" />,
    role: 'Software Engineer Training',
    company: 'Coding Temple',
    time: '2024 – Present · Remote',
    description: [
      'Built fullstack apps with React + Flask, including third-party API integrations.',
      'Demonstrated adaptability and fast learning in high-pressure coding environments.',
      'Contributed to group projects with modern dev stacks.'
    ],
    badges: ['React', 'Flask', 'JavaScript', 'Python']
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-16 px-10 bg-gradient-to-b from-[#0f1117] to-[#141926] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block border-b-4 border-purple-500 pb-1 z-95">Experience</span>
        </h2>
        <div className="grid gap-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-[#1a1f2e] rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-purple-600/30 transition-all"
            >
              <div className="flex-shrink-0">{exp.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  {exp.role} <span className="text-sm font-normal text-gray-400">— {exp.company}</span>
                </h3>
                <p className="text-gray-400 text-sm mb-3">{exp.time}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                  {exp.description.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-700/20 text-purple-300 px-2 py-1 text-xs rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

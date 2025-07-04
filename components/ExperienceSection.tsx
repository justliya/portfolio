import { Code, Sparkles, GraduationCap } from 'lucide-react';

const experiences = [
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    role: 'Prompt Engineer',
    company: 'Outlier AI',
    time: 'July 2024 – Present · Remote',
    description: [
      'Designed prompts across domains boosting instruction-following and contextual accuracy by 40% with 95% acceptance rate.',
      'Conducted research and fact-checking for 300+ content items, reducing revision cycles by 33%.',
      'Authored ideal model responses using structured rubrics, achieving 22% reduction in hallucination rates.',
      'Enhanced training quality through peer review, improving factual accuracy by 35%.',
      'Led cross-functional QA initiatives contributing to 10% increase in coherence scores across LLM outputs.'
    ],
    badges: ['GPT-4', 'Gemini', 'Prompt Engineering', 'OpenAI API', 'LLM Training', 'QA']
  },
  {
    icon: <Code className="w-6 h-6 text-blue-400" />,
    role: 'Software Engineer Apprentice',
    company: 'Coding Temple',
    time: 'October 2024 – May 2025 · Remote',
    description: [
      'Engineered full-stack applications using React.js, React Native, Node.js, Next.js, and Python with focus on accessibility.',
      'Designed RESTful APIs using Flask and Node.js, integrating SQL and NoSQL databases.',
      'Executed unit and integration testing with Jest, improving code reliability and maintainability.',
      'Deployed applications using Firebase, Vercel, and configured CI/CD pipelines via GitHub Actions.',
      'Applied OOP principles and Redux for state management in modular, scalable applications.'
    ],
    badges: ['React', 'Node.js', 'Python', 'Flask', 'Firebase', 'Jest', 'CI/CD']
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-green-400" />,
    role: 'B.A. Interdisciplinary Studies',
    company: 'Columbia College Chicago',
    time: '2020 – 2024 · Chicago, IL',
    description: [
      'Specialized in Deaf Studies and Arts in Health, combining creative insight with technical skill.',
      'Developed human-centered design approach for accessible technology solutions.',
      'Built foundation in empathy-driven development and inclusive design principles.',
      'Integrated creative problem-solving with systematic analytical thinking.'
    ],
    badges: ['Accessibility', 'Human-Centered Design', 'Creative Problem Solving', 'Inclusive Design']
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-16 px-10 bg-gradient-to-b from-[#0f1117] to-[#141926] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block border-b-4 border-purple-500 pb-1">Experience & Education</span>
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
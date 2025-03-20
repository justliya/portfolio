"use client";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiJest } from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ElementType;
};

const skills: Skill[] = [
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Jest", icon: SiJest },
  { name: "Python", icon: FaPython },
  { name: "Git", icon: FaGitAlt },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-gradient mb-6">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-900 p-4 rounded-xl shadow-lg">
            <skill.icon className="text-4xl text-primary mb-2" />
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
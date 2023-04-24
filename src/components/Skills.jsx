import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import SkillCard from './SkillCard';

const skills = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

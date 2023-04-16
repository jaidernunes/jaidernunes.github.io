import React from "react";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div className="bg-white rounded-md shadow-md p-6 flex flex-col items-center justify-center">
      <Icon className="text-4xl mb-2" />
      <span className="font-medium text-gray-900">{skill.name}</span>
    </div>
  );
};

export default SkillCard;
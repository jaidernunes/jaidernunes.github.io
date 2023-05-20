import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-md shadow-md overflow-hidden max-w-[410px] relative">
      <img
        className="h-48 w-full object-cover object-center"
        src={project.imageSrc}
        alt={project.title}
      />
      <div className="p-6 pb-16">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div id='buttons' className="absolute bottom-0 left-0 right-0 px-3.5 pb-3.5 flex justify-end">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded mr-4"
        >
          Demo
        </a>
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

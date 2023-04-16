import React from 'react';
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tellus nec nisi lobortis aliquam non et turpis.",
      imageSrc: "https://via.placeholder.com/400x300",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/example/project1",
    },
    {
      title: "Project 2",
      description:
        "Sed pellentesque, sapien ac efficitur rutrum, elit elit fringilla mauris, sit amet tincidunt lacus arcu a lectus.",
      imageSrc: "https://via.placeholder.com/400x300",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/example/project2",
    },
    {
      title: "Project 3",
      description:
        "Etiam at diam semper, porttitor quam vitae, pulvinar neque. Curabitur mollis leo eget augue maximus, sed tristique mi rhoncus.",
      imageSrc: "https://via.placeholder.com/400x300",
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/example/project3",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-400">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
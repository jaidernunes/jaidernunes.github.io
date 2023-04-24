import React from 'react';
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Recipes App",
      description:
        "A React-based front-end web app, optimized for mobile devices.",
      imageSrc: "/src/assets/projects/figma-recipes-app.png",
      demoUrl: "https://recipes-app-jaider.vercel.app/",
      codeUrl: "https://github.com/jaidernunes/recipes-app",
    },
    {
      title: "Meditation Timer",
      description:
        "A React-based web appthat lets the user set up a meditation timer with bells ringing at regular intervals and at the end.",
      imageSrc: "/src/assets/projects/meditation-timer.png",
      demoUrl: "https://jaidernunes.github.io/meditation-timer/",
      codeUrl: "https://github.com/jaidernunes/meditation-timer",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-400">
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
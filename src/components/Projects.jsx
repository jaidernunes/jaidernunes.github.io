import React from 'react';
import ProjectCard from "./ProjectCard";
import recipesAppPic from '/src/assets/projects/recipesApp.png'
import meditationTimerPic from '../assets/projects/meditationTimer.png'
import Title from './Title';

export default function Projects() {
  const projects = [
    {
      title: "Recipes App",
      description:
        "A React-based front-end web app, optimized for mobile devices.",
      imageSrc: recipesAppPic,
      demoUrl: "https://recipes-app-jaider.vercel.app/",
      codeUrl: "https://github.com/jaidernunes/recipes-app",
    },
    {
      title: "Meditation Timer",
      description:
        "A React-based web appthat lets the user set up a meditation timer with bells ringing at regular intervals and at the end.",
      imageSrc: meditationTimerPic,
      demoUrl: "https://jaidernunes.github.io/meditation-timer/",
      codeUrl: "https://github.com/jaidernunes/meditation-timer",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-400">
      <div className="container mx-auto">
        <Title title="My Projects" ></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

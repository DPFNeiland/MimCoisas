import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Meu Primeiro Projeto",
    description: "Um projeto que fiz usando TypeScript e React.",
    link: "https://github.com/seu-usuario/meu-projeto",
  },
  {
    id: 2,
    title: "Sistema de Gestão",
    description: "Aplicação web para gerenciamento de tarefas.",
    link: "https://github.com/seu-usuario/gestao-app",
  },
  {
    id: 3,
    title: "Jogo em JavaScript",
    description: "Pequeno jogo de plataforma feito com JavaScript puro.",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1>Meus Projetos</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

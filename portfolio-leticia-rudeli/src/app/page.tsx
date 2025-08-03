import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string | null;

}

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.5 0 4.1-1.3 4.1-3.5 0-1-.2-2.3-2.1-3.1.5-1.5-.4-2.8-1.5-3.1 0 0-1.4-.2-2.1 1.1-.9-.2-1.9-.3-3-.3-1.1 0-2.1.1-3 .3-1.1-1.3-2.1-1.1-2.1-1.1-1.1.3-2 1.6-1.5 3.1-1.9.8-2.1 2.1-2.1 3.1 0 2.2.6 3.5 4.1 3.5a4.8 4.8 0 0 0-1 3.5v4" />
    <path d="M9 18v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V18" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-external-link"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

// Dados dos projetos para facilitar a edição.
const projects = [
  {
    id: 1,
    title: 'CRUD Firebase React',
    description: 'Uma aplicação web completa para gerenciamento de dados, utilizando React para a interface e Firebase para autenticação e banco de dados em tempo real.',
    githubUrl: 'https://github.com/lelerudeli/crud_firebase_react',
    demoUrl: null, // Adicione o link do demo aqui quando tiver um!
  },
  {
    id: 2,
    title: 'Pokédex React App',
    description: 'Um aplicativo interativo de Pokédex que consome a API de Pokémon. O projeto demonstra o uso de hooks do React, gerenciamento de estado e design responsivo.',
    githubUrl: 'https://github.com/lelerudeli/pokedex_react_app',
    demoUrl: null,
  },
  {
    id: 3,
    title: 'Landing Page Flexbox',
    description: 'Uma landing page estática e responsiva, projetada com HTML e CSS puro, focando no uso de Flexbox para um layout flexível e moderno.',
    githubUrl: 'https://github.com/lelerudeli/landing_page_flexbox',
    demoUrl: null,
  },
];

// Componente para um card de projeto.
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
      <div className="flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <GithubIcon />
          <span>GitHub</span>
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ExternalLinkIcon />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

// Componente principal da aplicação
export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">

        {/* Seção de Introdução */}
        <header className="text-center mb-16">
          <img
            src="https://placehold.co/120x120/555/fff?text=LR"
            alt="Foto de perfil de Letícia Rudeli"
            className="rounded-full mx-auto mb-4 border-4 border-gray-700"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">Letícia Rudeli</h1>
          <p className="text-lg sm:text-xl text-blue-400 font-medium">Desenvolvedora Front-end</p>
        </header>

        {/* Seção Sobre Mim */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-400 pb-2">Sobre Mim</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Olá! Sou uma desenvolvedora front-end apaixonada por criar interfaces de usuário intuitivas e responsivas. Com experiência em React e Tailwind CSS, adoro transformar ideias em experiências digitais elegantes e funcionais. Estou sempre em busca de novos desafios e tecnologias para aprimorar minhas habilidades.
          </p>
        </section>

        {/* Seção de Projetos */}
        <section>
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-400 pb-2">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

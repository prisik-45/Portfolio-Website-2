import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project One',
      subtitle: 'FULL STACK APPLICATION',
      description: 'This is a full-stack application built using Django (DRF) for the backend and ReactJS for the frontend. It features secure user authentication with JWT, supporting registration, login, logout, token management, automatic token refresh, and blacklist handling for enhanced security.',
      image: '/placeholder.svg',
      techStack: ['Python', 'Django Rest Framework', 'ReactJs', 'JavaScript', 'HTML', 'CSS', 'TailwindCss', 'PostgreSQL', 'GitHub'],
      githubFrontend: '#',
      githubBackend: '#',
      live: '#',
    },
    {
      title: 'Project Two',
      subtitle: 'AI/ML PROJECT',
      description: 'An intelligent machine learning system that uses advanced algorithms for data processing and prediction. Built with modern AI frameworks and deployed on cloud infrastructure for scalability and performance.',
      image: '/placeholder.svg',
      techStack: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'AWS', 'PostgreSQL'],
      githubFrontend: '#',
      githubBackend: '#',
      live: '#',
    },
    {
      title: 'Project Three',
      subtitle: 'NLP APPLICATION',
      description: 'A natural language processing application that leverages transformer models for text analysis, sentiment detection, and intelligent document processing with RAG architecture.',
      image: '/placeholder.svg',
      techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'React', 'TypeScript'],
      githubFrontend: '#',
      githubBackend: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 md:p-8 rounded-2xl hover-glow"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left - Image */}
                <div className="relative">
                  <p className="text-primary font-display text-sm font-semibold mb-4 tracking-wider">
                    {project.subtitle}
                  </p>
                  <div className="aspect-video bg-card rounded-xl overflow-hidden border border-border">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubFrontend, '_blank')}
                      className="gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Git frontend
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubBackend, '_blank')}
                      className="gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Git backend
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.live, '_blank')}
                      className="gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button>
                  </div>
                </div>

                {/* Right - Content */}
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                      TechStack Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
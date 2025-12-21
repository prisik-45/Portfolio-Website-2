import { ExternalLink, Github, Brain, Eye, MessageSquare, Workflow } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Neural Vision Pro',
      description: 'Advanced computer vision system using custom CNN architectures for real-time object detection and scene understanding with 98% accuracy.',
      icon: Eye,
      tags: ['PyTorch', 'YOLO', 'OpenCV', 'AWS'],
      github: '#',
      live: '#',
    },
    {
      title: 'LLM Orchestrator',
      description: 'Enterprise-grade RAG system integrating multiple LLMs with vector databases for intelligent document processing and Q&A.',
      icon: Brain,
      tags: ['LangChain', 'GPT-4', 'Pinecone', 'FastAPI'],
      github: '#',
      live: '#',
    },
    {
      title: 'SentimentAI',
      description: 'Multi-modal sentiment analysis platform processing text, audio, and video for comprehensive emotional intelligence insights.',
      icon: MessageSquare,
      tags: ['Transformers', 'HuggingFace', 'BERT', 'Flask'],
      github: '#',
      live: '#',
    },
    {
      title: 'MLOps Pipeline',
      description: 'End-to-end machine learning pipeline with automated training, validation, and deployment for production ML systems.',
      icon: Workflow,
      tags: ['MLflow', 'Kubernetes', 'Airflow', 'Docker'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing innovative AI solutions that solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-8 rounded-2xl hover-glow group relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
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

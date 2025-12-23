import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: ' Assessly ',
      subtitle: 'A PDF to Quiz Generator',
      description: 'Developed an AI-driven application that converts PDF documents into automatically generated quizzes to support efficient learning and assessment. Implemented OpenAI GPT model for content analysis and question generation, with a streamlined web interface for real-time interaction.',
      image: './Assessly-Img.png',
      techStack: [ 'Python', 'FastAPI', 'Streamlit', 'LLM', 'PyPDF2', 'python-docx'],
      githubFrontend: '#',
      githubBackend: '#',
      live: '#',
    },
    {
      title: 'Phone Addiction Level Predictor',
      subtitle: 'Deep Learning Model',
      description: 'Developed a deep-learning based MLP model using PyTorch to analyze user behavior patterns and predict phone addiction levels, with an interactive Streamlit interface for real-time classification.',
      image: './Mobile-Addiction.png',
      techStack: ['PyTorch', 'Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'NumPy'],
      githubFrontend: '#',
      githubBackend: '#',
      live: '#',
    },
    {
      title: 'Content-Based Movie Recommendation System',
      subtitle: 'NLP Project',
      description: 'Built a machine learning model to recommend movies based on their content using the TMDb dataset. Preprocessed data, performed feature engineering on textual and categorical features (overview,cast, crew genres ) , and applied TF-IDF vectorization with cosine similarity to generate accurate recommendations.',
      image: './Movie-Recommend.png',
      techStack: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'scikit-learn', 'NLTK'],
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
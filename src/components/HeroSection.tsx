import { Linkedin, Github, FileText, Download } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-400" />

      <div className="container-custom relative z-10 text-center px-4">
        <p className="text-muted-foreground text-lg mb-4 animate-fade-in-up">
          Hello, I'm
        </p>

        <h1 className="font-display text-5xl md:text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="text-foreground">Prince Sikotra</span>
        </h1>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 animate-fade-in-up animation-delay-400">
          <span className="text-gradient">AI Engineer</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up animation-delay-600">
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => window.open('./Sikotra-CV 2.2.pdf', '_blank')}
            className="min-w-[180px]"
          >
            <FileText className="w-5 h-5 mr-2" />
            View Resume
          </Button>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => {
              const link = document.createElement('a');
              link.href = './Sikotra-CV 2.2.pdf';
              link.download = 'Sikotra-CV 2.2.pdf';
              link.click();
            }}
            className="min-w-[180px]"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-800">
          <a 
            href="https://www.linkedin.com/in/prince-sikotra-4a786a266/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-foreground/80 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/prisik-45" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-foreground/80 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full animate-pulse-glow hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/60 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-primary/40 rounded-full hidden lg:block" />
    </section>
  );
};

export default HeroSection;
import { ArrowDown, Sparkles } from 'lucide-react';
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">AI Engineer & ML Specialist</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="text-foreground">Building the</span>
          <br />
          <span className="text-gradient">Future with AI</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
          Transforming complex problems into intelligent solutions through 
          cutting-edge machine learning, deep learning, and neural network architectures.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
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

import { Brain, Cpu, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Expert in neural networks, CNNs, RNNs, and transformer architectures',
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Proficient in supervised, unsupervised, and reinforcement learning',
    },
    {
      icon: Zap,
      title: 'AI Solutions',
      description: 'Building production-ready AI systems that scale',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions',
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a passionate AI Engineer, I specialize in developing intelligent systems 
              that push the boundaries of what's possible. With expertise in machine learning, 
              deep learning, and natural language processing, I create solutions that transform 
              raw data into actionable insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in AI began with a fascination for how machines can learn and adapt. 
              Today, I work on cutting-edge projects involving computer vision, generative AI, 
              and large language models, always striving to bridge the gap between research 
              and real-world applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of AI to solve humanity's most pressing challenges, 
              and I'm committed to building ethical, transparent, and impactful AI systems.
            </p>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-6 rounded-xl hover-glow group cursor-default
                  ${index === 0 ? 'animate-fade-in-up' : ''}
                  ${index === 1 ? 'animate-fade-in-up animation-delay-200' : ''}
                  ${index === 2 ? 'animate-fade-in-up animation-delay-400' : ''}
                  ${index === 3 ? 'animate-fade-in-up animation-delay-600' : ''}
                `}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

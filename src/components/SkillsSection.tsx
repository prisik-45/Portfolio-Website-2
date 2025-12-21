const SkillsSection = () => {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Scikit-learn', icon: '📊' },
    { name: 'Deep Learning', icon: '🤖' },
    { name: 'NLP', icon: '💬' },
    { name: 'Computer Vision', icon: '👁️' },
    { name: 'LLMs', icon: '🦙' },
    { name: 'RAG', icon: '📚' },
    { name: 'AWS', icon: '☁️' },
    { name: 'GCP', icon: '🌐' },
    { name: 'Docker', icon: '🐳' },
    { name: 'MLflow', icon: '📈' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'OpenCV', icon: '📷' },
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="section-padding relative bg-card/30 overflow-hidden">
      <div className="container-custom mb-12">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Equipped with cutting-edge tools and technologies to build intelligent systems
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-8">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling Content */}
        <div className="flex marquee">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex-shrink-0 mx-4 px-6 py-4 glass-card rounded-xl flex items-center gap-3 hover:border-primary/50 transition-all duration-300 group cursor-default"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="font-medium text-foreground whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Reverse Direction */}
      <div className="relative w-full overflow-hidden py-8">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling Content - Reverse */}
        <div className="flex marquee" style={{ animationDirection: 'reverse' }}>
          {[...duplicatedSkills].reverse().map((skill, index) => (
            <div
              key={`${skill.name}-reverse-${index}`}
              className="flex-shrink-0 mx-4 px-6 py-4 glass-card rounded-xl flex items-center gap-3 hover:border-primary/50 transition-all duration-300 group cursor-default"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="font-medium text-foreground whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
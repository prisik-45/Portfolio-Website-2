const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 88 },
        { name: 'Scikit-learn', level: 92 },
      ],
    },
    {
      title: 'AI/ML Technologies',
      skills: [
        { name: 'Deep Learning', level: 92 },
        { name: 'NLP', level: 88 },
        { name: 'Computer Vision', level: 85 },
        { name: 'LLMs & RAG', level: 90 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'AWS/GCP', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'MLflow', level: 82 },
        { name: 'Hugging Face', level: 88 },
      ],
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Pandas/NumPy', level: 95 },
        { name: 'SQL', level: 88 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Feature Engineering', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Equipped with cutting-edge tools and technologies to build intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card p-8 rounded-2xl hover-glow"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-display">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-gold-light rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

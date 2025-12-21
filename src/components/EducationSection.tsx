import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'Your University',
      period: '2021 - 2023',
      description: 'Specialized in Deep Learning and Natural Language Processing. Research focused on Transformer architectures for multimodal learning.',
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Your University',
      period: '2017 - 2021',
      description: 'Focus on Machine Learning and Data Science. Graduated with honors. Minor in Mathematics.',
      icon: BookOpen,
    },
  ];

  const certifications = [
    'Deep Learning Specialization - Coursera',
    'AWS Machine Learning Specialty',
    'TensorFlow Developer Certificate',
    'Google Cloud Professional ML Engineer',
  ];

  return (
    <section id="education" className="section-padding relative bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education & Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Academic Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {education.map((item, index) => (
                <div key={item.degree} className="relative pl-16 pb-10 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl hover-glow">
                    <span className="text-sm text-primary font-display font-medium">
                      {item.period}
                    </span>
                    <h4 className="font-display text-xl font-bold text-foreground mt-2 mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-gold-light font-medium mb-3">
                      {item.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="glass-card p-5 rounded-xl hover-glow flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>

            {/* Stats - Updated for fresher */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '3', label: 'Projects' },
                { value: '4+', label: 'Certifications' },
                { value: '2+', label: 'Years Learning' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 rounded-xl text-center hover-glow">
                  <div className="font-display text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
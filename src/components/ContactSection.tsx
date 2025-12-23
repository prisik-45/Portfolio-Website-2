import { Mail, Phone, Linkedin, Github, FileText, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'princesikotra.05@gmail.com',
      href: 'princesikotra.05@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 xxxxxxxxxx',
      href: 'tel:+91xxxxxxxxxx',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/prince-sikotra',
      href: 'https://www.linkedin.com/in/prince-sikotra-4a786a266/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@prisik-45',
      href: 'https://github.com/prisik-45',
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold-light mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to bring AI innovation to your project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Ahmedabad, India</p>
                  </div>
                </div>

                <Button variant="hero" className="w-full" asChild>
                  <a href="./Sikotra-CV 2.2.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5 mr-2" />
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Prince"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="abc@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button variant="hero" className="w-full" type="submit">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

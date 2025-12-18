import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ankitkushwaha7787@gmail.com',
    href: 'mailto:ankitkushwaha7787@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9516924579',
    href: 'tel:+919516924579',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'ankit-kushwaha',
    href: 'https://www.linkedin.com/in/ankit-kushwaha-393450287/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Ankitkushwaha2004',
    href: 'https://github.com/Ankitkushwaha2004',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card-hover p-5 flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                      {contact.label}
                    </p>
                    <p className="text-foreground font-medium text-sm">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bhopal, India</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Ready to start a project together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out. I'll get back to you as soon as possible.
              </p>
              <Button
                variant="hero"
                size="lg"
                asChild
              >
                <a href="mailto:ankitkushwaha7787@gmail.com">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Code2, Database, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    icon: Wrench,
    skills: ['React.js', 'Spring Boot', 'Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Concepts & Tools',
    icon: Brain,
    skills: ['OOPs', 'DSA', 'Git', 'GitHub', 'CI/CD', 'REST APIs'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build robust applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card-hover p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

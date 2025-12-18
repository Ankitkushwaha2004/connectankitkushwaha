import { Building2, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'BHEL (Bharat Heavy Electricals Limited)',
    period: '2024',
    responsibilities: [
      'Integrated REST APIs to enable seamless data flow between frontend and backend systems',
      'Optimized frontend performance resulting in improved load times and user experience',
      'Collaborated in an agile team environment using Git and GitHub for version control',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience in building and optimizing web applications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card-hover p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

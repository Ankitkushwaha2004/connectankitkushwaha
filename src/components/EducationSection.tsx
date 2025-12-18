import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = {
  degree: 'Bachelor of Technology in Computer Science',
  institution: 'LNCT Group of Colleges, Bhopal',
  period: '2022 - 2026',
};

const certifications = [
  { name: 'Salesforce Developer', issuer: 'Salesforce' },
  { name: 'DotNet Full Stack', issuer: 'Microsoft' },
  { name: 'Generative AI', issuer: 'Various' },
  { name: 'Java Programming', issuer: 'Oracle' },
  { name: 'Networking', issuer: 'Cisco' },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <div className="glass-card-hover p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-foreground">
                {education.degree}
              </h4>
              <p className="text-primary">{education.institution}</p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4" />
                <span>{education.period}</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card-hover p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <p className="text-foreground text-sm font-medium">{cert.name}</p>
                  <p className="text-muted-foreground text-xs">{cert.issuer}</p>
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

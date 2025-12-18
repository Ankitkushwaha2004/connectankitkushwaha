import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Task Manager Web App',
    description: 'A full-featured task management application with CRUD operations, user authentication, and a responsive UI for seamless task organization.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'JWT'],
    github: '#',
    live: '#',
  },
  {
    title: 'URL Shortener',
    description: 'A URL shortening service with MongoDB backend, intelligent redirection logic, and caching for improved performance.',
    techStack: ['Node.js', 'MongoDB', 'Redis', 'Express'],
    github: '#',
    live: '#',
  },
  {
    title: 'Microservice Backend',
    description: 'Scalable microservice architecture with JWT authentication, RESTful APIs, and comprehensive unit testing coverage.',
    techStack: ['Spring Boot', 'Java', 'MySQL', 'JUnit'],
    github: '#',
    live: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card-hover p-6 flex flex-col group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Folder className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

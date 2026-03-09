import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plateforme de commerce en ligne complète avec gestion de stock, paiements Stripe et tableau de bord admin.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec temps réel, notifications et intégration Slack.",
    tech: ["Vue.js", "Firebase", "WebSockets"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard d'analyse de données avec visualisations interactives et rapports automatisés.",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "API Gateway",
    description: "Gateway API haute performance avec rate limiting, authentification et monitoring.",
    tech: ["Go", "Redis", "Docker", "Prometheus"],
    github: "#",
    live: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Mes <span className="text-gradient">projets</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Une sélection de projets personnels et professionnels sur lesquels j'ai travaillé
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl bg-gradient-card border border-border p-6 hover:border-primary/50 transition-all duration-300 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {project.featured && (
                <span className="inline-block px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full mb-4">
                  Featured
                </span>
              )}
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="hover:text-primary hover:bg-primary/10">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-accent hover:bg-accent/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
            <Github className="w-4 h-4 mr-2" />
            Voir plus sur GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Infrastructure réseau virtualisée",
    description: "Conception et configuration d'un réseau informatique complet dans un environnement virtualisé.",
    longDescription:
      "Projet technique consistant à concevoir, configurer et déployer un réseau informatique complet dans un environnement virtualisé. Ce projet a permis de mettre en pratique les compétences en administration réseau, virtualisation et sécurité des infrastructures.",
    features: [
      "Configuration IP complète (adressage, sous-réseaux, passerelles)",
      "Déploiement et configuration de services DNS",
      "Mise en place du service DHCP pour l'attribution automatique d'adresses",
      "Virtualisation de l'environnement réseau complet",
      "Documentation technique de l'infrastructure",
    ],
    tech: ["Virtualisation", "DNS", "DHCP", "Configuration IP"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Application web transactionnelle",
    description: "Développement d'une application web capable de gérer des utilisateurs et des transactions.",
    longDescription:
      "Application web complète développée dans le cadre de la formation en développement web transactionnel. Elle intègre un système d'authentification, une gestion de base de données et une API backend connectée à une interface dynamique.",
    features: [
      "Système d'authentification utilisateur sécurisé",
      "Gestion de base de données relationnelle",
      "API backend pour le traitement des données",
      "Interface web dynamique et responsive",
      "Gestion des transactions et validation des données",
    ],
    tech: ["HTML", "CSS", "JavaScript", "SQL", "API REST"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Administration de serveur",
    description: "Installation et configuration d'un serveur informatique capable d'héberger des services web.",
    longDescription:
      "Projet d'administration système consistant à installer, configurer et sécuriser un serveur informatique de A à Z. Le serveur est capable d'héberger des services web et de gérer les accès utilisateurs de manière sécurisée.",
    features: [
      "Installation et configuration du système d'exploitation Linux",
      "Déploiement de services web (Apache/Nginx)",
      "Configuration de la sécurité serveur (pare-feu, accès SSH)",
      "Gestion des utilisateurs et des permissions",
      "Monitoring et maintenance du serveur",
    ],
    tech: ["Linux", "Gestion des services", "Sécurité serveur"],
    github: "#",
    live: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
            Projets <span className="text-gradient">techniques</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Projets réalisés dans le cadre de mes formations en technologies de l'information
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-gradient-card border border-border p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {project.featured && (
                <span className="inline-block px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full mb-4">
                  Projet principal
                </span>
              )}

              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-xs text-primary mt-4 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                Cliquer pour voir les détails →
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-background border-border max-w-lg">
          <DialogHeader>
            {selectedProject?.featured && (
              <span className="inline-block px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded-full w-fit mb-1">
                Projet principal
              </span>
            )}
            <DialogTitle className="text-xl text-gradient">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-2 leading-relaxed">
              {selectedProject?.longDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2">
            <h4 className="text-sm font-semibold text-foreground mb-3">Réalisations :</h4>
            <ul className="space-y-2">
              {selectedProject?.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-2">
            <h4 className="text-sm font-semibold text-foreground mb-2">Technologies :</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject?.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-secondary rounded text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;

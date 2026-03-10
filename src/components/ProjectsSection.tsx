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
    title: "E-Commerce Platform",
    description: "Plateforme de commerce en ligne complète avec gestion de stock, paiements Stripe et tableau de bord admin.",
    longDescription: "Cette plateforme e-commerce a été conçue pour offrir une expérience d'achat fluide et moderne. Elle inclut un catalogue produit dynamique, un panier persistant, un système de paiement sécurisé via Stripe, ainsi qu'un tableau de bord administrateur complet pour gérer les commandes, les stocks et les utilisateurs.",
    features: [
      "Catalogue produit avec filtres et recherche avancée",
      "Panier d'achat persistant avec gestion des quantités",
      "Paiements sécurisés via Stripe (cartes, Apple Pay)",
      "Dashboard admin avec analytics en temps réel",
      "Système de notifications email automatisé",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec temps réel, notifications et intégration Slack.",
    longDescription: "Application de productivité collaborative permettant aux équipes de gérer leurs projets et tâches en temps réel. Inspirée de Trello et Notion, elle offre une interface drag-and-drop intuitive avec des vues Kanban, liste et calendrier.",
    features: [
      "Interface drag-and-drop avec vues Kanban et liste",
      "Synchronisation temps réel entre utilisateurs",
      "Notifications push et intégration Slack/Discord",
      "Système de labels, priorités et deadlines",
      "Rapports de productivité hebdomadaires",
    ],
    tech: ["Vue.js", "Firebase", "WebSockets"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard d'analyse de données avec visualisations interactives et rapports automatisés.",
    longDescription: "Tableau de bord d'analyse de données conçu pour transformer des données brutes en insights visuels. Utilise D3.js pour des graphiques interactifs et un backend Python/FastAPI pour le traitement des données.",
    features: [
      "Graphiques interactifs avec D3.js (barres, lignes, scatter)",
      "Filtres dynamiques et drill-down sur les données",
      "Export PDF et CSV des rapports",
      "Alertes automatiques basées sur des seuils",
      "API REST pour l'intégration avec d'autres outils",
    ],
    tech: ["React", "D3.js", "Python", "FastAPI"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "API Gateway",
    description: "Gateway API haute performance avec rate limiting, authentification et monitoring.",
    longDescription: "Gateway API développée en Go pour gérer le trafic vers des microservices. Conçue pour la haute disponibilité avec du rate limiting intelligent, de l'authentification centralisée et du monitoring en temps réel.",
    features: [
      "Rate limiting configurable par endpoint et par utilisateur",
      "Authentification centralisée (JWT, API keys, OAuth2)",
      "Load balancing et circuit breaker automatique",
      "Monitoring temps réel avec Prometheus et Grafana",
      "Logs structurés et tracing distribué",
    ],
    tech: ["Go", "Redis", "Docker", "Prometheus"],
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
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-2xl bg-gradient-card border border-border p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer ${
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary hover:bg-primary/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-accent hover:bg-accent/10"
                  onClick={(e) => e.stopPropagation()}
                >
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

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-background border-border max-w-lg">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              {selectedProject?.featured && (
                <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded-full">
                  Featured
                </span>
              )}
            </div>
            <DialogTitle className="text-xl text-gradient">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-2 leading-relaxed">
              {selectedProject?.longDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2">
            <h4 className="text-sm font-semibold text-foreground mb-3">Fonctionnalités :</h4>
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

          <div className="flex gap-3 mt-4">
            <Button variant="outline" size="sm" className="border-primary/50 hover:border-primary hover:bg-primary/10">
              <Github className="w-4 h-4 mr-2" />
              Voir le code
            </Button>
            <Button variant="outline" size="sm" className="border-accent/50 hover:border-accent hover:bg-accent/10">
              <ExternalLink className="w-4 h-4 mr-2" />
              Voir la demo
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;

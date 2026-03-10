import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const skills = [
  {
    name: "React / Next.js",
    level: 95,
    description: "Développement d'interfaces utilisateur modernes et performantes avec React et Next.js. Maîtrise des hooks, du state management (Redux, Zustand), du SSR/SSG et de l'optimisation des performances.",
    details: [
      "Applications SPA et SSR à grande échelle",
      "Composants réutilisables et design systems",
      "Optimisation des re-renders et lazy loading",
      "Tests unitaires avec Jest et React Testing Library",
    ],
  },
  {
    name: "TypeScript",
    level: 90,
    description: "Utilisation avancée de TypeScript pour garantir la robustesse et la maintenabilité du code. Types génériques, utility types, et intégration complète dans les projets React et Node.js.",
    details: [
      "Types génériques et conditionnels avancés",
      "Validation de schémas avec Zod",
      "Migration de projets JavaScript vers TypeScript",
      "Configuration stricte et bonnes pratiques",
    ],
  },
  {
    name: "Node.js",
    level: 88,
    description: "Création d'APIs REST et GraphQL performantes avec Express, Fastify et NestJS. Gestion de l'authentification, des webhooks et des tâches asynchrones.",
    details: [
      "APIs RESTful et GraphQL",
      "Microservices et architecture événementielle",
      "Gestion des files d'attente (Bull, RabbitMQ)",
      "Authentification JWT et OAuth2",
    ],
  },
  {
    name: "Python",
    level: 85,
    description: "Scripting, automatisation et développement backend avec Django et FastAPI. Expérience en data processing et machine learning basique.",
    details: [
      "APIs avec FastAPI et Django REST",
      "Scripts d'automatisation et ETL",
      "Analyse de données avec Pandas",
      "Intégration de modèles ML",
    ],
  },
  {
    name: "PostgreSQL",
    level: 82,
    description: "Conception de schémas de bases de données relationnelles, optimisation des requêtes, migrations et gestion de la performance.",
    details: [
      "Modélisation relationnelle avancée",
      "Optimisation des requêtes et indexation",
      "Migrations avec Prisma et Drizzle",
      "Réplication et haute disponibilité",
    ],
  },
  {
    name: "Docker / Kubernetes",
    level: 78,
    description: "Conteneurisation d'applications et orchestration avec Kubernetes. CI/CD pipelines et déploiements automatisés.",
    details: [
      "Création de Dockerfiles optimisés multi-stage",
      "Orchestration avec Kubernetes (Helm, Kustomize)",
      "CI/CD avec GitHub Actions et GitLab CI",
      "Monitoring avec Prometheus et Grafana",
    ],
  },
  {
    name: "AWS / GCP",
    level: 75,
    description: "Déploiement et gestion d'infrastructures cloud. Services serverless, stockage, CDN et bases de données managées.",
    details: [
      "Lambda, S3, CloudFront, RDS (AWS)",
      "Cloud Functions, Cloud Run (GCP)",
      "Infrastructure as Code avec Terraform",
      "Monitoring et alerting cloud-native",
    ],
  },
  {
    name: "GraphQL",
    level: 80,
    description: "Conception et implémentation d'APIs GraphQL avec Apollo Server et Client. Gestion du cache, des subscriptions et de la pagination.",
    details: [
      "Schemas et resolvers avec Apollo Server",
      "Cache normalisé côté client",
      "Subscriptions temps réel avec WebSockets",
      "Federation pour architectures microservices",
    ],
  },
];

const tools = [
  "Git", "VS Code", "Figma", "Postman", "Jira", "Linux", "CI/CD", "Terraform"
];

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);

  return (
    <section id="skills" className="py-24 relative bg-gradient-hero">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Mes <span className="text-gradient">compétences</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Technologies et outils que j'utilise au quotidien pour créer des solutions performantes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Technologies principales
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  onClick={() => setSelectedSkill(skill)}
                  className="cursor-pointer group/skill"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium group-hover/skill:text-primary transition-colors">{skill.name}</span>
                    <span className="text-primary font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Outils & Environnement
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-secondary border border-border font-mono text-sm hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-gradient-card border border-border">
              <h4 className="font-semibold mb-4 text-primary">Certifications</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  AWS Solutions Architect
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Google Cloud Professional
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Kubernetes Administrator (CKA)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skill Detail Dialog */}
      <Dialog open={!!selectedSkill} onOpenChange={(open) => !open && setSelectedSkill(null)}>
        <DialogContent className="bg-background border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-3">
              <span className="text-gradient">{selectedSkill?.name}</span>
              <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                {selectedSkill?.level}%
              </span>
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-2">
              {selectedSkill?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2">
            <h4 className="text-sm font-semibold text-foreground mb-3">Points clés :</h4>
            <ul className="space-y-2">
              {selectedSkill?.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SkillsSection;

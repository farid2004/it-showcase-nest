import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const skillCategories = [
  {
    title: "Administration système",
    color: "primary",
    skills: [
      { name: "Installation et configuration de serveurs", level: 85 },
      { name: "Gestion des utilisateurs et permissions", level: 80 },
      { name: "Automatisation des tâches", level: 75 },
    ],
    description: "Compétences en installation, configuration et gestion de systèmes d'exploitation serveurs et postes de travail. Automatisation des processus et gestion des accès.",
    details: [
      "Installation et configuration de serveurs Linux et Windows",
      "Gestion des comptes utilisateurs, groupes et permissions",
      "Scripts d'automatisation (Bash, PowerShell)",
      "Surveillance et maintenance des systèmes",
      "Gestion des mises à jour et correctifs",
    ],
  },
  {
    title: "Réseaux",
    color: "accent",
    skills: [
      { name: "Configuration IP", level: 82 },
      { name: "DNS et DHCP", level: 80 },
      { name: "Gestion de réseaux locaux", level: 85 },
      { name: "Sécurité des infrastructures", level: 78 },
    ],
    description: "Planification, implantation et gestion de réseaux informatiques incluant le routage, les protocoles de communication et la sécurité des infrastructures.",
    details: [
      "Configuration d'adresses IP et sous-réseaux",
      "Déploiement et gestion de services DNS et DHCP",
      "Gestion de réseaux locaux (LAN/WLAN)",
      "Routage et protocoles de communication",
      "Diagnostic et résolution de problèmes réseau",
      "Sécurisation des infrastructures réseau",
    ],
  },
  {
    title: "Développement Web",
    color: "primary",
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "APIs Web", level: 80 },
      { name: "Bases de données", level: 78 },
    ],
    description: "Conception et développement d'applications web transactionnelles avec interfaces dynamiques, authentification et gestion de données.",
    details: [
      "Développement front-end responsive (HTML, CSS, JavaScript)",
      "Programmation côté serveur et APIs REST",
      "Gestion de bases de données SQL et NoSQL",
      "Authentification et sécurité des applications web",
      "Architecture client-serveur",
      "Intégration de systèmes de paiement",
    ],
  },
  {
    title: "Cloud et virtualisation",
    color: "accent",
    skills: [
      { name: "Machines virtuelles", level: 78 },
      { name: "Infrastructures virtualisées", level: 75 },
      { name: "Déploiement d'applications", level: 72 },
    ],
    description: "Administration d'environnements virtualisés et déploiement d'applications dans des infrastructures cloud et on-premise.",
    details: [
      "Création et gestion de machines virtuelles",
      "Administration d'infrastructures virtualisées",
      "Déploiement et configuration d'applications",
      "Gestion des ressources et de la performance",
    ],
  },
];

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof skillCategories[0] | null>(null);

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
            Compétences <span className="text-gradient">techniques</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Technologies et domaines maîtrisés à travers mes formations en IT
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              onClick={() => setSelectedCategory(category)}
              className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 group-hover:text-primary transition-colors">
                <span className={`w-2 h-2 rounded-full ${category.color === "primary" ? "bg-primary" : "bg-accent"}`} />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-primary font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          category.color === "primary"
                            ? "bg-gradient-to-r from-primary to-accent"
                            : "bg-gradient-to-r from-accent to-primary"
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-primary mt-4 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                Cliquer pour plus de détails →
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skill Category Detail Dialog */}
      <Dialog open={!!selectedCategory} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <DialogContent className="bg-background border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-gradient">
              {selectedCategory?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-2 leading-relaxed">
              {selectedCategory?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2">
            <h4 className="text-sm font-semibold text-foreground mb-3">Détails des compétences :</h4>
            <ul className="space-y-2">
              {selectedCategory?.details.map((detail, i) => (
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

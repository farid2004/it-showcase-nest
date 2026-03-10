import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const formations = [
  {
    title: "Développement de sites Web transactionnels",
    school: "Collège Ahuntsic",
    hours: "~1170 heures",
    description:
      "Formation intensive visant à former des spécialistes capables de concevoir, programmer et administrer des applications web interactives et transactionnelles.",
    skills: [
      "Développement web front-end",
      "Programmation JavaScript",
      "Conception d'interfaces web",
      "Développement côté serveur",
      "Gestion des bases de données",
      "Sécurité des applications web",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "APIs Web", "Architecture client-serveur", "SQL", "NoSQL"],
    extra: "Cette formation permet de développer des applications web complètes avec authentification, gestion de données et intégration de systèmes de paiement.",
  },
  {
    title: "Gestion de réseaux, sécurité et virtualisation",
    school: "Cégep de Rosemont",
    hours: "",
    description:
      "Programme formant des techniciens capables d'installer, administrer et sécuriser des infrastructures informatiques.",
    skills: [
      "Planifier et implanter un réseau informatique",
      "Gérer les réseaux locaux et connexions Internet",
      "Diagnostiquer et résoudre les problèmes réseau",
      "Administrer des infrastructures virtualisées",
      "Assurer la sécurité des systèmes informatiques",
    ],
    technologies: ["Administration de réseaux", "Cybersécurité", "Virtualisation", "Gestion d'infrastructure", "Maintenance des systèmes"],
    extra: "Inclut la gestion de réseaux d'entreprise (routage, protocoles de communication, environnements virtualisés) et un stage en entreprise.",
  },
  {
    title: "Techniques des systèmes informatiques",
    school: "Collège La Cité",
    hours: "",
    description:
      "Programme permettant d'acquérir des compétences en installation, configuration et gestion de systèmes informatiques et de réseaux.",
    skills: [
      "Installer et configurer des systèmes d'exploitation",
      "Administrer des serveurs et postes de travail",
      "Gérer les réseaux locaux",
      "Automatiser certaines tâches informatiques",
      "Gérer les bases de données et services web",
    ],
    technologies: ["Systèmes d'exploitation", "Serveurs", "Réseaux locaux", "Automatisation", "Bases de données"],
    extra: "Couvre également la gestion des applications et infrastructures informatiques dans un environnement professionnel.",
  },
];

const FormationSection = () => {
  const [selected, setSelected] = useState<typeof formations[0] | null>(null);

  return (
    <section id="formation" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Parcours de <span className="text-gradient">formation</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Formations spécialisées en technologies de l'information
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setSelected(formation)}
              className="group relative rounded-2xl bg-gradient-card border border-border p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                {formation.title}
              </h3>

              <p className="text-sm text-accent font-mono mb-3">{formation.school}</p>
              {formation.hours && (
                <p className="text-xs text-muted-foreground font-mono mb-3">{formation.hours}</p>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {formation.description}
              </p>

              <p className="text-xs text-primary mt-4 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                Cliquer pour voir les détails →
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Formation Detail Dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="bg-background border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl text-gradient leading-tight">
              {selected?.title}
            </DialogTitle>
            <p className="text-sm text-accent font-mono pt-1">
              {selected?.school} {selected?.hours && `· ${selected.hours}`}
            </p>
            <DialogDescription className="text-muted-foreground pt-2 leading-relaxed">
              {selected?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2">
            <h4 className="text-sm font-semibold text-foreground mb-3">Compétences développées :</h4>
            <ul className="space-y-2">
              {selected?.skills.map((skill, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3">
            <h4 className="text-sm font-semibold text-foreground mb-2">Technologies & domaines :</h4>
            <div className="flex flex-wrap gap-2">
              {selected?.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-secondary rounded text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {selected?.extra && (
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed italic">
              {selected.extra}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FormationSection;

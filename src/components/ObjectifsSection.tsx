import { motion } from "framer-motion";
import { Server, Shield, Code2, Cloud } from "lucide-react";

const objectifs = [
  {
    icon: Server,
    title: "Administrateur système",
    description: "Gérer et maintenir les infrastructures informatiques d'entreprise.",
  },
  {
    icon: Shield,
    title: "Spécialiste réseau",
    description: "Concevoir, déployer et sécuriser les réseaux informatiques.",
  },
  {
    icon: Code2,
    title: "Développeur web",
    description: "Créer des applications web modernes et transactionnelles.",
  },
  {
    icon: Cloud,
    title: "Ingénieur infrastructure cloud",
    description: "Administrer des environnements cloud et virtualisés.",
  },
];

const ObjectifsSection = () => {
  return (
    <section id="objectifs" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Objectifs <span className="text-gradient">professionnels</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Mon objectif est de travailler dans le domaine des technologies de l'information en tant que
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {objectifs.map((obj, index) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <obj.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {obj.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {obj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectifsSection;

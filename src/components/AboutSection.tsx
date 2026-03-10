import { motion } from "framer-motion";
import { Code2, Server, Shield, Cloud } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, label: "Développement Web", desc: "HTML, CSS, JavaScript, APIs" },
    { icon: Shield, label: "Réseaux & Sécurité", desc: "DNS, DHCP, Cybersécurité" },
    { icon: Server, label: "Administration Système", desc: "Linux, Serveurs, Automatisation" },
    { icon: Cloud, label: "Cloud & Virtualisation", desc: "VMs, Déploiement, Infrastructure" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Un profil polyvalent en technologies de l'information
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl bg-gradient-card border border-border overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="font-mono text-6xl text-gradient">IT</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ce portfolio présente mon parcours et mes compétences dans le domaine des technologies de l'information. 
              Il s'appuie sur des formations spécialisées en développement web transactionnel, gestion de réseaux et 
              sécurité, ainsi qu'administration de systèmes informatiques.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ces formations me permettent de développer un profil polyvalent capable de concevoir des applications web, 
              gérer des infrastructures réseau et administrer des systèmes informatiques dans un environnement professionnel.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <item.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1 text-sm">{item.label}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

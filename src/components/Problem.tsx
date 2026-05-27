"use client";

import { motion } from "motion/react";

const PROBLEMS = [
  {
    icon: "bolt",
    title: "Fadiga de Performance",
    description:
      "A perda de 2% do peso em água reduz o débito cardíaco e a capacidade aeróbica.",
  },
  {
    icon: "psychology",
    title: "Declínio Cognitivo",
    description:
      'Dores de cabeça e "brain fog" são respostas fisiológicas diretas ao estresse osmótico.',
  },
  {
    icon: "medical_services",
    title: "Instabilidade Metabólica",
    description:
      "Processos enzimáticos essenciais dependem de um estado hídrico homeostático constante.",
  },
];

export function Problem() {
  return (
    <section
      id="product"
      className="relative py-32 mesh-gradient overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/images/onde_2.mp4" type="video/mp4" />
      </video>

      {/* Overlay — só no centro para legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          initial={{ opacity: 0, y: 30, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <h2 className="font-headline text-[48px] md:text-[64px] leading-tight mb-6">
              O custo invisível da{" "}
              <span className="text-primary italic">desidratação</span>.
            </h2>
            <p className="text-xl text-on-surface-variant">
              Pequenas quedas nos níveis de água impactam massivamente a
              cognição e o metabolismo basal.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className="p-12 bg-white/30 backdrop-blur-sm border border-outline/15 rounded-2xl shadow-lg group"
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              initial={{ opacity: 0, y: -200, rotate: [0, 15, -10, 5, 0][i] }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 80,
                delay: i * 0.15,
              }}
            >
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {item.icon}
                </span>
              </span>
              <h3 className="font-headline text-[28px] mb-6">{item.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

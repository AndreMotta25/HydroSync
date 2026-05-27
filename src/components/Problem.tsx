"use client";

import { motion, useScroll, useMotionValue, useMotionValueEvent, type MotionValue } from "motion/react";
import { useRef } from "react";

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
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef0 = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  const { scrollYProgress: s0 } = useScroll({
    target: subtitleRef,
    offset: ["start 0%", "start -30%"],
  });
  const { scrollYProgress: s1 } = useScroll({
    target: cardRef0,
    offset: ["start 0%", "start -30%"],
  });
  const { scrollYProgress: s2 } = useScroll({
    target: cardRef1,
    offset: ["start 0%", "start -30%"],
  });
  const { scrollYProgress: s3 } = useScroll({
    target: cardRef2,
    offset: ["start 0%", "start -30%"],
  });

  const subtitleOpacity = useMotionValue(1);
  const subtitleY = useMotionValue(0);

  const cardOpacity0 = useMotionValue(1);
  const cardY0 = useMotionValue(0);
  const cardOpacity1 = useMotionValue(1);
  const cardY1 = useMotionValue(0);
  const cardOpacity2 = useMotionValue(1);
  const cardY2 = useMotionValue(0);

  const updateValues = (progress: number, opacity: MotionValue, y: MotionValue, yMax: number = -60) => {
    const clamped = Math.min(Math.max(progress, 0), 1);
    const eased = 1 - Math.pow(1 - clamped, 3); // ease-out cubic
    opacity.set(1 - eased);
    y.set(yMax * eased);
  };

  useMotionValueEvent(s0, "change", (v) => updateValues(v, subtitleOpacity, subtitleY, -40));
  useMotionValueEvent(s1, "change", (v) => updateValues(v, cardOpacity0, cardY0));
  useMotionValueEvent(s2, "change", (v) => updateValues(v, cardOpacity1, cardY1));
  useMotionValueEvent(s3, "change", (v) => updateValues(v, cardOpacity2, cardY2));

  return (
    <section
      id="product"
      ref={sectionRef}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Subtitle */}
        <motion.div
          ref={subtitleRef}
          style={{ opacity: subtitleOpacity, y: subtitleY }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          initial={{ rotate: -5 }}
          whileInView={{ rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 0 — Fadiga de Performance */}
          <motion.div ref={cardRef0} className="relative" style={{ top: cardY0 }}>
            <motion.div
              style={{ opacity: cardOpacity0 }}
              initial={{ opacity: 0, y: -200, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -24 }}
              transition={{
                default: { type: "spring", damping: 20, stiffness: 80, delay: 0 },
                y: { type: "tween", duration: 0.6, ease: "easeOut" },
              }}
              className="p-12 bg-white/30 backdrop-blur-sm border border-outline/15 rounded-2xl shadow-lg hover:shadow-2xl group"
            >
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
              </span>
              <h3 className="font-headline text-[28px] mb-6">{PROBLEMS[0].title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">{PROBLEMS[0].description}</p>
            </motion.div>
          </motion.div>

          {/* Card 1 — Declínio Cognitivo */}
          <motion.div ref={cardRef1} className="relative" style={{ top: cardY1 }}>
            <motion.div
              style={{ opacity: cardOpacity1 }}
              initial={{ opacity: 0, y: -200, rotate: 15 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -24 }}
              transition={{
                default: { type: "spring", damping: 20, stiffness: 80, delay: 0.15 },
                y: { type: "tween", duration: 0.6, ease: "easeOut" },
              }}
              className="p-12 bg-white/30 backdrop-blur-sm border border-outline/15 rounded-2xl shadow-lg hover:shadow-2xl group"
            >
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              </span>
              <h3 className="font-headline text-[28px] mb-6">{PROBLEMS[1].title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">{PROBLEMS[1].description}</p>
            </motion.div>
          </motion.div>

          {/* Card 2 — Instabilidade Metabólica */}
          <motion.div ref={cardRef2} className="relative" style={{ top: cardY2 }}>
            <motion.div
              style={{ opacity: cardOpacity2 }}
              initial={{ opacity: 0, y: -200, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -24 }}
              transition={{
                default: { type: "spring", damping: 20, stiffness: 80, delay: 0.3 },
                y: { type: "tween", duration: 0.6, ease: "easeOut" },
              }}
              className="p-12 bg-white/30 backdrop-blur-sm border border-outline/15 rounded-2xl shadow-lg hover:shadow-2xl group"
            >
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">medical_services</span>
              </span>
              <h3 className="font-headline text-[28px] mb-6">{PROBLEMS[2].title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">{PROBLEMS[2].description}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

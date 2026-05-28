"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";

const STEPS = [
  {
    number: "01",
    title: "BIO-CONFIG",
    description:
      'Sincronização via Bluetooth para definir o "Golden Baseline" baseado no seu metabolismo basal.',
  },
  {
    number: "02",
    title: "MONITORING",
    description:
      "Captura passiva. Cada gole é processado e comparado com sua meta dinâmica em tempo real.",
  },
  {
    number: "03",
    title: "LED CUES",
    description:
      "Estímulos visuais discretos no anel de luz corrigem comportamentos de desidratação antes da sede surgir.",
  },
  {
    number: "04",
    title: "EVOLUTION",
    description:
      "Análise de longo prazo no App. Descubra como a hidratação afeta seu sono e produtividade.",
  },
];

export function HowItWorks() {
  const subtitleRef = useRef(null);
  const cardRef0 = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);

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
  const { scrollYProgress: s4 } = useScroll({
    target: cardRef3,
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
  const cardOpacity3 = useMotionValue(1);
  const cardY3 = useMotionValue(0);

  const updateValues = (
    progress: number,
    opacity: MotionValue,
    y: MotionValue,
    yMax: number = -60
  ) => {
    const clamped = Math.min(Math.max(progress, 0), 1);
    const eased = 1 - Math.pow(1 - clamped, 3);
    opacity.set(1 - eased);
    y.set(yMax * eased);
  };

  useMotionValueEvent(s0, "change", (v) =>
    updateValues(v, subtitleOpacity, subtitleY, -40)
  );
  useMotionValueEvent(s1, "change", (v) =>
    updateValues(v, cardOpacity0, cardY0)
  );
  useMotionValueEvent(s2, "change", (v) =>
    updateValues(v, cardOpacity1, cardY1)
  );
  useMotionValueEvent(s3, "change", (v) =>
    updateValues(v, cardOpacity2, cardY2)
  );
  useMotionValueEvent(s4, "change", (v) =>
    updateValues(v, cardOpacity3, cardY3)
  );

  return (
    <section
      id="how-it-works"
      className="py-32 bg-on-surface text-surface relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Subtitle */}
        <motion.div
          ref={subtitleRef}
          style={{ opacity: subtitleOpacity, y: subtitleY }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-32 border-b border-surface/10 pb-20"
          initial={{ rotate: -5 }}
          whileInView={{ rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-headline text-[48px] md:text-[64px] tracking-tight leading-[0.9]">
            Seu ciclo de <br />
            <span className="text-primary-fixed italic">otimização hídrica.</span>
          </h2>
          <p className="font-body text-outline-variant max-w-sm mt-8 md:mt-0 text-xl">
            Uma jornada contínua entre dados clínicos e bem-estar subjetivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-0">
          {/* Card 0 — BIO-CONFIG */}
          <motion.div
            ref={cardRef0}
            className={`relative md:pr-12 md:border-r border-surface/5`}
            style={{ top: cardY0 }}
          >
            <div className="text-[140px] font-headline opacity-5 absolute -top-24 -left-6 leading-none">
              {STEPS[0].number}
            </div>
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
            >
              <h4 className="font-headline text-[28px] mb-8 relative font-bold">
                {STEPS[0].title}
              </h4>
              <p className="text-outline-variant text-lg leading-relaxed">
                {STEPS[0].description}
              </p>
            </motion.div>
          </motion.div>

          {/* Card 1 — MONITORING */}
          <motion.div
            ref={cardRef1}
            className={`relative md:px-12 md:border-r border-surface/5`}
            style={{ top: cardY1 }}
          >
            <div className="text-[140px] font-headline opacity-5 absolute -top-24 -left-6 leading-none">
              {STEPS[1].number}
            </div>
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
            >
              <h4 className="font-headline text-[28px] mb-8 relative font-bold">
                {STEPS[1].title}
              </h4>
              <p className="text-outline-variant text-lg leading-relaxed">
                {STEPS[1].description}
              </p>
            </motion.div>
          </motion.div>

          {/* Card 2 — LED CUES */}
          <motion.div
            ref={cardRef2}
            className={`relative md:px-12 md:border-r border-surface/5`}
            style={{ top: cardY2 }}
          >
            <div className="text-[140px] font-headline opacity-5 absolute -top-24 -left-6 leading-none">
              {STEPS[2].number}
            </div>
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
            >
              <h4 className="font-headline text-[28px] mb-8 relative font-bold">
                {STEPS[2].title}
              </h4>
              <p className="text-outline-variant text-lg leading-relaxed">
                {STEPS[2].description}
              </p>
            </motion.div>
          </motion.div>

          {/* Card 3 — EVOLUTION */}
          <motion.div
            ref={cardRef3}
            className={`relative md:pl-12`}
            style={{ top: cardY3 }}
          >
            <div className="text-[140px] font-headline opacity-5 absolute -top-24 -left-6 leading-none">
              {STEPS[3].number}
            </div>
            <motion.div
              style={{ opacity: cardOpacity3 }}
              initial={{ opacity: 0, y: -200, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -24 }}
              transition={{
                default: { type: "spring", damping: 20, stiffness: 80, delay: 0.45 },
                y: { type: "tween", duration: 0.6, ease: "easeOut" },
              }}
            >
              <h4 className="font-headline text-[28px] mb-8 relative font-bold">
                {STEPS[3].title}
              </h4>
              <p className="text-outline-variant text-lg leading-relaxed">
                {STEPS[3].description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

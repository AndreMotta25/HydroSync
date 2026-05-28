"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const TESTIMONIALS = [
  {
    quote:
      "A HydroSync removeu o atrito da manutenção biológica. Como designer, o foco é meu ativo mais valioso e agora ele é constante.",
    name: "Camila R.",
    role: "Senior Product Designer",
    initials: "CR",
    color: "bg-primary-fixed text-primary",
  },
  {
    quote:
      "O anel de luz é o único 'notificador' que eu permito no meu escritório. Eficiente, discreto e clinicamente necessário.",
    name: "Rafael M.",
    role: "Software Architect",
    initials: "RM",
    color: "bg-secondary-fixed text-secondary",
  },
  {
    quote:
      "Integrar meus dados de treino com o consumo real de água mudou meu tempo de recuperação. Tecnologia indispensável.",
    name: "Fernanda L.",
    role: "Performance Athlete",
    initials: "FL",
    color: "bg-tertiary-fixed text-tertiary",
  },
  {
    quote:
      "Depois de 30 dias com a HydroSync, minhas crises de enxaqueca caíram 70%. Dados que o médico levou a sério.",
    name: "Lucas T.",
    role: "Neurologista",
    initials: "LT",
    color: "bg-primary-fixed text-primary",
  },
  {
    quote:
      "Uso durante cirurgias de 8 horas. O alerta visual me mantém hidratada sem tirar a concentração do procedimento.",
    name: "Dra. Mariana S.",
    role: "Cirurgiã Ortopédica",
    initials: "MS",
    color: "bg-secondary-fixed text-secondary",
  },
  {
    quote:
      "Meu rendimento no Ironman subiu 12% só com a otimização hídrica. A garrafa que todo atleta deveria ter.",
    name: "André P.",
    role: "Triathleta Profissional",
    initials: "AP",
    color: "bg-tertiary-fixed text-tertiary",
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Stars() {
  return (
    <div className="flex gap-1 text-primary mb-10">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[20px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

function pickThree(list: typeof TESTIMONIALS) {
  return shuffle(list).slice(0, 3);
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [groups, setGroups] = useState<(typeof TESTIMONIALS)[number][][]>(
    [TESTIMONIALS.slice(0, 3), TESTIMONIALS.slice(0, 3), TESTIMONIALS.slice(0, 3)]
  );

  useEffect(() => {
    setGroups([pickThree(TESTIMONIALS), pickThree(TESTIMONIALS), pickThree(TESTIMONIALS)]);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => {
      const nextIdx = (prev + 1) % groups.length;
      if (nextIdx === 0) {
        setGroups([
          pickThree(TESTIMONIALS),
          pickThree(TESTIMONIALS),
          pickThree(TESTIMONIALS),
        ]);
      }
      return nextIdx;
    });
  }, [groups.length]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      id="testimonials"
      className="py-40 bg-surface-container-lowest overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-24">
          <h2 className="font-headline text-[48px] md:text-[64px] tracking-tight mb-6">
            Utilizado por mentes
            <br />
            em alta frequência.
          </h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {groups[current].map((t) => (
              <div
                key={t.name}
                className="p-12 glass-card rounded-[32px] border border-outline/5 hover:border-primary/20 transition-all group"
              >
                <Stars />
                <p className="text-xl text-on-surface leading-relaxed mb-12 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-5">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{t.name}</p>
                    <p className="font-label text-on-surface-variant font-semibold uppercase tracking-widest text-[10px]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <div className="flex gap-3">
            {groups.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="min-h-[44px] flex items-center cursor-pointer"
                aria-label={`Ir para slide ${i + 1}`}
              >
                <span
                  className={`block h-[3px] rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-12 bg-on-surface"
                      : "w-6 bg-on-surface/20 hover:bg-on-surface/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

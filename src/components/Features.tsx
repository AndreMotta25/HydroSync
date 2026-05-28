"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    image: "/images/imagem-1.webp",
    tag: "ALGORITMOS PREDITIVOS",
    title: "Não medimos apenas\nágua.",
    description:
      "Calculamos sua necessidade baseado em clima, atividade e dados antropométricos.",
  },
  {
    image: "/images/imagem-2.webp",
    tag: "AUTONOMIA RADICAL",
    title: "45 minutos.\n30 dias.",
    description:
      "Sistema de carregamento magnético que sustenta 30 dias de monitoramento constante com uma única carga.",
  },
  {
    image: "/images/imagem-3.webp",
    tag: "RESISTÊNCIA MILITAR",
    title: "Projeto para\no real.",
    description:
      "Certificado IPX7. Construído em aço inox 316L para acompanhar qualquer ambiente.",
  },
  {
    image: "/images/imagem-4.webp",
    tag: "SENSORES ULTRASSÔNICOS",
    title: "Precisão de\ngrau laboratorial.",
    description:
      "Sensores integrados na tampa capturam cada gole sem contato físico com a água.",
  },
];

export function Features() {
  const [current, setCurrent] = useState(0);

  // Auto-play
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="features" className="relative w-full overflow-hidden">
      {/* Full-width slide */}
      <div className="relative min-h-[80vh] md:min-h-screen w-full">
        {/* Background glow */}
        <div className="absolute inset-0 bg-primary/10 blur-[120px] -z-10" />

        {/* Bubble reveal images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ clipPath: "circle(0% at 85% 50%)" }}
            animate={{ clipPath: "circle(150% at 85% 50%)" }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={slides[current].image}
              alt={slides[current].tag}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Shadow overlay — appears with text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`shadow-${current}`}
            className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/30 to-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
        </AnimatePresence>

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/40 to-transparent pointer-events-none" />

        {/* Header + content */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full h-full min-h-[80vh] md:min-h-screen flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-20 md:pb-32">
          {/* Section title */}
          <div className="absolute top-16 md:top-24 left-0 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
            <h2 className="font-headline text-[48px] md:text-[64px] tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Engenharia em cada
              <br />
              ml consumido.
            </h2>
          </div>

          {/* Slide text content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <span className="block font-label text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4">
                {slides[current].tag}
              </span>

              <h3 className="font-headline text-[36px] md:text-[56px] text-white leading-[1.1] mb-6 whitespace-pre-line drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {slides[current].title}
              </h3>

              <p className="max-w-lg text-white/70 text-lg leading-relaxed">
                {slides[current].description}
              </p>

              {/* Navigation */}
              <div className="flex items-center gap-6 mt-10">
                <div className="flex gap-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className="min-h-[44px] flex items-center cursor-pointer"
                      aria-label={`Ir para slide ${i + 1}`}
                    >
                      <span
                        className={`block h-[3px] rounded-full transition-all duration-500 ${
                          i === current
                            ? "w-12 bg-white"
                            : "w-6 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="font-label text-white/40 text-xs tracking-widest">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

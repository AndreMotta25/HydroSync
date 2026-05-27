"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "motion/react";

export function Hero() {
  const headerVisible = useScrollReveal();
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-24 px-margin-mobile md:px-margin-desktop w-full"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background -z-30" />

      {/* Title behind everything — watermark */}
      <div className="absolute top-[15%] inset-x-0 -z-10 flex items-center justify-center pointer-events-none select-none">
        <h1 className="font-headline text-[80px] md:text-[180px] leading-[0.85] text-white/90 font-bold tracking-tight text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          HydroSync
        </h1>
      </div>

      {/* Video covering entire hero */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-20 w-full h-full object-cover opacity-90"
      >
        <source src="/images/rr.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-t from-background/80 via-background/20 to-background/40 md:bg-gradient-to-b md:from-background/50 md:via-transparent md:to-background/50" />

      {/* Blue gradient right to left */}
      <div className="absolute inset-0 -z-[4] bg-gradient-to-l from-primary/20 via-primary/5 to-transparent pointer-events-none" />

      {/* Content on top */}
      <div className="max-w-[1440px] mx-auto w-full z-10 relative flex flex-col items-center text-center mt-auto mb-0">
        <p className="font-headline text-[24px] md:text-[32px] text-white/90 mt-[180px] md:mt-[280px] mb-12 max-w-2xl leading-tight font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.4)" }}>
          Estabilizando sua performance através da
          <br />
          <span className="text-white italic">hidratação de precisão</span>.
        </p>

        {/* Stats */}
        <div className="mt-2 md:mt-4 grid grid-cols-3 gap-12 md:gap-24 border-t border-white/20 pt-10 w-full max-w-4xl">
          <Stat value="1%" label="MARGEM DE ERRO" />
          <Stat value="30d" label="AUTONOMIA" className="-mt-10" />
          <Stat value="IPX7" label="CERTIFICAÇÃO" />
        </div>
      </div>

      {/* Scroll-down button */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={
          headerVisible
            ? { opacity: 0, y: -10 }
            : { opacity: 1, y: [0, 8, 0] }
        }
        transition={
          headerVisible
            ? { duration: 0.7, ease: "easeOut" }
            : { y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.7, ease: "easeOut" } }
        }
      >
        <a
          href="#product"
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-md border border-outline/10 shadow-lg hover:bg-white hover:shadow-xl active:scale-95 transition-all group"
          aria-label="Rolar para baixo"
        >
          <span className="material-symbols-outlined text-primary text-2xl group-hover:translate-y-1 transition-transform">
            expand_more
          </span>
        </a>
      </motion.div>
    </section>
  );
}

function Stat({ value, label, className = "" }: { value: string; label: string; className?: string }) {
  return (
    <div className={className}>
      <div className="font-headline text-[32px] md:text-[40px] font-bold text-on-surface">
        {value}
      </div>
      <div className="text-on-surface-variant text-sm font-medium mt-2">
        {label}
      </div>
    </div>
  );
}

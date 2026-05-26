"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Produto", href: "#product" },
  { label: "Ciência", href: "#how-it-works" },
  { label: "Tecnologia", href: "#features" },
  { label: "Casos", href: "#testimonials" },
];

const THRESHOLD = 100;
const MAX_SCROLL = 300;

export function Header() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > THRESHOLD);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -10,
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-outline/5"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <nav className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-16">
        <div className="font-headline text-[24px] font-bold tracking-tighter text-primary">
          HydroSync
        </div>

        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface/60 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-widest min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button size="md">COMPRAR</Button>
      </nav>
    </motion.header>
  );
}

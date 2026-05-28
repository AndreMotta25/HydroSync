"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAThxq8IPq60n4TC6CdW8W_5uuC9YsqbsWlLIr4g-tF3rhBxNJMSIad1fnmKp46VIHoLHQbftGktshyWn6SY7t398wA7_cDeGcDCY_P9ZBqv883LiE53UzQfBWVQip2p1yODlGoiVBZajFE7OLiBbRSwjy2qEP_qWGihZu-_5uWWoVbuD1Eb_5xRi26FLYYSmGlnRb-gCIEPnPXNwnYm7ynRNCTYTJo2JDNd7aCOTP9g-xCAPsL_xEHIw7y1JbB5QtG6HWftykPkP8";

const FEATURES = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCz0EiL0TwiUindTQAo9CcDEEuIgS51nUN2s8Uxfbnd__oNEmR76GHyFzNMvnsNl97hkoI4iCqUWW2XP1aEkwfrcCc8fUd9nXyKZZ5jx_1179Ct60gInOxzWxt35KMTp0Cgs6HtYM_ze0LTp35RKH1uPBXREbYeqwzXBK5NGPXNZuiMKRkbI9QfSlesoI64j3__N-rWdESvX5MPiE8m7JAAPEvK2k0osJfuazDuxtCgO0dTnhz6sYibDkvn9os1-exTl14_rDhQLaA",
    tag: "ALGORITMOS PREDITIVOS",
    title: "Algoritmos Preditivos",
    description:
      "Não medimos apenas água. Calculamos sua necessidade baseado em clima, atividade e dados antropométricos.",
    span: "md:col-span-8",
    variant: "image",
  },
  {
    tag: "SENSORES ULTRASSÔNICOS",
    title: "Sensores Ultrassônicos",
    description:
      "Precisão de grau laboratorial integrada na tampa, capturando cada gole sem contato físico com a água.",
    icon: "sensors",
    span: "md:col-span-4",
    variant: "primary",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUvaKlI_61e4aBXCvJNZI37hH2UQJm27uMbbtVtq15Yu0wpi4dGNXwtKn2juCLpuItb89LmTw0AlxpxcfbHGGyqAWns1hEc9pT9BkudonIPvBIEn5EWUP_IPpQzvxQMPj7IcqUJzdLDBBY2FAlR4i8lfcA0OjEhdW6o5pUtR9CddBSXo1U71o8hjYNZeucrNO88sjtI1pbIqpWkB3yf_4KSznB_JTtTIHEMBbcKr5iPlYO22YIHW7gLJyLt3Nmxx8HjKHepWiNlyU",
    tag: "RESISTÊNCIA MILITAR",
    title: "RESISTÊNCIA MILITAR",
    subtitle: "CERTIFICADO IPX7",
    span: "md:col-span-4",
    variant: "dark-image",
  },
  {
    tag: "AUTONOMIA RADICAL",
    title: "Autonomia Radical.",
    description:
      "Sistema de carregamento magnético que sustenta 30 dias de monitoramento constante com uma única carga de 45 minutos.",
    badges: ["Aço Inox 316L", "BT 5.2 Low Energy"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjNOUwXx8VewUiotzT6wTbxCicKa-EtXadGNgRHdV9iCC1YrHzov90cIDsXBIpZj7fuPJTA_kAu-vkKRNSwwksPPqKLncZDLvg0hIB8huDJJHzjBpZm7TT946r3Zg1HsMC_tiJNXPqWxMVowLHjmVKhe76QivLvabjoIYkhhhOjxqGboMu36XIs12xi3YwfLOKR656KLjwNGrwT4pk8ny_8PfiOjQ9RyYUAyEHvUSh18FG9E6lc1s5FIUKyslxRoeIbjSNnl35t_0",
    span: "md:col-span-8",
    variant: "split",
  },
];

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
      "Dores de cabeça e \"brain fog\" são respostas fisiológicas diretas ao estresse osmótico.",
  },
  {
    icon: "medical_services",
    title: "Instabilidade Metabólica",
    description:
      "Processos enzimáticos essenciais dependem de um estado hídrico homeostático constante.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "BIO-CONFIG",
    description:
      "Sincronização via Bluetooth para definir o \"Golden Baseline\" baseado no seu metabolismo basal.",
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

const TESTIMONIALS = [
  {
    quote:
      "A HydroSync removeu o atrito da manutenção biológica. Como designer, o foco é meu ativo mais valioso e agora ele é constante.",
    name: "Camila R.",
    role: "Senior Product Designer",
    initials: "CR",
  },
  {
    quote:
      "O anel de luz é o único 'notificador' que eu permito no meu escritório. Eficiente, discreto e clinicamente necessário.",
    name: "Rafael M.",
    role: "Software Architect",
    initials: "RM",
  },
  {
    quote:
      "Integrar meus dados de treino com o consumo real de água mudou meu tempo de recuperação. Tecnologia indispensável.",
    name: "Fernanda L.",
    role: "Performance Athlete",
    initials: "FL",
  },
];

const FAQ_ITEMS = [
  {
    question: "Metodologia de medição?",
    answer:
      "Utilizamos sensores de fluxo ultrassônicos que emitem ondas de alta frequência para calcular o volume deslocado em milissegundos. É a mesma tecnologia usada em dispositivos de medição hospitalar.",
  },
  {
    question: "Sincronização de dados?",
    answer:
      "Sim. O App HydroSync possui integração nativa com Apple Health, Google Fit e Garmin Connect, permitindo correlacionar hidratação com queima calórica e sono.",
  },
  {
    question: "Protocolo de garantia?",
    answer:
      "Oferecemos 12 meses de garantia total sobre os sensores e 30 dias de trial sem compromisso. Se não perceber melhora nos seus níveis de energia, devolvemos o investimento.",
  },
];

export default function TestePage() {
  return (
    <>
      <TesteHeader />
      <main id="main-content">
        <TesteHero />
        <TesteProblem />
        <TesteFeatures />
        <TesteHowItWorks />
        <TesteTestimonials />
        <TesteFaq />
        <TesteCta />
      </main>
      <TesteFooter />
    </>
  );
}

/* ── Header ── */
function TesteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 flex items-center ${
        scrolled
          ? "h-20 bg-white/80 backdrop-blur-md"
          : "h-24 bg-white/40 backdrop-blur-md"
      } border-b border-outline/5`}
    >
      <nav className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between w-full">
        <div className="font-headline text-[20px] font-semibold tracking-tight text-primary">
          HydroSync
        </div>
        <div className="hidden md:flex items-center gap-10">
          {[
            { href: "#product", label: "Produto" },
            { href: "#how-it-works", label: "Ciência" },
            { href: "#features", label: "Tecnologia" },
            { href: "#testimonials", label: "Casos" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface/50 hover:text-on-surface transition-all duration-300 font-label text-[11px] uppercase tracking-[0.2em]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="bg-primary text-on-primary px-7 py-2 rounded-full font-body font-medium text-[12px] tracking-wider hover:bg-on-surface transition-all active:scale-95">
          COMPRAR
        </button>
      </nav>
    </header>
  );
}

/* ── Hero ── */
function TesteHero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] md:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24 px-margin-mobile md:px-margin-desktop"
    >
      <div className="absolute inset-0 bg-background -z-30" />

      <div className="absolute inset-0 -z-20 flex justify-center items-center">
        <Image
          alt="HydroSync Smart Bottle"
          width={600}
          height={800}
          src={HERO_IMAGE}
          className="h-[85vh] w-auto max-w-none object-contain opacity-70 mix-blend-multiply"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-transparent to-background/95" />

      <div className="max-w-[1440px] mx-auto w-full z-10 relative flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1 bg-white/80 text-primary rounded-full font-label text-[10px] tracking-widest mb-10 border border-outline/5 backdrop-blur-sm shadow-sm">
          BIO-TRACKING TECH V2.0
        </div>

        <h1 className="font-headline text-[80px] md:text-[140px] leading-[0.85] text-on-surface mb-8 tracking-tight font-semibold">
          HydroSync
        </h1>

        <p className="font-headline text-[24px] md:text-[32px] text-on-surface-variant/80 mb-14 max-w-2xl leading-snug">
          Estabilizando sua performance através da{" "}
          <span className="italic text-primary">hidratação de precisão</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full">
          <button className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-full font-body text-[15px] font-semibold hover:shadow-xl hover:shadow-primary/10 transition-all active:scale-95">
            Adquirir Tecnologia — R$ 289,00
          </button>
          <a
            className="flex items-center justify-center gap-2 font-body font-medium text-on-surface-variant hover:text-primary transition-all text-[14px]"
            href="#how-it-works"
          >
            Ver a ciência{" "}
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="mt-24 md:mt-36 grid grid-cols-3 gap-12 md:gap-32 border-t border-outline/10 pt-12 w-full max-w-3xl">
          {[
            { value: "1%", label: "MARGEM DE ERRO" },
            { value: "30d", label: "AUTONOMIA" },
            { value: "IPX7", label: "CERTIFICAÇÃO" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="font-label text-[24px] md:text-[32px] text-on-surface tracking-tighter">
                {stat.value}
              </div>
              <div className="text-on-surface-variant/50 font-body text-[10px] uppercase tracking-[0.2em] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Problem ── */
function TesteProblem() {
  return (
    <section id="product" className="py-48 mesh-gradient border-y border-outline/5">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-[56px] md:text-[80px] leading-[0.9] mb-10 tracking-tight">
              O custo invisível da{" "}
              <span className="text-primary italic">desidratação</span>.
            </h2>
            <p className="text-xl text-on-surface-variant/70 font-light max-w-xl">
              Pequenas quedas nos níveis de água impactam massivamente a
              cognição e o metabolismo basal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {PROBLEMS.map((item, i) => (
            <div
              key={item.title}
              className={`p-16 grid-border bg-white/20 hover:bg-white/40 transition-colors group ${
                i === 1 ? "border-x-0 md:border-x" : ""
              }`}
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-12 opacity-80">
                {item.icon}
              </span>
              <h3 className="font-headline text-[32px] mb-6">{item.title}</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Features ── */
function TesteFeatures() {
  return (
    <section
      id="features"
      className="py-48 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto"
    >
      <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <h2 className="font-headline text-[56px] md:text-[80px] leading-[0.9] tracking-tight">
          Engenharia em cada
          <br />
          ml consumido.
        </h2>
        <p className="text-on-surface-variant font-light max-w-xs text-lg">
          A HydroSync monitora seu biomarcador mais volátil em tempo real,
          integrando-se ao seu ecossistema digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {FEATURES.map((f) => (
          <FeatureCard key={f.tag} feature={f} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature: f }: { feature: (typeof FEATURES)[number] }) {
  if (f.variant === "image" && "image" in f) {
    return (
      <div className={`${f.span} rounded-[40px] overflow-hidden relative min-h-[600px] group border border-outline/5 bg-white`}>
        <Image
          alt={f.tag}
          src={f.image!}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 p-16 text-white">
          <h3 className="font-headline text-[48px] mb-6">{f.title}</h3>
          <p className="max-w-md text-lg font-light opacity-80 leading-relaxed">
            {f.description}
          </p>
        </div>
      </div>
    );
  }

  if (f.variant === "primary") {
    return (
      <div className={`${f.span} rounded-[40px] bg-primary text-white p-16 flex flex-col justify-between border border-primary`}>
        <div>
          <span className="material-symbols-outlined text-5xl mb-12 opacity-80">
            {f.icon}
          </span>
          <h3 className="font-headline text-[36px] leading-tight mb-8">
            {f.title}
          </h3>
          <p className="font-light text-white/80 text-lg leading-relaxed">
            {f.description}
          </p>
        </div>
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="flex justify-between items-center mb-4">
            <span className="font-label text-[9px] uppercase tracking-[0.3em] opacity-60">
              Sincronia Global
            </span>
            <span className="font-label text-[9px] font-bold">LIVE</span>
          </div>
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white w-full animate-[pulse_3s_infinite]" />
          </div>
        </div>
      </div>
    );
  }

  if (f.variant === "dark-image" && "image" in f) {
    return (
      <div className={`${f.span} rounded-[40px] overflow-hidden relative min-h-[450px] group border border-outline/5`}>
        <Image
          alt={f.tag}
          src={f.image!}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover grayscale opacity-80 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h4 className="font-headline text-[36px] text-white">
              {f.title}
            </h4>
            <p className="text-white/60 font-label text-[10px] mt-4 tracking-widest">
              {f.subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (f.variant === "split" && "image" in f) {
    return (
      <div className={`${f.span} rounded-[40px] bg-white border border-outline/5 p-16 flex flex-col md:flex-row gap-12 items-center overflow-hidden`}>
        <div className="flex-1 order-2 md:order-1">
          <h3 className="font-headline text-[40px] mb-8 leading-tight">
            {f.title}
          </h3>
          <p className="text-on-surface-variant font-light text-lg mb-12 leading-relaxed">
            {f.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {f.badges!.map((badge) => (
              <div
                key={badge}
                className="px-5 py-2 bg-background border border-outline/5 font-label text-[9px] uppercase tracking-widest text-primary"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <Image
            alt={f.tag}
            src={f.image!}
            width={600}
            height={400}
            className="w-full h-auto mix-blend-multiply"
          />
        </div>
      </div>
    );
  }

  return null;
}

/* ── How It Works ── */
function TesteHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-48 bg-on-surface text-surface relative overflow-hidden"
    >
      <div className="absolute inset-0 hero-glow opacity-10" />

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-40 border-b border-surface/5 pb-24">
          <h2 className="font-headline text-[56px] md:text-[80px] leading-[0.85] tracking-tight">
            Seu ciclo de <br />
            <span className="text-primary-fixed italic">
              otimização hídrica.
            </span>
          </h2>
          <p className="font-light text-surface/50 max-w-sm mt-12 md:mt-0 text-xl leading-relaxed">
            Uma jornada contínua entre dados clínicos e bem-estar subjetivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-0">
          {STEPS.map((step, i) => {
            const padding =
              i === 0
                ? "md:pr-16 md:border-r"
                : i === STEPS.length - 1
                  ? "md:pl-16"
                  : "md:px-16 md:border-r";
            return (
              <div
                key={step.number}
                className={`relative ${padding} border-surface/5`}
              >
                <div className="text-[100px] md:text-[120px] font-headline opacity-5 absolute -top-20 -left-4 md:-top-24 md:-left-6 leading-none">
                  {step.number}
                </div>
                <h4 className="font-label text-[14px] font-semibold tracking-[0.2em] mb-10 text-primary-fixed">
                  {step.title}
                </h4>
                <p className="text-surface/60 font-light text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function TesteTestimonials() {
  return (
    <section id="testimonials" className="py-48 bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-32">
          <h2 className="font-headline text-[56px] md:text-[80px] tracking-tight leading-[0.9]">
            Utilizado por mentes
            <br />
            em alta frequência.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-16 rounded-[40px] border border-outline/5 hover:border-outline/20 transition-all flex flex-col justify-between h-full bg-background"
            >
              <div className="mb-14">
                <div className="flex gap-1 text-primary mb-12 opacity-80">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-2xl font-headline italic leading-relaxed text-on-surface">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-on-surface/5 flex items-center justify-center font-body font-semibold text-on-surface/40 text-[13px]">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body font-semibold text-[14px]">
                    {t.name}
                  </p>
                  <p className="font-body text-[10px] text-on-surface-variant/50 uppercase tracking-widest mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function TesteFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-48 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
      <h2 className="font-headline text-[48px] md:text-[64px] text-center mb-32 tracking-tight leading-[0.9]">
        Questões Técnicas
      </h2>

      <div className="space-y-12">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="border-b border-outline/5 pb-12">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex justify-between items-center cursor-pointer w-full text-left min-h-[44px]"
              aria-expanded={open === i}
            >
              <span className="font-headline text-[24px] md:text-[28px] font-medium">
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                add
              </span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-8 text-on-surface-variant font-light text-lg leading-relaxed max-w-3xl">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── CTA ── */
function TesteCta() {
  return (
    <section className="py-56 bg-on-surface text-surface text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[200px]" />

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <h2 className="font-headline text-[72px] md:text-[120px] mb-16 tracking-tight leading-[0.85]">
          Atinga sua
          <br />
          <span className="italic text-primary-fixed">forma final.</span>
        </h2>
        <p className="text-xl mb-20 text-surface/50 font-light max-w-2xl mx-auto">
          Garanta sua HydroSync hoje e entre para a elite da hidratação
          tecnológica.
        </p>
        <button className="bg-primary text-on-primary px-16 py-6 rounded-full font-body text-[18px] font-semibold hover:bg-surface hover:text-on-surface transition-all active:scale-95">
          ENCOMENDAR AGORA
        </button>
        <p className="mt-16 font-label text-[9px] text-surface/30 uppercase tracking-[0.4em]">
          Envio Global • Atendimento VIP • 1 Ano de Garantia
        </p>
      </div>
    </section>
  );
}

/* ── Footer ── */
function TesteFooter() {
  const FOOTER_LINKS = {
    EXPLORAR: ["Bio-tecnologia", "Estudos Clínicos", "Suporte Técnico", "Comunidade"],
    CONECTAR: ["Instagram", "LinkedIn", "Newsletter"],
  };

  return (
    <footer className="bg-background py-32 border-t border-outline/5">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="md:col-span-1">
          <div className="font-headline text-[24px] font-semibold tracking-tight text-primary mb-10">
            HydroSync
          </div>
          <p className="text-on-surface-variant font-light leading-relaxed max-w-xs">
            Pioneirismo em hidratação de precisão para mentes de alta
            performance.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-body font-semibold mb-12 text-[10px] uppercase tracking-[0.3em] text-on-surface/30">
              {title}
            </h4>
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-on-surface-variant/70 hover:text-primary transition-colors font-body text-[13px]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h4 className="font-body font-semibold mb-12 text-[10px] uppercase tracking-[0.3em] text-on-surface/30">
            BIO-NEWS
          </h4>
          <p className="text-on-surface-variant/70 mb-8 text-[13px] font-light">
            Insights sobre biohacking e performance.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2"
          >
            <input
              className="bg-white border-outline/5 rounded-full px-6 py-3 flex-1 font-body text-[12px] focus:ring-1 focus:ring-primary outline-none text-base"
              placeholder="Seu e-mail"
              type="email"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-on-surface transition-all group"
              aria-label="Enviar e-mail"
            >
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mt-32 pt-12 border-t border-outline/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <p className="font-body text-[11px] text-on-surface-variant/40 tracking-wide">
          © 2026 HydroSync Systems. Todos os direitos reservados.
        </p>
        <div className="flex gap-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant/40">
          {["Privacidade", "Termos", "Cookies"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

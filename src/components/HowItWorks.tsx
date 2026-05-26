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
  return (
    <section
      id="how-it-works"
      className="py-32 bg-on-surface text-surface relative overflow-hidden"
    >
      <div className="absolute inset-0 hero-glow opacity-20" />

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 border-b border-surface/10 pb-20">
          <h2 className="font-headline text-[48px] md:text-[64px] tracking-tight leading-[0.9]">
            Seu ciclo de <br />
            <span className="text-primary-fixed italic">
              otimização hídrica.
            </span>
          </h2>
          <p className="font-body text-outline-variant max-w-sm mt-8 md:mt-0 text-xl">
            Uma jornada contínua entre dados clínicos e bem-estar subjetivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`relative ${
                i === 0
                  ? "md:pr-12 md:border-r"
                  : i === 3
                    ? "md:pl-12"
                    : "md:px-12 md:border-r"
              } border-surface/5`}
            >
              <div className="text-[140px] font-headline opacity-5 absolute -top-24 -left-6 leading-none">
                {step.number}
              </div>
              <h4 className="font-headline text-[28px] mb-8 relative font-bold">
                {step.title}
              </h4>
              <p className="text-outline-variant text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

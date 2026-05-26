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
      className="py-32 mesh-gradient border-y border-outline/10"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-collapse">
          {PROBLEMS.map((item, i) => (
            <div
              key={item.title}
              className={`p-12 grid-border bg-white/30 hover:bg-white/50 transition-colors group ${
                i === 1 ? "md:border-x" : ""
              }`}
            >
              <span className="material-symbols-outlined text-primary text-5xl mb-10 group-hover:scale-110 transition-transform block">
                {item.icon}
              </span>
              <h3 className="font-headline text-[28px] mb-6">{item.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

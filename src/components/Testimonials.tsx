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
      'O anel de luz é o único \'notificador\' que eu permito no meu escritório. Eficiente, discreto e clinicamente necessário.',
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
];

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

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-40 bg-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-24">
          <h2 className="font-headline text-[48px] md:text-[64px] tracking-tight mb-6">
            Utilizado por mentes
            <br />
            em alta frequência.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
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
        </div>
      </div>
    </section>
  );
}

"use client";

const FAQ_ITEMS = [
  {
    question: "Metodologia de medição?",
    answer:
      "Utilizamos sensores de fluxo ultrassônicos que emitem ondas de alta frequência para calcular o volume deslocado em milissegundos. É a mesma tecnologia usada em dispositivos de medição hospitalar.",
  },
  {
    question: "Sincronização com ecossistemas de saúde?",
    answer:
      "Sim. O App HydroSync possui integração nativa com Apple Health, Google Fit e Garmin Connect, permitindo correlacionar hidratação com queima calórica e sono.",
  },
  {
    question: "Protocolo de garantia científica?",
    answer:
      "Oferecemos 12 meses de garantia total sobre os sensores e 30 dias de trial sem compromisso. Se não perceber melhora nos seus níveis de energia, devolvemos o investimento.",
  },
];

export function Faq() {
  return (
    <section className="py-40 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
      <h2 className="font-headline text-[40px] md:text-[48px] text-center mb-24 tracking-tight">
        Questões Técnicas
      </h2>

      <div className="space-y-10">
        {FAQ_ITEMS.map((item) => (
          <details key={item.question} className="group border-b border-outline/10 pb-10">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="font-headline text-[22px] font-bold">
                {item.question}
              </span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary">
                add
              </span>
            </summary>
            <div className="mt-6 text-on-surface-variant font-body text-lg leading-relaxed max-w-3xl">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

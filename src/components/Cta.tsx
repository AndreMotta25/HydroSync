import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-40 bg-on-surface text-on-primary text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 blur-[150px]" />

      <div className="max-w-[1440px] mx-auto px-margin-mobile relative z-10">
        <h2 className="font-headline text-[56px] md:text-[96px] mb-12 tracking-tight leading-none">
          Atinga sua
          <br />
          <span className="italic text-primary-fixed">forma final.</span>
        </h2>
        <p className="font-body text-xl mb-16 opacity-70 max-w-2xl mx-auto">
          Garanta sua HydroSync hoje e entre para a elite da hidratação
          tecnológica.
        </p>
        <Button size="lg" className="px-16 py-7 text-[24px] shadow-2xl shadow-primary/40">
          ENCOMENDAR AGORA
        </Button>
        <p className="mt-12 font-label opacity-50 uppercase tracking-widest text-[10px]">
          Envio Global • Atendimento VIP • 1 Ano de Garantia
        </p>
      </div>
    </section>
  );
}

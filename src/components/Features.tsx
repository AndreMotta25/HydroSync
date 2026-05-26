import Image from "next/image";

export function Features() {
  return (
    <section
      id="features"
      className="py-32 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto"
    >
      <div className="mb-24 flex flex-col md:flex-row md:items-center justify-between gap-10">
        <h2 className="font-headline text-[48px] md:text-[64px] tracking-tight">
          Engenharia em cada
          <br />
          ml consumido.
        </h2>
        <p className="font-body text-on-surface-variant max-w-sm text-lg">
          A HydroSync monitora seu biomarcador mais volátil em tempo real,
          integrando-se ao seu ecossistema digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Large: Algoritmos Preditivos */}
        <div className="md:col-span-8 rounded-[40px] overflow-hidden relative min-h-[500px] group border border-outline/5">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
          <Image
            src="/images/imagem-1.webp"
            alt="App Integration"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent" />
          <div className="absolute bottom-0 p-12 text-white">
            <h3 className="font-headline text-[40px] mb-6">
              Algoritmos Preditivos
            </h3>
            <p className="max-w-md text-lg opacity-80 leading-relaxed">
              Não medimos apenas água. Calculamos sua necessidade baseado em
              clima, atividade e dados antropométricos.
            </p>
          </div>
        </div>

        {/* Small: Sensores Ultrassônicos */}
        <div className="md:col-span-4 rounded-[40px] bg-primary text-on-primary p-12 flex flex-col justify-between shadow-2xl shadow-primary/20">
          <div>
            <span className="material-symbols-outlined text-6xl mb-8 opacity-80">
              sensors
            </span>
            <h3 className="font-headline text-[32px] leading-tight mb-6">
              Sensores Ultrassônicos
            </h3>
            <p className="text-on-primary/80 text-lg leading-relaxed">
              Precisão de grau laboratorial integrada na tampa, capturando cada
              gole sem contato físico com a água.
            </p>
          </div>
          <div className="mt-12 pt-10 border-t border-on-primary/10">
            <div className="flex justify-between items-center mb-4">
              <span className="font-label uppercase tracking-widest opacity-60 text-[10px]">
                Taxa de Sincronia
              </span>
              <span className="font-bold">LIVE</span>
            </div>
            <div className="h-1 w-full bg-on-primary/10 rounded-full overflow-hidden">
              <div className="h-full bg-white w-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Small: Resistência Militar */}
        <div className="md:col-span-4 rounded-[40px] overflow-hidden relative min-h-[400px] group border border-outline/5">
          <div className="absolute inset-0 bg-secondary/10 blur-[80px] -z-10" />
          <Image
            src="/images/imagem-3.webp"
            alt="Durability"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-on-surface/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h4 className="font-headline text-[32px] text-white">
                RESISTÊNCIA MILITAR
              </h4>
              <p className="text-white/60 font-label mt-2">
                CERTIFICADO IPX7
              </p>
            </div>
          </div>
        </div>

        {/* Wide: Autonomia */}
        <div className="md:col-span-8 rounded-[40px] bg-white border border-outline/10 p-12 flex flex-col md:flex-row gap-12 items-center overflow-hidden">
          <div className="flex-1 order-2 md:order-1">
            <h3 className="font-headline text-[36px] mb-6 leading-tight">
              Autonomia Radical.
            </h3>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
              Sistema de carregamento magnético que sustenta 30 dias de
              monitoramento constante com uma única carga de 45 minutos.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-5 py-2.5 bg-surface-container-low rounded-xl border border-outline/5 font-bold text-xs uppercase tracking-widest text-primary">
                Aço Inox 316L
              </span>
              <span className="px-5 py-2.5 bg-surface-container-low rounded-xl border border-outline/5 font-bold text-xs uppercase tracking-widest text-primary">
                BT 5.2 Low Energy
              </span>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2 relative group">
            <div className="absolute inset-0 bg-primary/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/images/imagem-2.webp"
              alt="Battery & Design"
              width={600}
              height={400}
              className="w-full h-auto drop-shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

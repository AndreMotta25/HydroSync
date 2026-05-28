import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HydroSync",
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  description:
    "Pioneirismo em hidratação de precisão com sensores ultrassônicos e algoritmos preditivos.",
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "HydroSync",
  description:
    "Garrafa inteligente com sensores ultrassônicos, algoritmos preditivos e LED cues para hidratação de precisão.",
  brand: { "@type": "Brand", name: "HydroSync" },
  manufacturer: { "@type": "Organization", name: "HydroSync Systems" },
  material: "Aço inox 316L",
  category: "Health & Wellness",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Metodologia de medição?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Utilizamos sensores de fluxo ultrassônicos que emitem ondas de alta frequência para calcular o volume deslocado em milissegundos. É a mesma tecnologia usada em dispositivos de medição hospitalar.",
      },
    },
    {
      "@type": "Question",
      name: "Sincronização com ecossistemas de saúde?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O App HydroSync possui integração nativa com Apple Health, Google Fit e Garmin Connect, permitindo correlacionar hidratação com queima calórica e sono.",
      },
    },
    {
      "@type": "Question",
      name: "Protocolo de garantia científica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oferecemos 12 meses de garantia total sobre os sensores e 30 dias de trial sem compromisso. Se não perceber melhora nos seus níveis de energia, devolvemos o investimento.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "HydroSync — Garrafa Inteligente com Hidratação de Precisão",
  description:
    "HydroSync usa sensores ultrassônicos e algoritmos preditivos para otimizar sua hidratação em tempo real. Precisão de 1%, 30 dias de autonomia, certificado IPX7.",
  openGraph: {
    title: "HydroSync — Garrafa Inteligente com Hidratação de Precisão",
    description:
      "Sensores ultrassônicos, algoritmos preditivos e LED cues para hidratação perfeita. Conheça a HydroSync.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HydroSync — Garrafa Inteligente com Hidratação de Precisão",
    description:
      "Sensores ultrassônicos, algoritmos preditivos e LED cues para hidratação perfeita. Conheça a HydroSync.",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={productLd} />
      <JsonLd data={faqLd} />
      <Header />
      <main id="main-content">
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

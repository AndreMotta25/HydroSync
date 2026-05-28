import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste — HydroSync",
  description: "Versão alternativa da HydroSync landing page.",
};

export default function TesteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

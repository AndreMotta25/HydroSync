import type { Metadata, Viewport } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0058bc",
};

export const metadata: Metadata = {
  title: {
    default: "HydroSync",
    template: "%s | HydroSync",
  },
  description:
    "Estabilizando sua performance através da hidratação de precisão. Bio-tracking technology com sensores ultrassônicos.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "HydroSync | Pureza tecnológica em cada gota",
    description:
      "Estabilizando sua performance através da hidratação de precisão. Bio-tracking technology com sensores ultrassônicos.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-on-surface font-body antialiased overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo
        </a>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        {children}
      </body>
    </html>
  );
}

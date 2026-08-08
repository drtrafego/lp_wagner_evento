import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  // TROCAR: metadataBase pela URL final de produção quando o /deployer publicar
  metadataBase: new URL("https://lp-wagner-evento.vercel.app"),
  title: "Experiência Empreende, O Inimigo Invisível do Crescimento",
  description:
    "O maior obstáculo para o crescimento da sua empresa pode não estar no mercado. Uma manhã de desenvolvimento pessoal e mentalidade de liderança com a Empreende Zona Leste. 22/08/2026, Zona Leste de São Paulo.",
  openGraph: {
    title: "Experiência Empreende, O Inimigo Invisível do Crescimento",
    description:
      "O que trava seus resultados pode não estar no mercado. Pode estar dentro de você. 22/08/2026, 9h00 às 12h30, Zona Leste de São Paulo.",
    images: ["/evento-flyer.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CursorSpotlight } from "@/components/cursor-spotlight";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Experiência Empreende, O Inimigo Invisível do Crescimento",
  description:
    "Saúde mental negligenciada, cultura tóxica e a NR-1 aplicada errado custam caro e ficam invisíveis até virar processo trabalhista. Evento presencial em 22/08/2026, Zona Leste de São Paulo.",
  openGraph: {
    title: "Experiência Empreende, O Inimigo Invisível do Crescimento",
    description:
      "Evento presencial, 22/08/2026, Zona Leste de São Paulo. Saúde mental corporativa, NR-1 e proteção jurídica em uma manhã.",
    type: "website",
    locale: "pt_BR",
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
      className={`${anton.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
        <CursorSpotlight />
      </body>
    </html>
  );
}

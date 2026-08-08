import { Hero } from "@/components/sections/hero";
import { MarqueeImpacto } from "@/components/sections/marquee-impacto";
import { Problema } from "@/components/sections/problema";
import { PullQuote } from "@/components/sections/pull-quote";
import { Origem } from "@/components/sections/origem";
import { Bullets } from "@/components/sections/bullets";
import { ParaQuem } from "@/components/sections/para-quem";
import { Agenda } from "@/components/sections/agenda";
import { Oferta } from "@/components/sections/oferta";
import { Faq } from "@/components/sections/faq";
import { FechamentoFilosofico } from "@/components/sections/fechamento-filosofico";
import { CtaFinal } from "@/components/sections/cta-final";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <MarqueeImpacto />
      <Problema />
      <PullQuote />
      <Origem />
      <Bullets />
      <ParaQuem />
      <Agenda />
      <Oferta />
      <Faq />
      <FechamentoFilosofico />
      <CtaFinal />
      <Footer />
    </main>
  );
}

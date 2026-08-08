import { Hero } from "@/components/sections/hero";
import { MarqueeImpacto } from "@/components/sections/marquee-impacto";
import { Problema } from "@/components/sections/problema";
import { Bullets } from "@/components/sections/bullets";
import { ParaQuem } from "@/components/sections/para-quem";
import { Agenda } from "@/components/sections/agenda";
import { Oferta } from "@/components/sections/oferta";
import { Faq } from "@/components/sections/faq";
import { CtaFinal } from "@/components/sections/cta-final";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <MarqueeImpacto />
      <Problema />
      <Bullets />
      <ParaQuem />
      <Agenda />
      <Oferta />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  );
}

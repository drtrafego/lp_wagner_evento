import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { OriginSection } from "@/components/sections/origin-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { AgendaSection } from "@/components/sections/agenda-section";
import { OfferSection } from "@/components/sections/offer-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ClosingSection } from "@/components/sections/closing-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemSection />
      <OriginSection />
      <BenefitsSection />
      <AudienceSection />
      <AgendaSection />
      <OfferSection />
      <FaqSection />
      <ClosingSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}

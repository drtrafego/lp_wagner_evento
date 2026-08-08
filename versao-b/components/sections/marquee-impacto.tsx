"use client";

import { Marquee } from "@/components/ui/marquee";
import { usePrefersReducedMotion } from "@/lib/use-media-query";

const frases = [
  "O MAIOR OBSTÁCULO NÃO ESTÁ NO MERCADO",
  "TODA EMPRESA CARREGA A MENTALIDADE DO SEU LÍDER",
  "BLOQUEIOS INVISÍVEIS TRAVAM DECISÕES",
  "EVOLUÇÃO PESSOAL VIRA CRESCIMENTO SUSTENTÁVEL",
  "O PRÓXIMO NÍVEL COMEÇA EM VOCÊ",
  "AUTOCONHECIMENTO É VANTAGEM COMPETITIVA",
];

export function MarqueeImpacto() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-brand-charcoal py-4">
      <Marquee
        pauseOnHover
        style={{ "--duration": reduced ? "150s" : "34s" } as React.CSSProperties}
      >
        {frases.map((frase) => (
          <span
            key={frase}
            className="font-heading mx-4 flex items-center gap-4 text-lg uppercase tracking-wide text-white/25 sm:text-2xl"
          >
            {frase}
            <span aria-hidden className="text-brand-red">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

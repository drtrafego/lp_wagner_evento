"use client";

import { Marquee } from "@/components/ui/marquee";
import { usePrefersReducedMotion } from "@/lib/use-media-query";

const frases = [
  "SAÚDE MENTAL NÃO É BENEFÍCIO, É RISCO JURÍDICO",
  "TURNOVER ALTO É CUSTO QUE NÃO APARECE NO DRE",
  "NR-1 NÃO É TEATRO DE COMPLIANCE",
  "TIME ESGOTADO NÃO SUSTENTA CRESCIMENTO",
  "O QUE NÃO SE MEDE, VIRA PROCESSO TRABALHISTA",
  "CULTURA TÓXICA TRAVA FATURAMENTO",
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

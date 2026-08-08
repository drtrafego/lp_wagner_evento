"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const linhas = [
  "Quem está conduzindo a empresa está preparado para conduzir o próximo nível do negócio?",
  "Toda empresa carrega a mentalidade do seu líder.",
  "Quando o empreendedor evolui, o negócio encontra espaço para crescer junto.",
];

/**
 * Bloco de destaque logo apos o problema, cada linha acende em sequencia
 * enquanto a secao fica pinada. Candidato natural a scrub/pin pedido no
 * briefing: tipografia grande, poucas palavras, alto impacto.
 */
export function PullQuote() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const linhaEls = gsap.utils.toArray<HTMLElement>("[data-linha]", root.current);
          if (!linhaEls.length) return;

          const st = ScrollTrigger.create({
            trigger: root.current,
            start: "top top",
            end: "+=120%",
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
              const progress = self.progress * linhaEls.length;
              linhaEls.forEach((linha, i) => {
                const local = gsap.utils.clamp(0, 1, progress - i * 0.9);
                gsap.set(linha, {
                  opacity: 0.12 + local * 0.88,
                  y: (1 - local) * 22,
                  filter: `blur(${(1 - local) * 6}px)`,
                });
              });
            },
          });

          return () => st.kill();
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-brand-charcoal px-5 py-24 sm:px-6 md:py-0"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/12 blur-[140px]"
      />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center sm:gap-10">
        <p data-linha className="font-heading text-balance text-2xl uppercase leading-[1.15] tracking-tight text-brand-white sm:text-4xl md:text-5xl">
          {linhas[0]}
        </p>
        <p data-linha className="font-heading text-balance text-3xl uppercase leading-[1.1] tracking-tight text-brand-red sm:text-5xl md:text-6xl">
          {linhas[1]}
        </p>
        <p data-linha className="text-balance text-base leading-relaxed text-white/70 sm:text-xl md:text-2xl">
          {linhas[2]}
        </p>
      </div>
    </section>
  );
}

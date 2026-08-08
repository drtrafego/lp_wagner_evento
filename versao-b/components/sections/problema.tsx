"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const paragrafos = [
  "Você trabalha mais do que nunca. Assume riscos diariamente. Resolve problemas o tempo todo. Cuida da equipe, do financeiro, dos clientes e da operação. Mesmo assim, sente que o seu negócio não cresce na velocidade que poderia.",
  "A verdade é que o maior obstáculo para o crescimento da sua empresa pode não estar na economia, na concorrência ou na falta de oportunidades. Pode estar na forma como você pensa, decide, reage e lidera.",
  "É por isso que muitos empreendedores trabalham mais, estudam mais e investem mais..., mas continuam presos aos mesmos resultados. A maioria dos empreendedores investe em marketing, vendas, gestão e processos. Tudo isso é importante, mas existe uma pergunta que poucos têm coragem de fazer:",
];

/**
 * Reveal em 3 estagios (um por paragrafo) enquanto a secao fica pinada,
 * ritmo de leitura guiado pelo scroll. Sem titulo proprio: o primeiro
 * paragrafo, maior, funciona como a entrada visual da secao.
 */
export function Problema() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const blocks = gsap.utils.toArray<HTMLElement>("[data-paragrafo]", root.current);
          const scanline = root.current?.querySelector<HTMLDivElement>("[data-scanline]");
          if (!blocks.length) return;

          const st = ScrollTrigger.create({
            trigger: root.current,
            start: "top top",
            end: "+=140%",
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
              const progress = self.progress * blocks.length;
              blocks.forEach((block, i) => {
                const local = gsap.utils.clamp(0, 1, progress - i * 0.85);
                gsap.set(block, {
                  opacity: 0.15 + local * 0.85,
                  filter: `blur(${(1 - local) * 5}px)`,
                });
              });
              if (scanline) gsap.set(scanline, { yPercent: -20 + self.progress * 140 });
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
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-brand-black px-5 py-24 sm:px-6 md:py-0"
    >
      <div
        data-scanline
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-red/25 via-brand-red/5 to-transparent opacity-0 md:opacity-100"
      />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 sm:gap-8">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
          O obstáculo real
        </span>

        <p
          data-paragrafo
          className="text-balance text-xl font-semibold leading-snug text-brand-white sm:text-2xl md:text-3xl"
        >
          {paragrafos[0]}
        </p>
        <p
          data-paragrafo
          className="text-balance text-base leading-relaxed text-white/75 sm:text-lg md:text-xl"
        >
          {paragrafos[1]}
        </p>
        <p
          data-paragrafo
          className="text-balance text-sm leading-relaxed text-white/60 sm:text-base md:text-lg"
        >
          {paragrafos[2]}
        </p>
      </div>
    </section>
  );
}

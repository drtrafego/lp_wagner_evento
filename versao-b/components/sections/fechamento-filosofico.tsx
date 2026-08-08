"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const linhas = [
  "A pergunta não é se o seu negócio pode crescer, mas quem você precisa se tornar para conduzir esse crescimento?",
  "Talvez o próximo nível do seu negócio não dependa de uma nova estratégia.",
  "Talvez dependa da pessoa que toma todas as decisões dentro dele.",
  "Se essa ideia faz sentido para você, seu lugar é na Experiência Empreende.",
  "Este é o seu momento!",
];

/**
 * Climax emocional da copy, ultimo bloco antes do CTA final. Cada linha
 * acende em sequencia enquanto a secao fica pinada, com o brilho vermelho
 * pulsando ao fundo (ember-pulse ja usado no CTA final). A ultima linha
 * ganha tamanho e cor propria, o soco final antes do botao.
 */
export function FechamentoFilosofico() {
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
            end: "+=200%",
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
              const progress = self.progress * linhaEls.length;
              linhaEls.forEach((linha, i) => {
                const local = gsap.utils.clamp(0, 1, progress - i * 0.92);
                gsap.set(linha, {
                  opacity: 0.1 + local * 0.9,
                  y: (1 - local) * 24,
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
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-brand-black px-5 py-24 sm:px-6 md:py-0"
    >
      <div
        aria-hidden
        className="animate-ember-pulse pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/14 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain-overlay opacity-[0.04]"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-7 text-center sm:gap-8">
        {linhas.map((linha, i) => {
          const isLast = i === linhas.length - 1;
          return (
            <p
              key={linha.slice(0, 20)}
              data-linha
              className={
                isLast
                  ? "font-heading text-balance text-4xl uppercase leading-[1.05] tracking-tight text-brand-red sm:text-6xl md:text-7xl"
                  : i === 0
                    ? "text-balance text-xl leading-snug text-brand-white sm:text-3xl md:text-4xl"
                    : "text-balance text-base leading-relaxed text-white/70 sm:text-xl md:text-2xl"
              }
            >
              {linha}
            </p>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LINES = [
  "A pergunta não é se o seu negócio pode crescer, mas quem você precisa se tornar para conduzir esse crescimento?",
  "Talvez o próximo nível do seu negócio não dependa de uma nova estratégia.",
  "Talvez dependa da pessoa que toma todas as decisões dentro dele.",
  "Se essa ideia faz sentido para você, seu lugar é na Experiência Empreende.",
  "Este é o seu momento!",
];

/**
 * Seção nova (correção de copy 08/08): fechamento filosófico, clímax da
 * copy, entra logo antes do CTA final. Mesmo padrão visual do resto da
 * página, reveal linha a linha em scrub, igual ao pull-quote do problema.
 */
export function ClosingSection() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const lines = root.current?.querySelectorAll<HTMLParagraphElement>("[data-closing-line]");
      if (!lines?.length) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.fromTo(
        lines,
        { opacity: reduceMotion ? 0.6 : 0.15, y: reduceMotion ? 0 : 22, filter: reduceMotion ? "blur(0px)" : "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: reduceMotion ? 0.03 : 0.28,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: reduceMotion ? false : true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-brand-black px-6 py-24 md:py-36">
      <div className="mx-auto flex max-w-4xl flex-col gap-5 md:gap-6">
        {LINES.map((line, i) => (
          <p
            key={i}
            data-closing-line
            className={
              i < 3
                ? "text-balance font-display text-2xl uppercase leading-[1.2] tracking-tight text-brand-white md:text-4xl"
                : "text-balance font-display text-2xl uppercase leading-[1.2] tracking-tight text-brand-red md:text-4xl"
            }
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}

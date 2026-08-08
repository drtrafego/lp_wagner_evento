"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TITLE =
  "Enquanto sua empresa cresce, esse inimigo cresce junto, e ele é invisível até o dia que explode.";

/**
 * Título que acende palavra a palavra conforme o scroll (scrub, sem pin).
 * Some em nível reduzido (não some por completo) quando prefers-reduced-motion
 * está ativo, mantendo a leitura completa desde o primeiro frame.
 */
export function ProblemSection() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const words = root.current?.querySelectorAll<HTMLSpanElement>("[data-word]");
      if (!words?.length) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.fromTo(
        words,
        { opacity: reduceMotion ? 0.6 : 0.15, y: reduceMotion ? 0 : 20, filter: reduceMotion ? "blur(0px)" : "blur(5px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: reduceMotion ? 0.01 : 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 82%",
            end: "top 38%",
            scrub: reduceMotion ? false : true,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-brand-black px-6 py-24 md:py-36">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
          O que ninguém mostra no balancete
        </span>
        <h2 className="text-balance font-display text-3xl uppercase leading-[1.1] tracking-tight text-brand-white md:text-5xl">
          {TITLE.split(" ").map((word, i) => (
            <span key={`${word}-${i}`} data-word className="mr-2.5 inline-block md:mr-3">
              {word}
            </span>
          ))}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-white/70">
          Turnover alto, afastamento por ansiedade e burnout, queda de
          produtividade que ninguém sabe explicar, e agora um risco jurídico
          novo: a NR-1 exige gestão de riscos psicossociais, e empresa que
          trata isso como formalidade está exposta. Nenhum desses custos
          aparece separado no DRE, mas juntos eles travam o crescimento.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PARAGRAPHS = [
  "Você trabalha mais do que nunca. Assume riscos diariamente. Resolve problemas o tempo todo. Cuida da equipe, do financeiro, dos clientes e da operação. Mesmo assim, sente que o seu negócio não cresce na velocidade que poderia.",
  "A verdade é que o maior obstáculo para o crescimento da sua empresa pode não estar na economia, na concorrência ou na falta de oportunidades. Pode estar na forma como você pensa, decide, reage e lidera.",
  "É por isso que muitos empreendedores trabalham mais, estudam mais e investem mais..., mas continuam presos aos mesmos resultados. A maioria dos empreendedores investe em marketing, vendas, gestão e processos. Tudo isso é importante, mas existe uma pergunta que poucos têm coragem de fazer:",
];

const PULL_QUOTE = [
  "Quem está conduzindo a empresa está preparado para conduzir o próximo nível do negócio?",
  "Toda empresa carrega a mentalidade do seu líder.",
  "Quando o empreendedor evolui, o negócio encontra espaço para crescer junto.",
];

/**
 * Parágrafo-manifesto que acende conforme o scroll (scrub, sem pin), seguido
 * de um pull-quote em tipografia grande com o mesmo tratamento, linha a
 * linha. Some em nível reduzido (não some por completo) quando
 * prefers-reduced-motion está ativo.
 */
export function ProblemSection() {
  const root = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const lines = paragraphsRef.current?.querySelectorAll<HTMLParagraphElement>("[data-line]");
      const quoteLines = quoteRef.current?.querySelectorAll<HTMLParagraphElement>("[data-quote-line]");

      if (reduceMotion) {
        gsap.set([...(lines ? Array.from(lines) : []), ...(quoteLines ? Array.from(quoteLines) : [])], {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        });
        return;
      }

      if (lines?.length) {
        gsap.fromTo(
          lines,
          { opacity: 0.15, y: 24, filter: "blur(5px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.25,
            ease: "power2.out",
            scrollTrigger: {
              trigger: paragraphsRef.current,
              start: "top 85%",
              end: "bottom 55%",
              scrub: true,
            },
          },
        );
      }

      if (quoteLines?.length) {
        gsap.fromTo(
          quoteLines,
          { opacity: 0.12, y: 30, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.35,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 85%",
              end: "bottom 45%",
              scrub: true,
            },
          },
        );
      }
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-brand-black px-6 py-24 md:py-36">
      <div className="mx-auto flex max-w-4xl flex-col gap-20 md:gap-28">
        <div ref={paragraphsRef} className="flex flex-col gap-6">
          {PARAGRAPHS.map((paragraph, i) => (
            <p
              key={i}
              data-line
              className="max-w-3xl text-lg leading-relaxed text-brand-white/75 md:text-2xl"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div ref={quoteRef} className="flex flex-col gap-6 border-l-2 border-brand-red/50 pl-6 md:gap-8 md:pl-10">
          {PULL_QUOTE.map((line, i) => (
            <p
              key={i}
              data-quote-line
              className={
                i === 0
                  ? "text-balance font-display text-2xl uppercase leading-[1.15] tracking-tight text-brand-white md:text-4xl"
                  : "text-balance font-display text-xl uppercase leading-[1.15] tracking-tight text-brand-red md:text-3xl"
              }
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

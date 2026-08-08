"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AGENDA = [
  {
    time: "09h00",
    title: "Boas-vindas & Networking Estratégico",
    body: "Comece o dia ampliando sua rede de contatos em um ambiente preparado para conexões de valor.",
  },
  {
    time: "10h00",
    title: "Imersão de Abertura",
    body: "Uma experiência prática para romper o piloto automático e preparar sua mente para uma manhã de novas perspectivas.",
  },
  {
    time: "10h30",
    title: "Experiência Central, O Inimigo Invisível do Crescimento",
    body: "Uma palestra vivencial que integra comportamento, neurociência e empreendedorismo para revelar os bloqueios que limitam a evolução para o seu próximo nível.",
  },
  {
    time: "12h00",
    title: "Conexões que Geram Negócios",
    body: "Momento para compartilhar aprendizados, fortalecer relacionamentos e ampliar oportunidades.",
  },
  {
    time: "12h30",
    title: "Encerramento",
    body: "Leve novas conexões, novas decisões e uma nova forma de olhar para a sua vida e o seu negócio.",
  },
];

/**
 * Seção pin + scrub: presa na tela enquanto os 5 blocos acendem em sequência.
 * Só roda em desktop e sem prefers-reduced-motion (gsap.matchMedia). No
 * mobile e com movimento reduzido, os 5 blocos aparecem estáticos e legíveis.
 */
export function AgendaSection() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-agenda-item]", root.current);
      if (!items.length) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=170%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        items.forEach((item, i) => {
          if (i > 0) {
            tl.to(items[i - 1], { opacity: 0.3, filter: "blur(1px)", duration: 0.5 }, "<");
          }
          tl.fromTo(
            item,
            { opacity: 0.2, y: 26, filter: "blur(4px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" },
            i === 0 ? 0 : ">-0.2",
          );
        });

        return () => tl.kill();
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-brand-charcoal px-6 py-24 md:min-h-screen md:py-0"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
            Agenda
          </span>
          <h2 className="font-display text-3xl uppercase tracking-tight text-brand-white md:text-5xl">
            O que você vai viver nessa manhã...
          </h2>
        </div>

        <ol className="flex flex-col gap-6 md:gap-7">
          {AGENDA.map((item) => (
            <li
              key={item.time}
              data-agenda-item
              className="flex flex-col gap-1 border-l-2 border-brand-red/50 pl-6 md:flex-row md:items-baseline md:gap-8"
            >
              <span className="font-display text-xl text-brand-red md:w-24 md:text-2xl">
                {item.time}
              </span>
              <div>
                <h3 className="text-base font-semibold text-brand-white md:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-white/65 md:text-base">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AGENDA = [
  {
    time: "9h30",
    title: "Abertura e diagnóstico",
    body: "O inimigo invisível do crescimento",
  },
  {
    time: "10h15",
    title: "NR-1 na prática",
    body: "Proteção jurídica real x teatro de compliance",
  },
  {
    time: "11h15",
    title: "Saúde mental como estratégia",
    body: "Cultura, produtividade e faturamento",
  },
];

/**
 * Seção pin + scrub: presa na tela enquanto os 3 blocos acendem em sequência.
 * Só roda em desktop e sem prefers-reduced-motion (gsap.matchMedia). No
 * mobile e com movimento reduzido, os 3 blocos aparecem estáticos e legíveis.
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
            end: "+=120%",
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
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
            Agenda, horário estimado
          </span>
          <h2 className="font-display text-3xl uppercase tracking-tight text-brand-white md:text-5xl">
            Uma manhã, três blocos
          </h2>
        </div>

        <ol className="flex flex-col gap-8 md:gap-10">
          {AGENDA.map((item) => (
            <li
              key={item.time}
              data-agenda-item
              className="flex flex-col gap-1 border-l-2 border-brand-red/50 pl-6 md:flex-row md:items-baseline md:gap-8"
            >
              <span className="font-display text-2xl text-brand-red md:w-28 md:text-3xl">
                {item.time}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-brand-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-brand-white/65">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

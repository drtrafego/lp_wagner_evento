"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const blocos = [
  {
    hora: "9h30",
    titulo: "Abertura e diagnóstico",
    texto: "O inimigo invisível do crescimento",
  },
  {
    hora: "10h15",
    titulo: "NR-1 na prática",
    texto: "Proteção jurídica real x teatro de compliance",
  },
  {
    hora: "11h15",
    titulo: "Saúde mental como estratégia",
    texto: "Cultura, produtividade e faturamento",
  },
];

export function Agenda() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", root.current);
          const line = root.current?.querySelector<HTMLDivElement>("[data-progress]");
          if (!panels.length) return;

          const st = ScrollTrigger.create({
            trigger: root.current,
            start: "top top",
            end: "+=180%",
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
              const progress = self.progress * panels.length;
              panels.forEach((panel, i) => {
                const local = gsap.utils.clamp(0, 1, progress - i);
                gsap.set(panel, {
                  opacity: 0.25 + local * 0.75,
                  y: (1 - local) * 28,
                  scale: 0.94 + local * 0.06,
                });
              });
              if (line) gsap.set(line, { scaleY: self.progress });
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
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 md:gap-14">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
          Agenda da manhã · horário estimado
        </span>

        <div className="relative flex gap-6 sm:gap-8">
          <div
            aria-hidden
            className="relative hidden w-px shrink-0 bg-white/10 md:block"
          >
            <div
              data-progress
              className="absolute inset-x-0 top-0 h-full origin-top scale-y-0 bg-brand-red"
            />
          </div>

          <div className="flex flex-1 flex-col gap-6 md:gap-10">
            {blocos.map((bloco) => (
              <div
                key={bloco.hora}
                data-panel
                className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-brand-charcoal/50 p-6 sm:p-8 md:border-none md:bg-transparent md:p-0"
              >
                <span className="font-heading text-2xl text-brand-red sm:text-3xl">
                  {bloco.hora}
                </span>
                <h3 className="font-heading text-balance text-xl uppercase leading-tight tracking-tight text-brand-white sm:text-3xl md:text-4xl">
                  {bloco.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
                  {bloco.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

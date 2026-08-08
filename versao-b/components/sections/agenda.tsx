"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const blocos = [
  {
    hora: "09h00",
    titulo: "Boas-vindas & Networking Estratégico",
    texto:
      "Comece o dia ampliando sua rede de contatos em um ambiente preparado para conexões de valor.",
  },
  {
    hora: "10h00",
    titulo: "Imersão de Abertura",
    texto:
      "Uma experiência prática para romper o piloto automático e preparar sua mente para uma manhã de novas perspectivas.",
  },
  {
    hora: "10h30",
    titulo: "Experiência Central · O Inimigo Invisível do Crescimento",
    texto:
      "Uma palestra vivencial que integra comportamento, neurociência e empreendedorismo para revelar os bloqueios que limitam a evolução para o seu próximo nível.",
  },
  {
    hora: "12h00",
    titulo: "Conexões que Geram Negócios",
    texto: "Momento para compartilhar aprendizados, fortalecer relacionamentos e ampliar oportunidades.",
  },
  {
    hora: "12h30",
    titulo: "Encerramento",
    texto:
      "Leve novas conexões, novas decisões e uma nova forma de olhar para a sua vida e o seu negócio.",
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
            end: "+=260%",
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
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
            Agenda · horário exato
          </span>
          <h2 className="font-heading text-balance text-2xl uppercase leading-[1.1] tracking-tight text-brand-white sm:text-3xl md:text-4xl">
            O que você vai viver nessa manhã...
          </h2>
        </div>

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

          <div className="flex flex-1 flex-col gap-5 md:gap-7">
            {blocos.map((bloco) => (
              <div
                key={bloco.hora}
                data-panel
                className="flex flex-col gap-1.5 rounded-2xl border border-white/10 bg-brand-charcoal/50 p-5 sm:p-6 md:border-none md:bg-transparent md:p-0"
              >
                <span className="font-heading text-lg text-brand-red sm:text-xl">
                  {bloco.hora}
                </span>
                <h3 className="font-heading text-balance text-lg uppercase leading-tight tracking-tight text-brand-white sm:text-xl md:text-2xl">
                  {bloco.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
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

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const corpo =
  "Turnover alto, afastamento por ansiedade e burnout, queda de produtividade que ninguém sabe explicar, e agora um risco jurídico novo: a NR-1 exige gestão de riscos psicossociais, e empresa que trata isso como formalidade está exposta. Nenhum desses custos aparece separado no DRE, mas juntos eles travam o crescimento.";

export function Problema() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const words = root.current?.querySelectorAll<HTMLSpanElement>("[data-word]");
          const scanline = root.current?.querySelector<HTMLDivElement>("[data-scanline]");
          if (!words?.length || !scanline) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=100%",
              scrub: 1,
              pin: true,
            },
          });

          tl.fromTo(
            scanline,
            { yPercent: -20, opacity: 0 },
            { yPercent: 120, opacity: 1, ease: "none" },
            0,
          );
          tl.fromTo(
            words,
            { opacity: 0.14, filter: "blur(5px)" },
            { opacity: 1, filter: "blur(0px)", stagger: 0.04, ease: "none" },
            0,
          );

          return () => tl.scrollTrigger?.kill();
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
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
          O que ninguém mostra no balancete
        </span>
        <h2 className="font-heading text-balance text-3xl uppercase leading-[1.05] tracking-tight text-brand-white sm:text-4xl md:text-5xl lg:text-6xl">
          {"Enquanto sua empresa cresce, esse inimigo cresce junto, e ele é invisível até o dia que explode."
            .split(" ")
            .map((word, i) => (
              <span key={`${word}-${i}`} data-word className="mr-2.5 inline-block">
                {word}
              </span>
            ))}
        </h2>
        <p className="max-w-2xl text-balance text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          {corpo.split(" ").map((word, i) => (
            <span key={`${word}-${i}`} data-word className="mr-1.5 inline-block">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

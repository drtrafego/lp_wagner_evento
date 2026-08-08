"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const WORDS = ["O", "Inimigo", "Invisível", "do", "Crescimento"];

/**
 * Tipografia como protagonista do hero: cada palavra sobe e revela em
 * sequencia no carregamento (nao depende de scroll). O gesto de risco
 * animado (traço vermelho desenhado a mao) vive agora no HeroSubtitle,
 * sobre a palavra "mercado", ja que esse H1 curto nao tem uma palavra
 * candidata a ser riscada. prefers-reduced-motion mantem o texto estatico.
 */
export function HeroTitle() {
  const root = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const wordEls = root.current?.querySelectorAll<HTMLSpanElement>("[data-hero-word]");
        if (!wordEls?.length) return;

        const tl = gsap.timeline({ delay: 0.2 });

        tl.fromTo(
          wordEls,
          { yPercent: 100, opacity: 0, filter: "blur(6px)" },
          {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "power4.out",
            stagger: 0.07,
          },
        );

        return () => {
          tl.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <h1
      ref={root}
      className="font-heading text-balance text-[1.85rem] uppercase leading-[1.05] tracking-tight text-brand-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl"
    >
      {WORDS.map((word, i) => (
        <span key={`${word}-${i}`} className="mr-2.5 inline-block">
          <span data-hero-word className="relative inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </h1>
  );
}

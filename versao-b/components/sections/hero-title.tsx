"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const WORDS = [
  "O",
  "inimigo",
  "que",
  "mais",
  "trava",
  "o",
  "crescimento",
  "da",
  "sua",
  "empresa",
  "não",
  "aparece",
  "em",
  "nenhuma",
  "planilha.",
];

const STRIKE_WORD = "planilha.";

/**
 * Tipografia como protagonista do hero: cada palavra sobe e revela em
 * sequencia no carregamento (nao depende de scroll), e a palavra final
 * "planilha." ganha um traço vermelho desenhado a mao por cima, o gesto de
 * risco que carrega o argumento central da copy (isso nao aparece registrado
 * em lugar nenhum). prefers-reduced-motion mantem o texto estatico e legivel.
 */
export function HeroTitle() {
  const root = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const wordEls = root.current?.querySelectorAll<HTMLSpanElement>("[data-hero-word]");
        const strike = root.current?.querySelector<SVGPathElement>("[data-strike]");
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
            stagger: 0.045,
          },
        );

        if (strike) {
          const length = strike.getTotalLength();
          gsap.set(strike, { strokeDasharray: length, strokeDashoffset: length });
          tl.to(strike, { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" }, ">-0.1");
        }

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
      {WORDS.map((word, i) => {
        const isStrike = word === STRIKE_WORD;
        return (
          <span key={`${word}-${i}`} className="mr-2.5 inline-block">
            <span data-hero-word className="relative inline-block will-change-transform">
              {word}
              {isStrike ? (
                <svg
                  aria-hidden
                  viewBox="0 0 100 30"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                >
                  <path
                    data-strike
                    d="M2,20 C 26,6 55,28 98,10"
                    stroke="var(--red)"
                    strokeWidth={5}
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              ) : null}
            </span>
          </span>
        );
      })}
    </h1>
  );
}

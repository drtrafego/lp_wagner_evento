"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const STRIKE_WORD = "mercado.";

const SENTENCE_ONE = ["O", "que", "trava", "seus", "resultados", "pode", "não", "estar", "no", "mercado."];
const SENTENCE_TWO = ["Pode", "estar", "dentro", "de", "você."];

/**
 * O gesto de risco desenhado a mao mudou de lugar com a troca de copy: antes
 * cruzava "planilha.", agora cruza "mercado." (a resposta errada, o lugar
 * onde o empreendedor costuma procurar o problema), pra deixar a segunda
 * frase, "pode estar dentro de você", como a resposta certa em destaque.
 */
export function HeroSubtitle() {
  const root = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const wordEls = root.current?.querySelectorAll<HTMLSpanElement>("[data-sub-word]");
        const strike = root.current?.querySelector<SVGPathElement>("[data-strike]");
        if (!wordEls?.length) return;

        const tl = gsap.timeline({ delay: 0.85 });

        tl.fromTo(
          wordEls,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.035 },
        );

        if (strike) {
          const length = strike.getTotalLength();
          gsap.set(strike, { strokeDasharray: length, strokeDashoffset: length });
          tl.to(strike, { strokeDashoffset: 0, duration: 0.45, ease: "power2.inOut" }, ">-0.05");
        }

        return () => tl.kill();
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <p
      ref={root}
      className="max-w-xl text-balance text-[0.85rem] leading-relaxed text-white/70 sm:text-base md:text-lg"
    >
      {SENTENCE_ONE.map((word, i) => {
        const isStrike = word === STRIKE_WORD;
        return (
          <span key={`s1-${word}-${i}`} data-sub-word className="relative mr-1.5 inline-block">
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
                  strokeWidth={4}
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            ) : null}
          </span>
        );
      })}
      <br className="hidden sm:block" />
      <strong className="font-semibold text-brand-red">
        {SENTENCE_TWO.map((word, i) => (
          <span key={`s2-${word}-${i}`} data-sub-word className="mr-1.5 inline-block">
            {word}
          </span>
        ))}
      </strong>
    </p>
  );
}

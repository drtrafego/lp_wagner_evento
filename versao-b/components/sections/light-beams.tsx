"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

/**
 * Feixes de luz vermelha cruzando o fundo escuro, vindo de cima, referência
 * literal aos holofotes de palco da arte oficial (evento-flyer.jpg). CSS puro
 * pro estado parado, GSAP so adiciona a varredura lenta em desktop com
 * prefers-reduced-motion: no-preference. Nada de mesh 3D solida aqui.
 */
export function LightBeams() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const beams = root.current?.querySelectorAll<HTMLDivElement>("[data-beam]");
        const sweep = root.current?.querySelector<HTMLDivElement>("[data-sweep]");
        if (!beams?.length) return;

        beams.forEach((beam, i) => {
          gsap.to(beam, {
            rotate: `+=${i % 2 === 0 ? 3.5 : -3.5}`,
            duration: 7 + i * 1.3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });

        if (sweep) {
          gsap.to(sweep, {
            rotate: "+=360",
            duration: 46,
            ease: "none",
            repeat: -1,
            transformOrigin: "50% 0%",
          });
        }

        return () => {
          gsap.killTweensOf(beams);
          if (sweep) gsap.killTweensOf(sweep);
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* neblina de palco atras dos feixes */}
      <div className="absolute left-1/2 top-[-15%] h-[65%] w-[150%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(196,0,0,0.26),transparent_65%)]" />

      {/* varredura lenta, como o holofote girando sobre o palco */}
      <div
        data-sweep
        className="absolute left-1/2 top-[-10%] h-[80%] w-[85%] -translate-x-1/2 opacity-40 mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 210deg at 50% 0%, transparent 0deg, rgba(196,0,0,0.4) 10deg, transparent 24deg, transparent 336deg, rgba(178,30,44,0.32) 350deg, transparent 360deg)",
        }}
      />

      <div
        data-beam
        style={{ transform: "rotate(-9deg)" }}
        className="absolute left-[12%] top-[-25%] h-[135%] w-[9%] origin-top bg-gradient-to-b from-brand-red/55 via-brand-red/12 to-transparent blur-md"
      />
      <div
        data-beam
        style={{ transform: "rotate(5deg)" }}
        className="absolute left-[34%] top-[-25%] h-[135%] w-[6%] origin-top bg-gradient-to-b from-brand-crimson/50 via-brand-crimson/10 to-transparent blur-md"
      />
      <div
        data-beam
        style={{ transform: "rotate(-4deg)" }}
        className="absolute left-[58%] top-[-25%] h-[135%] w-[8%] origin-top bg-gradient-to-b from-brand-red/45 via-brand-red/10 to-transparent blur-md"
      />
      <div
        data-beam
        style={{ transform: "rotate(10deg)" }}
        className="absolute left-[80%] top-[-25%] h-[135%] w-[11%] origin-top bg-gradient-to-b from-brand-crimson/38 via-brand-crimson/8 to-transparent blur-lg"
      />
    </div>
  );
}

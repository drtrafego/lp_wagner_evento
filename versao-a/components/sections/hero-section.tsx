"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CtaButton } from "@/components/ui/cta-button";
import { HeroLightBeams } from "@/components/sections/hero-light-beams";
import { HeroMarquee } from "@/components/sections/hero-marquee";

gsap.registerPlugin(useGSAP);

const CHIPS = ["22/08/2026", "9h30 às 12h30", "Rua Serra de Bragança, 1814"];
const TITLE =
  "O inimigo que mais trava o crescimento da sua empresa não aparece em nenhuma planilha.";

/**
 * Hero nível 3: o "uau" vem de tipografia grande + luz ambiente em CSS puro
 * (HeroLightBeams) + reveal coreografado em GSAP, sem WebGL como fonte do
 * efeito. Título e subtítulo são o elemento mais forte da composição.
 */
export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const chipsRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax sutil: o conteúdo sobe um pouco mais devagar que o scroll ao
  // sair do hero, 10 a 20% de diferença pra não cansar a leitura.
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useGSAP(
    () => {
      const words = titleRef.current?.querySelectorAll<HTMLSpanElement>("[data-word]");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const targets = [badgeRef.current, subRef.current, chipsRef.current, ctaRef.current];

      if (reduceMotion || !words?.length) {
        gsap.set([...targets, ...(words ? Array.from(words) : [])], {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        });
        return;
      }

      gsap.set(targets, { opacity: 0, y: 18 });
      gsap.set(words, { opacity: 0, y: 26, filter: "blur(8px)" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5 })
        .to(
          words,
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.045 },
          "-=0.2",
        )
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.45")
        .to(chipsRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] flex-col items-center justify-center bg-brand-black py-8 md:py-16"
    >
      <HeroLightBeams />

      <div className="pointer-events-none absolute inset-0 bg-dot-texture text-white/[0.035]" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center gap-4 px-6 text-center md:gap-6"
      >
        <span
          ref={badgeRef}
          className="rounded-full border border-brand-red/40 bg-brand-red/10 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-brand-white backdrop-blur md:text-xs md:tracking-[0.25em]"
        >
          Empreende Zona Leste apresenta
        </span>

        <h1
          ref={titleRef}
          className="max-w-4xl text-balance font-display text-[2rem] uppercase leading-[1.04] tracking-tight text-brand-white sm:text-6xl md:text-8xl"
        >
          {TITLE.split(" ").map((word, i) => (
            <span key={`${word}-${i}`} data-word className="mr-[0.28em] inline-block">
              {word}
            </span>
          ))}
        </h1>

        <p
          ref={subRef}
          className="max-w-2xl text-sm leading-relaxed text-brand-white/70 md:text-lg"
        >
          Saúde mental negligenciada, cultura tóxica e a NR-1 aplicada errado
          custam caro e ficam invisíveis até virar processo trabalhista ou
          time esgotado. Em uma manhã, você aprende a transformar isso em
          proteção jurídica e vantagem competitiva.
        </p>

        <ul
          ref={chipsRef}
          className="flex flex-wrap items-center justify-center gap-1.5 text-[0.6rem] uppercase tracking-[0.08em] text-brand-white/85 md:gap-2 md:text-sm md:tracking-[0.1em]"
        >
          {CHIPS.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-brand-gray/40 bg-brand-charcoal/70 px-3 py-1.5 md:px-4 md:py-2"
            >
              {chip}
            </li>
          ))}
        </ul>

        <div ref={ctaRef} className="pointer-events-auto mt-1 md:mt-2">
          <CtaButton />
        </div>
      </motion.div>

      <div className="hidden md:block">
        <HeroMarquee />
      </div>
    </section>
  );
}

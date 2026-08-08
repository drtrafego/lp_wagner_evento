"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";
import { MagneticCta } from "@/components/ui/magnetic-cta";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { LightBeams } from "@/components/sections/light-beams";
import { HeroTitle } from "@/components/sections/hero-title";
import { HeroSubtitle } from "@/components/sections/hero-subtitle";
import { Marquee } from "@/components/ui/marquee";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/use-media-query";
import flyer from "@/public/evento-flyer.jpg";

// Regra dura: componente 3D sempre dynamic ssr:false + Suspense + dpr [1,2]
const HeroScene = dynamic(
  () => import("@/components/scene/hero-scene").then((m) => m.HeroScene),
  { ssr: false },
);

// Horario confirmado pelo cliente em 08/08: 9h00 as 12h30 (corrige o 9h30 do flyer)
const chips = ["22/08/2026", "9h00 às 12h30", "Rua Serra de Bragança, 1814"];

const keywords = [
  "BLOQUEIOS INVISÍVEIS",
  "MENTALIDADE DE LIDERANÇA",
  "PRÓXIMO NÍVEL",
  "EVOLUÇÃO PESSOAL",
  "DECISÕES",
  "CRESCIMENTO SUSTENTÁVEL",
];

export function Hero() {
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-black">
      {/* aura ambiente sem forma definida, saindo do canto, 100% CSS */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 -top-1/3 h-[70%] w-[70%] bg-[radial-gradient(circle,rgba(196,0,0,0.22),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/3 -left-1/4 h-[60%] w-[60%] bg-[radial-gradient(circle,rgba(138,0,0,0.18),transparent_70%)] blur-3xl"
      />

      <LightBeams />

      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <HeroScene mobile={isMobile} reduced={reduced} />
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/25 via-brand-black/55 to-brand-black" />
      <div className="pointer-events-none absolute inset-0 grain-overlay opacity-[0.05]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-3 px-5 py-8 sm:gap-5 sm:px-6 sm:py-14 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-14">
        <div className="flex flex-col items-start gap-3 sm:gap-6">
          <span className="rounded-full border border-brand-red/40 bg-brand-red/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red backdrop-blur sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.22em]">
            Empreende Zona Leste apresenta
          </span>

          <HeroTitle />

          <HeroSubtitle />

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur sm:px-3 sm:py-1.5 sm:text-xs"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* TROCAR: link real de inscrição do cliente */}
          <MagneticCta href="#inscricao" className="mt-1 sm:mt-2">
            Garantir minha vaga
          </MagneticCta>

          {/* TODO: cliente confirmar nome, cargo e bio completa dos dois palestrantes antes de publicar */}
          <div className="mt-1 hidden items-center gap-3 text-[11px] text-white/50 sm:mt-2 sm:flex">
            <span className="text-white/80">[NOME PALESTRANTE 1]</span>
            <span aria-hidden className="text-brand-red/60">
              ·
            </span>
            <span className="text-white/80">[NOME PALESTRANTE 2 · WAGNER]</span>
          </div>
        </div>

        <div className="hidden shrink-0 lg:block">
          <CardContainer containerClassName="py-0">
            <CardBody className="h-auto w-[18rem] xl:w-[20rem]">
              <CardItem translateZ={60} className="w-full">
                <div className="relative overflow-hidden rounded-2xl border border-brand-red/30 shadow-[0_0_60px_-10px_rgba(196,0,0,0.6)]">
                  <Image
                    src={flyer}
                    alt="Arte oficial do evento Experiência Empreende, O Inimigo Invisível do Crescimento"
                    priority
                    placeholder="blur"
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 1280px) 26rem, 22rem"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>

      {/* faixa de palavras-chave do tema, reforço do marquee logo abaixo do hero */}
      <div className="relative z-10 hidden border-t border-white/10 bg-brand-black/40 py-3 backdrop-blur-sm sm:block">
        <Marquee
          reverse
          pauseOnHover
          style={{ "--duration": reduced ? "150s" : "28s" } as React.CSSProperties}
        >
          {keywords.map((word) => (
            <span
              key={word}
              className="mx-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40"
            >
              {word}
              <span aria-hidden className="text-brand-red/70">
                ·
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

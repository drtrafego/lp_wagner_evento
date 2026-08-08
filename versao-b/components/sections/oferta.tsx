"use client";

import { motion } from "motion/react";
import { MagneticCta } from "@/components/ui/magnetic-cta";

const incluso = [
  "Acesso presencial aos 3 blocos da manhã: diagnóstico, NR-1 na prática e saúde mental como estratégia",
  "O primeiro passo prático pra aplicar essa semana, sem depender de consultoria cara",
  "Vagas limitadas pelo espaço físico do local, sem lotação além da capacidade da sala",
];

export function Oferta() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal px-5 py-20 sm:px-6 sm:py-28 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/15 blur-[130px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-3xl border border-brand-red/25 bg-brand-black/60 p-8 text-center shadow-[0_0_80px_-20px_rgba(196,0,0,0.5)] backdrop-blur sm:p-12"
      >
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
          Investimento
        </span>

        {/* TROCAR: preço definido pelo cliente */}
        <p className="font-heading text-5xl text-brand-white sm:text-6xl">
          [PREÇO]
        </p>

        <ul className="flex flex-col gap-3 text-left">
          {incluso.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/75 sm:text-base">
              <span aria-hidden className="mt-1 text-brand-red">
                +
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* TROCAR: link real de inscrição do cliente */}
        <MagneticCta href="#inscricao">Garantir minha vaga</MagneticCta>
      </motion.div>
    </section>
  );
}

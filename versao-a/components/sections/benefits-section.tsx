"use client";

import { motion } from "motion/react";

const BENEFITS = [
  "Entenda o que a atualização da NR-1 exige de verdade, sem o medo e a desinformação que circulam por aí",
  "Descubra o risco que o empresário normalmente não enxerga, e que custa caro quando vira processo",
  "Saiba a diferença entre cumprir a norma no papel e proteger a empresa de verdade",
  "Saia com o primeiro passo prático pra aplicar essa semana, sem depender de consultoria cara",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 shrink-0 text-brand-red"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 12.5l2.5 2.5L16 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BenefitsSection() {
  return (
    <section className="relative bg-brand-charcoal px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
            O que você leva do evento
          </span>
          <h2 className="text-balance font-display text-3xl uppercase leading-[1.1] tracking-tight text-brand-white md:text-5xl">
            Quatro respostas que valem a manhã inteira
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {BENEFITS.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 rounded-2xl border border-brand-gray/25 bg-brand-black/60 p-6"
            >
              <CheckIcon />
              <p className="text-base leading-relaxed text-brand-white/85 md:text-lg">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

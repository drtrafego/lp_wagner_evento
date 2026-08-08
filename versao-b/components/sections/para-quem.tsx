"use client";

import { motion } from "motion/react";

const itens = [
  "Sente que já chegou longe, mas sabe que ainda não alcançou todo o seu potencial.",
  "Entende que crescimento profissional e na carreira começa pela evolução pessoal.",
  "É empresário, empreendedor, profissional liberal, líder ou gestor.",
  "Deseja fortalecer sua mentalidade, ampliar sua visão e construir resultados mais consistentes.",
];

export function ParaQuem() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal px-5 py-20 sm:px-6 sm:py-28 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-red/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-balance text-2xl uppercase leading-[1.1] tracking-tight text-brand-white sm:text-4xl md:text-5xl"
        >
          Esta experiência é para quem...
        </motion.h2>

        <ul className="mt-10 flex flex-col gap-4 sm:mt-14 sm:gap-5">
          {itens.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 border-b border-white/10 pb-4 sm:pb-5"
            >
              <span
                aria-hidden
                className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-balance text-sm leading-relaxed text-white/85 sm:text-lg">
                {item}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

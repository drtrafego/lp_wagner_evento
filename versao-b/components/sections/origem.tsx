"use client";

import { motion } from "motion/react";

const paragrafos = [
  "Foi para provocar essa reflexão que nasceu a Experiência Empreende, uma oportunidade criada para revelar os bloqueios invisíveis que podem limitar suas decisões, evolução e conquistas, mesmo quando você acredita estar fazendo tudo certo. Existe uma verdade que poucos empreendedores percebem: empresas saudáveis são construídas por pessoas emocionalmente conscientes.",
  "Negócios extraordinários começam quando o empreendedor decide enfrentar o seu inimigo invisível.",
];

export function Origem() {
  return (
    <section className="relative bg-brand-black px-5 py-20 sm:px-6 sm:py-28 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red"
        >
          A origem
        </motion.span>

        {paragrafos.map((paragrafo, i) => (
          <motion.p
            key={paragrafo.slice(0, 24)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={
              i === 0
                ? "text-balance text-base leading-relaxed text-white/75 sm:text-lg md:text-xl"
                : "font-heading text-balance text-xl uppercase leading-tight tracking-tight text-brand-white sm:text-2xl md:text-3xl"
            }
          >
            {paragrafo}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

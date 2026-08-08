"use client";

import { motion } from "motion/react";

const PARAGRAPHS = [
  "Foi para provocar essa reflexão que nasceu a Experiência Empreende, uma oportunidade criada para revelar os bloqueios invisíveis que podem limitar suas decisões, evolução e conquistas, mesmo quando você acredita estar fazendo tudo certo. Existe uma verdade que poucos empreendedores percebem: empresas saudáveis são construídas por pessoas emocionalmente conscientes.",
  "Negócios extraordinários começam quando o empreendedor decide enfrentar o seu inimigo invisível.",
];

/**
 * Seção nova (correção de copy 08/08): a origem da experiência, entra logo
 * depois do pull-quote do problema. Mesmo padrão visual das seções vizinhas
 * (fundo preto, mesma largura de coluna, mesmo ritmo de reveal em scroll).
 */
export function OriginSection() {
  return (
    <section className="relative bg-brand-black px-6 pb-24 md:pb-36">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
          A origem
        </span>

        {PARAGRAPHS.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={
              i === 0
                ? "max-w-3xl text-lg leading-relaxed text-brand-white/75 md:text-xl"
                : "max-w-3xl font-display text-xl uppercase leading-[1.2] tracking-tight text-brand-white md:text-2xl"
            }
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

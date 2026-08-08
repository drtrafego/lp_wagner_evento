"use client";

import { motion } from "motion/react";

const AUDIENCE = [
  "Sente que já chegou longe, mas sabe que ainda não alcançou todo o seu potencial.",
  "Entende que crescimento profissional e na carreira começa pela evolução pessoal.",
  "É empresário, empreendedor, profissional liberal, líder ou gestor.",
  "Deseja fortalecer sua mentalidade, ampliar sua visão e construir resultados mais consistentes.",
];

export function AudienceSection() {
  return (
    <section className="relative bg-brand-black px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <h2 className="text-balance font-display text-3xl uppercase leading-[1.1] tracking-tight text-brand-white md:text-5xl">
          Esta experiência é para quem...
        </h2>

        <ul className="flex flex-col gap-5">
          {AUDIENCE.map((text, i) => (
            <motion.li
              key={text}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-baseline gap-4 border-b border-brand-gray/20 pb-5"
            >
              <span className="font-display text-2xl text-brand-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg leading-relaxed text-brand-white/85 md:text-xl">{text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

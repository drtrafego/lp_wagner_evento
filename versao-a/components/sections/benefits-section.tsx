"use client";

import { motion } from "motion/react";

const BENEFITS = [
  "O que precisa mudar em você para que o seu negócio cresça de forma sustentável?",
  "Como emoções silenciosas influenciam suas decisões, seu posicionamento e seus resultados?",
  "Quais são os cinco principais inimigos invisíveis que podem impedir você de alcançar o próximo nível?",
  "Por que alguns empreendedores crescem rapidamente enquanto outros permanecem presos aos mesmos desafios?",
];

function QuestionIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 shrink-0 text-brand-red"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9.5 9.2a2.5 2.5 0 1 1 3.7 2.2c-.9.5-1.2 1-1.2 1.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="16.9" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function BenefitsSection() {
  return (
    <section className="relative bg-brand-charcoal px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
            Nesta experiência
          </span>
          <h2 className="text-balance font-display text-3xl uppercase leading-[1.1] tracking-tight text-brand-white md:text-5xl">
            Nesta experiência você vai descobrir...
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
              <QuestionIcon />
              <p className="text-base leading-relaxed text-brand-white/85 md:text-lg">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-lg leading-relaxed text-brand-white/70 md:text-xl"
        >
          Mais do que respostas, você encontrará novas perguntas. E são elas
          que abrem para uma nova forma de empreender.
        </motion.p>
      </div>
    </section>
  );
}

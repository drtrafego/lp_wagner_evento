"use client";

import { motion } from "motion/react";

const perguntas = [
  {
    q: "O evento é presencial ou tem opção online?",
    a: "Presencial, na Rua Serra de Bragança, 1814, Zona Leste de São Paulo.",
  },
  {
    q: "Preciso ter uma equipe grande pra esse conteúdo fazer sentido?",
    a: "Não, o conteúdo serve pra qualquer empresário que tem gente contratada, de times pequenos a estruturas maiores.",
  },
  {
    q: "Vou sair sabendo aplicar a NR-1 na prática?",
    a: "Sim, o evento entrega o passo a passo prático, não só teoria.",
  },
  {
    q: "Tem certificado de participação?",
    a: "[A CONFIRMAR: cliente decide se emite certificado]",
  },
  {
    q: "Qual a política de reembolso se eu não puder ir?",
    a: "[A CONFIRMAR: cliente decide a política]",
  },
];

export function Faq() {
  return (
    <section className="relative bg-brand-black px-5 py-20 sm:px-6 sm:py-28 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-balance text-2xl uppercase leading-[1.1] tracking-tight text-brand-white sm:text-4xl md:text-5xl"
        >
          Perguntas frequentes
        </motion.h2>

        <div className="mt-10 flex flex-col divide-y divide-white/10 border-t border-white/10 sm:mt-14">
          {perguntas.map((item, i) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group py-5 sm:py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-balance text-base font-semibold text-brand-white sm:text-lg">
                {item.q}
                <span
                  aria-hidden
                  className="shrink-0 text-xl text-brand-red transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-balance text-sm leading-relaxed text-white/70 sm:text-base">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

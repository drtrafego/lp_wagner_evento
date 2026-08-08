"use client";

import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const bullets = [
  {
    numero: "01",
    texto:
      "Entenda o que a atualização da NR-1 exige de verdade, sem o medo e a desinformação que circulam por aí",
  },
  {
    numero: "02",
    texto:
      "Descubra o risco que o empresário normalmente não enxerga, e que custa caro quando vira processo",
  },
  {
    numero: "03",
    texto:
      "Saiba a diferença entre cumprir a norma no papel e proteger a empresa de verdade",
  },
  {
    numero: "04",
    texto:
      "Saia com o primeiro passo prático pra aplicar essa semana, sem depender de consultoria cara",
  },
];

export function Bullets() {
  return (
    <section className="relative bg-brand-black px-5 py-20 sm:px-6 sm:py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading max-w-2xl text-balance text-2xl uppercase leading-[1.1] tracking-tight text-brand-white sm:text-4xl md:text-5xl"
        >
          O que você leva do evento
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {bullets.map((bullet, i) => (
            <motion.div
              key={bullet.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <CardContainer containerClassName="py-0">
                <CardBody className="h-auto w-full">
                  <CardItem
                    translateZ={40}
                    className="w-full rounded-2xl border border-white/10 bg-brand-charcoal/60 p-6 backdrop-blur transition-colors duration-300 hover:border-brand-red/50 sm:p-8"
                  >
                    <span className="font-heading text-3xl text-brand-red/70 sm:text-4xl">
                      {bullet.numero}
                    </span>
                    <p className="mt-4 text-balance text-sm leading-relaxed text-white/80 sm:text-base">
                      {bullet.texto}
                    </p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import { MagneticCta } from "@/components/ui/magnetic-cta";

const ENDERECO_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Serra+de+Bragança,+1814,+Vila+Formosa,+São+Paulo";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-black via-brand-charcoal to-brand-black px-5 py-24 sm:px-6 sm:py-32">
      <div
        aria-hidden
        className="animate-ember-pulse pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
      >
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
          Garanta sua vaga
        </span>
        <p className="text-balance text-xl leading-snug text-brand-white sm:text-2xl md:text-3xl">
          As vagas são limitadas pelo espaço físico do local. Garanta a sua antes que a
          turma feche.
        </p>

        {/* TROCAR: link real de inscrição do cliente */}
        <MagneticCta href="#inscricao">Garantir minha vaga</MagneticCta>

        <a
          href={ENDERECO_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center gap-2 text-sm text-white/50 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/80"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
            <path
              d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"
              stroke="currentColor"
              strokeWidth={1.6}
            />
            <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth={1.6} />
          </svg>
          22/08/2026 · Rua Serra de Bragança, 1814, Vila Formosa, Zona Leste de São Paulo
        </a>
      </motion.div>
    </section>
  );
}

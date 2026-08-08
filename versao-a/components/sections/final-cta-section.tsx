import { CtaButton } from "@/components/ui/cta-button";

export function FinalCtaSection() {
  return (
    <section id="inscricao" className="relative overflow-hidden bg-brand-black px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-red-deep/25 via-brand-black to-brand-black" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-balance font-display text-3xl uppercase leading-[1.1] tracking-tight text-brand-white md:text-5xl">
          As vagas são limitadas pelo espaço físico do local.
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-brand-white/75">
          Garanta a sua antes que a turma feche.
        </p>
        <CtaButton />
        <p className="text-sm uppercase tracking-[0.15em] text-brand-white/50">
          22/08/2026 · 9h00 às 12h30 · Rua Serra de Bragança, 1814, Vila Formosa, Zona Leste de São Paulo
        </p>
      </div>
    </section>
  );
}

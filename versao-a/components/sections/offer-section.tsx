import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";

// Itens literais da seção 3 do briefing (baseados só na agenda de 5 blocos).
// Nenhum item novo foi inventado; confirmar com o cliente antes de publicar.
const INCLUDED = [
  "Manhã completa, 5 momentos das 9h00 às 12h30",
  "Imersão de abertura pra sair do piloto automático",
  "Palestra vivencial sobre os bloqueios que travam o próximo nível do negócio",
  "Momento de networking estratégico e conexões que geram negócio",
];

export function OfferSection() {
  return (
    <section id="oferta" className="relative bg-brand-black px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-red">
              Inscrição
            </span>
            <h2 className="text-balance font-display text-3xl uppercase leading-[1.1] tracking-tight text-brand-white md:text-4xl">
              Uma manhã pra enfrentar o seu inimigo invisível
            </h2>
          </div>

          <div className="flex items-baseline gap-2">
            {/* TROCAR: preço definido pelo cliente */}
            <span className="font-display text-5xl text-brand-red md:text-6xl">[PREÇO]</span>
            <span className="text-sm uppercase tracking-[0.1em] text-brand-white/60">
              por pessoa
            </span>
          </div>

          <ul className="flex flex-col gap-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-brand-white/80">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <CtaButton className="self-start" />
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-brand-gray/25 bg-brand-charcoal">
          <div className="relative aspect-[1600/837] w-full">
            <Image
              src="/evento-flyer.jpg"
              alt="Arte oficial do evento Experiência Empreende, com os dois palestrantes convidados"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 border-t border-brand-gray/25 bg-brand-black/80 p-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
              Quem apresenta
            </span>
            {/* TROCAR: cliente precisa confirmar nomes e bios completas dos dois palestrantes */}
            <p className="text-sm leading-relaxed text-brand-white/75">
              <strong className="text-brand-white">[NOME PALESTRANTE 1]</strong>
            </p>
            <p className="text-sm leading-relaxed text-brand-white/75">
              <strong className="text-brand-white">[NOME PALESTRANTE 2 · WAGNER]</strong>,
              hostcondutor do Empreende Zona Leste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

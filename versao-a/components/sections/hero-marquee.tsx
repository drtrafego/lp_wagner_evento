import { Marquee } from "@/components/ui/marquee";

const WORDS = [
  "NR-1",
  "SAÚDE MENTAL CORPORATIVA",
  "CULTURA TÓXICA",
  "TURNOVER",
  "PROCESSO TRABALHISTA",
  "PROTEÇÃO JURÍDICA",
  "PRODUTIVIDADE",
];

/**
 * Faixa fina no rodapé do hero, micro-interação viva pedida pra reforçar o
 * tema sem depender de 3D. Puramente decorativa, não compete com o CTA.
 */
export function HeroMarquee() {
  return (
    <div
      aria-hidden
      className="absolute inset-x-0 bottom-0 z-10 border-t border-brand-gray/20 bg-brand-black/70 py-3 backdrop-blur-sm"
    >
      <Marquee repeat={3}>
        {WORDS.map((word) => (
          <span
            key={word}
            className="flex items-center gap-6 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-brand-white/45 md:text-xs"
          >
            {word}
            <span aria-hidden className="text-brand-red/60">
              •
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

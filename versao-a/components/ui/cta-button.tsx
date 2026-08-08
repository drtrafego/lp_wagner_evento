import { cn } from "@/lib/utils";

type CtaButtonProps = {
  className?: string;
};

/**
 * CTA único da página. Texto sempre "Garantir minha vaga" (regra dura do
 * briefing, seção 5): nunca renomear nem colocar um segundo botão concorrente.
 * Compacto no mobile de propósito, cresce a partir do md, pra caber na dobra
 * do hero em 375px sem empurrar o resto do conteúdo pra fora da tela.
 */
export function CtaButton({ className }: CtaButtonProps) {
  return (
    <a
      // TROCAR: link real de inscrição do cliente
      href="#inscricao"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3.5 font-display text-sm uppercase tracking-[0.06em] text-brand-white transition-all duration-300 hover:bg-brand-red-deep hover:shadow-[0_0_36px_rgba(196,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red md:px-9 md:py-5 md:text-base",
        className,
      )}
    >
      Garantir minha vaga
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

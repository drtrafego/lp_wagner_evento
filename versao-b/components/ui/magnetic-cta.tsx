"use client";

import { useRef } from "react";
import type { MouseEvent } from "react";
import { useHasFinePointer } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * CTA unico da pagina, sempre "Garantir minha vaga". Atrai levemente o cursor
 * em desktop (magnetic button), raio curto pra nao brigar com a leitura.
 */
export function MagneticCta({ href, children, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isFine = useHasFinePointer();

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    if (!isFine || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.22}px, ${y * 0.32}px)`;
  }

  function handleLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-white shadow-[0_0_40px_-8px_rgba(196,0,0,0.8)] transition-[transform,box-shadow] duration-200 ease-out will-change-transform hover:shadow-[0_0_60px_-4px_rgba(196,0,0,0.95)]",
        className,
      )}
    >
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-red via-brand-crimson to-brand-red-deep opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </a>
  );
}

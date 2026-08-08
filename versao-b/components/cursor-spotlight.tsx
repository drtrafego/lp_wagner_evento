"use client";

import { useEffect, useRef } from "react";
import { useHasFinePointer, usePrefersReducedMotion } from "@/lib/use-media-query";

/**
 * Holofote que segue o cursor pela pagina inteira (nivel 4). Desktop apenas
 * (pointer: fine), respeita prefers-reduced-motion desligando o rastreio.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const isFine = useHasFinePointer();
  const reduced = usePrefersReducedMotion();
  const enabled = isFine && !reduced;

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const handleMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--spot-x", `${e.clientX}px`);
        el.style.setProperty("--spot-y", `${e.clientY}px`);
        raf = 0;
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 opacity-80 mix-blend-screen transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(560px circle at var(--spot-x, 50%) var(--spot-y, 15%), rgba(196,0,0,0.22), transparent 70%)",
      }}
    />
  );
}

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Sincroniza o Lenis com o GSAP ScrollTrigger (recomendação oficial das duas
 * libs). Sem isso, scrub e pin ficam levemente fora de fase com o scroll
 * suave. Precisa viver dentro de <ReactLenis>, ver components/smooth-scroll.tsx.
 */
export function LenisGsapSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  return null;
}

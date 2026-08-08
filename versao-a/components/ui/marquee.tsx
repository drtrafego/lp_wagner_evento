import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  children: React.ReactNode;
  repeat?: number;
}

/**
 * Marquee infinito em CSS puro. Em prefers-reduced-motion desacelera pra
 * 120s (ver globals.css), nunca para de vez, regra da casa.
 */
export function Marquee({ className, reverse = false, children, repeat = 4, ...props }: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn("group flex gap-(--gap) overflow-hidden [--duration:32s] [--gap:2.5rem]", className)}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "animate-marquee flex shrink-0 items-center gap-(--gap)",
            reverse && "[animation-direction:reverse]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

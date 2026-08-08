const BEAMS = [
  { rotateFrom: -18, rotateTo: 6, anim: "animate-beam-1", delay: "0s", spread: "14deg" },
  { rotateFrom: -6, rotateTo: 20, anim: "animate-beam-2", delay: "-6s", spread: "10deg" },
  { rotateFrom: 10, rotateTo: -16, anim: "animate-beam-3", delay: "-11s", spread: "12deg" },
];

/**
 * Holofotes de palco em CSS puro (conic-gradient, sem clip-path de borda
 * dura), referência literal ao evento-flyer.jpg: feixes de luz vermelha bem
 * suaves vindos de cima, com varredura lenta. Pano de fundo discreto, a
 * tipografia do hero continua o elemento mais forte da composição.
 */
export function HeroLightBeams() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Fonte de luz, glow ambiente bem sutil no topo */}
      <div
        className="animate-glow-pulse absolute left-1/2 top-[-22%] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-red/[0.16] blur-[130px]"
        style={{ animationDelay: "-2s" }}
      />

      {BEAMS.map((beam) => (
        <div
          key={beam.anim}
          className={`absolute left-1/2 top-[-40%] h-[180%] w-[180%] origin-top -translate-x-1/2 blur-[55px] ${beam.anim} mix-blend-screen`}
          style={{
            animationDelay: beam.delay,
            background: `conic-gradient(from 180deg at 50% 0%, transparent calc(50% - ${beam.spread}), rgba(196,0,0,0.24) 50%, transparent calc(50% + ${beam.spread}))`,
          }}
        />
      ))}
    </div>
  );
}

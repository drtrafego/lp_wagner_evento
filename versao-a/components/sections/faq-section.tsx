const FAQ = [
  {
    q: "O evento é presencial ou tem opção online?",
    a: "Presencial, na Rua Serra de Bragança, 1814, Zona Leste de São Paulo.",
  },
  {
    q: "Preciso ter uma equipe grande pra esse conteúdo fazer sentido?",
    a: "Não, o conteúdo serve pra qualquer empresário que tem gente contratada, de times pequenos a estruturas maiores.",
  },
  {
    q: "Vou sair sabendo aplicar a NR-1 na prática?",
    a: "Sim, o evento entrega o passo a passo prático, não só teoria.",
  },
  {
    q: "Tem certificado de participação?",
    a: "[A CONFIRMAR: cliente decide se emite certificado]",
  },
  {
    q: "Qual a política de reembolso se eu não puder ir?",
    a: "[A CONFIRMAR: cliente decide a política]",
  },
];

export function FaqSection() {
  return (
    <section className="relative bg-brand-charcoal px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <h2 className="font-display text-3xl uppercase tracking-tight text-brand-white md:text-5xl">
          Perguntas frequentes
        </h2>

        <div className="flex flex-col divide-y divide-brand-gray/20">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-brand-white marker:content-none md:text-xl">
                {q}
                <span
                  aria-hidden
                  className="shrink-0 text-2xl text-brand-red transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-brand-white/70">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

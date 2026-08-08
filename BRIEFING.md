Briefing de copy e direção visual, Experiência Empreende

Fonte única para as duas versões da landing page (versao-a e versao-b). Não duplicar copy divergente entre as duas versões, só a implementação visual muda.

## 1. Evento

- Nome: Experiência Empreende, O Inimigo Invisível do Crescimento
- Organização: Empreende Zona Leste (badge de credibilidade, não é o nome do produto)
- Data: 22 de agosto de 2026, sábado
- Horário: das 9h30 às 12h30
- Local: Rua Serra de Bragança, 1814, Vila Formosa, Zona Leste de São Paulo
- Formato: presencial, pago (preço a definir pelo cliente, usar placeholder `[PREÇO]` bem visível e fácil de trocar)
- CTA: botão que abre link externo de inscrição, usar `href="#inscricao"` como placeholder, comentar no código `{/* TROCAR: link real de inscrição do cliente */}`
- Dois palestrantes na arte original (`public/evento-flyer.jpg`), sem nome confirmado ainda. Usar cargos genéricos como `[NOME PALESTRANTE 1]`, especialista em saúde mental corporativa e NR-1, e `[NOME PALESTRANTE 2 · WAGNER]`, hostcondutor do Empreende Zona Leste. Deixar comentário no código pedindo pro cliente confirmar nomes e bios.

## 2. Tema e ângulo de copy

O contexto vem de um roteiro de entrevista sobre a NR-1 (norma que exige gestão de riscos psicossociais nas empresas) e saúde mental corporativa. O ângulo central do evento é: existe um inimigo que trava o crescimento das empresas e ele é invisível porque não aparece no balancete, é a saúde mental negligenciada, a cultura tóxica, o passivo trabalhista da NR-1 mal aplicada. Empresário só vê o estrago quando já é tarde: turnover alto, processo trabalhista, queda de produtividade, times esgotados.

Tom de voz: direto, autoridade, sem jargão acadêmico, fala com dono de empresa, não com RH. Nunca usar "você" pra falar de dinheiro do jeito genérico de coach, ser específico e concreto.

## 3. Copy aprovada (usar literalmente, adaptando só o quanto o nível visual pedir pra caber em cada seção)

**Eyebrow do hero:** EMPREENDE ZONA LESTE APRESENTA

**H1:** O inimigo que mais trava o crescimento da sua empresa não aparece em nenhuma planilha.

**Subtítulo:** Saúde mental negligenciada, cultura tóxica e a NR-1 aplicada errado custam caro e ficam invisíveis até virar processo trabalhista ou time esgotado. Em uma manhã, você aprende a transformar isso em proteção jurídica e vantagem competitiva.

**Chips de data e local (hero):** 22/08/2026 · 9h30 às 12h30 · Rua Serra de Bragança, 1814

**CTA primário (repetir sempre com o mesmo texto):** Garantir minha vaga

**Seção problema, eyebrow:** O QUE NINGUÉM MOSTRA NO BALANCETE

**Seção problema, título:** Enquanto sua empresa cresce, esse inimigo cresce junto, e ele é invisível até o dia que explode.

**Seção problema, corpo:** Turnover alto, afastamento por ansiedade e burnout, queda de produtividade que ninguém sabe explicar, e agora um risco jurídico novo: a NR-1 exige gestão de riscos psicossociais, e empresa que trata isso como formalidade está exposta. Nenhum desses custos aparece separado no DRE, mas juntos eles travam o crescimento.

**Bullets de benefício, o que você leva do evento (usar 4, com ícone):**
1. Entenda o que a atualização da NR-1 exige de verdade, sem o medo e a desinformação que circulam por aí
2. Descubra o risco que o empresário normalmente não enxerga, e que custa caro quando vira processo
3. Saiba a diferença entre cumprir a norma no papel e proteger a empresa de verdade
4. Saia com o primeiro passo prático pra aplicar essa semana, sem depender de consultoria cara

**Seção "pra quem é" (substitui depoimentos fabricados, não inventar prova social falsa):**
Título: Esse evento é pra você que...
- Toca uma empresa com equipe e sente o peso do turnover no bolso
- Já ouviu falar da NR-1 mas ainda não sabe o que muda na prática
- Quer transformar saúde mental de obrigação legal em estratégia de crescimento
- Prefere agir antes do processo trabalhista do que remediar depois

**Seção agenda (3 blocos, horário aproximado, marcar como estimativa):**
1. 9h30, Abertura e diagnóstico, o inimigo invisível do crescimento
2. 10h15, NR-1 na prática, proteção jurídica real x teatro de compliance
3. 11h15, Saúde mental como estratégia, cultura, produtividade e faturamento

**FAQ (5 perguntas):**
1. O evento é presencial ou tem opção online? — Presencial, na Rua Serra de Bragança, 1814, Zona Leste de São Paulo.
2. Preciso ter uma equipe grande pra esse conteúdo fazer sentido? — Não, o conteúdo serve pra qualquer empresário que tem gente contratada, de times pequenos a estruturas maiores.
3. Vou sair sabendo aplicar a NR-1 na prática? — Sim, o evento entrega o passo a passo prático, não só teoria.
4. Tem certificado de participação? — [A CONFIRMAR: cliente decide se emite certificado]
5. Qual a política de reembolso se eu não puder ir? — [A CONFIRMAR: cliente decide a política]

**CTA final, título:** As vagas são limitadas pelo espaço físico do local.

**CTA final, corpo:** Garanta a sua antes que a turma feche.

## 4. Paleta de cores (extraída por amostragem de pixel da arte oficial, `public/evento-flyer.jpg`)

```
--red:        #C40000   /* vermelho principal, títulos e CTA */
--red-deep:   #8A0000   /* vermelho escuro, gradientes e hover */
--crimson:    #B21E2C   /* vermelho secundário, barra inferior e acentos */
--black:      #0B0B0C   /* fundo base */
--charcoal:   #242426   /* fundo de seção, gradiente com o preto */
--gray-500:   #6B6B6B   /* cinza médio, texturas e divisores */
--white:      #FFFFFF   /* texto de contraste alto */
```

Mood: holofotes de palco, plateia desfocada ao fundo, textura pontilhada sutil, tipografia bold condensada maiúscula pros títulos (peso forte tipo Anton ou Oswald ExtraBold via next/font/google), corpo de texto em sans neutra (Inter ou Manrope). Gradiente diagonal preto para cinza escuro é a base de todo hero e fundo de seção escura. Vermelho é cor de destaque e ação, nunca cor de fundo grande (queima os olhos em área grande).

## 5. Estrutura padrão (seguir nas duas versões, ordem fixa)

1. Hero, 1 viewport: eyebrow, H1, subtítulo, chips data/local, CTA primário, visual com a arte oficial ou efeito baseado nela
2. Problema e agitação
3. Bullets de benefício, o que você leva
4. Pra quem é o evento
5. Agenda, 3 blocos
6. Oferta: preço placeholder, o que está incluso, CTA
7. FAQ
8. CTA final repetido + endereço com referência de localização
9. Footer com nome do evento e ano

Um CTA por página, sempre o mesmo texto "Garantir minha vaga", nunca concorrente com outro botão.

## 6. Regra dura, escassez

NÃO inventar número de vagas restantes nem contagem regressiva falsa. A frase aprovada é genérica ("vagas limitadas pelo espaço físico"), sem número fabricado. Se quiser reforçar urgência, use a data do evento (22/08/2026), que é urgência real.

## 7. Diferenciação entre as duas versões

- **versao-a, nível 3 cinemático**: Lenis smooth scroll, GSAP ScrollTrigger com scrub e pin na seção de agenda ou problema (texto que acende conforme rola), 3D discreto no hero usando React Three Fiber (o componente `components/scene/hero-r3f.tsx` do template como ponto de partida, recolorido pra paleta vermelho e preto), parallax sutil de camadas. Sensação: filme institucional, sério, still com movimento.
- **versao-b, nível 4 WOW Awwwards**: tudo do nível 3 mais uma cena 3D no-code via Spline (usar `components/scene/spline-hero.tsx` como base, pode usar uma cena pública de holofote ou partículas se não houver cena própria do cliente) ou, se Spline não tiver cena adequada disponível, substituir por um hero mais ousado com spotlight que segue o cursor (`components/ui/spotlight.tsx`) e cards 3D tilt (`components/ui/3d-card.tsx`) na seção de palestrantes e bullets, mais marquee (`components/ui/marquee.tsx`) com frases de impacto do tema saúde mental corporativa. Sensação: premiado, ousado, mais denso em efeito, mas sem atropelar a leitura do CTA.

Ambas têm que funcionar coerentes paradas (sem depender do usuário rolar pra entender a oferta) e ambas têm que ter motion reduzido quando `prefers-reduced-motion` estiver ativo.

## 9. CORREÇÃO após primeira entrega, ler antes de mexer em qualquer coisa

O cliente viu as duas versões rodando e reprovou as duas pelo mesmo motivo: o hero das duas ficou sendo basicamente a cena 3D padrão do template (`hero-r3f.tsx` original) só recolorida de roxo pra vermelho, uma esfera ou icosaedro distorcido com bloom forte. Com bloom alto em cima de material emissivo vermelho, o resultado visual real é uma bola vermelha grande e chapada cobrindo o hero, sem leitura de profundidade nem de movimento perceptível a olho nu. Reação literal do cliente: "nada a ver essa bola do fundo como efeito, horrível isso" e "não gostei de nenhuma".

Isso NÃO é um pedido de ajuste fino de parâmetro. É rejeição do conceito. Não reduzir bloom e chamar de resolvido: trocar o conceito visual do hero.

**Direção nova, obrigatória para as duas versões, cada uma com seu grau de intensidade pelo nível dela:**

- Nada de mesh 3D sólida e distorcida como protagonista do hero (sem esfera, sem icosaedro preenchido, sem blob). Se usar geometria 3D, ela é discreta e secundária, nunca o elemento que domina a composição.
- A arte oficial do evento (`public/evento-flyer.jpg`) já mostra holofotes de palco de verdade. Usar ISSO como referência literal: feixes de luz vermelha cruzando o fundo escuro, vindo de cima, com leve varredura/rotação lenta (CSS conic-gradient ou GSAP, não precisa ser 3D pra parecer premium).
- Partículas discretas (poeira/brasa subindo lentamente) são bem-vindas como camada de profundidade, mas com bloom só nos pontos de luz (luminanceThreshold alto), nunca inundando a cena inteira.
- Título e subtítulo têm que continuar 100% legíveis e serem o elemento mais forte da composição, o efeito é pano de fundo, não competidor.
- Testar rodando `pnpm dev` ou `pnpm build && pnpm start` e OLHAR a página renderizada antes de considerar pronto, não só confiar no código. Se ao abrir no navegador a primeira reação for "isso parece uma forma genérica de gerador de landing page", refazer.
- Isso vale pra qualquer outro trecho da página que tenha reaproveitado componente de exemplo do template sem adaptação real de conceito (ex: `motion-grid`, `scroll-reveal` genéricos). Adaptar de verdade ao tema do evento, não só trocar cor.

## 8. Regras técnicas obrigatórias (repetidas do skill bilder-lp, não pular)

1. Componente 3D sempre `dynamic(import, { ssr: false })` com `Suspense` e `dpr={[1, 2]}`, nunca dpr 3
2. Pós-processamento (bloom etc) cortado em mobile via media query
3. ScrollTrigger sempre com scope ref e `useGSAP`
4. Imagem do hero com `priority` e `placeholder="blur"` quando for `next/image`
5. Fontes via `next/font`, nunca link externo no head
6. Mobile-first: validar em 375px antes do desktop, CTA visível sem scroll no mobile
7. `pnpm build` sem erro antes de considerar pronto

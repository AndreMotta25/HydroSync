# HydroSync — Landing Page

> Projeto de portfólio. Landing page fictícia de uma garrafa inteligente com sensores ultrassônicos e algoritmos preditivos de hidratação.

---

## Sobre

Landing page premium para a HydroSync, explorando a interseção entre tecnologia biomédica e design de alto nível. O projeto foi construído com foco em performance, acessibilidade, animações fluidas e SEO completo.

---

## Tech Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript (strict mode) |
| Estilização | Tailwind CSS v4 |
| Animações | Motion (Framer Motion) |
| Formulários | React Hook Form + Zod |
| Fontes | Oswald · Inter · JetBrains Mono (`next/font`) |

---

## Seções

| Seção | Componente | Descrição |
|---|---|---|
| **Hero** | `Hero.tsx` | Vídeo em background, título marca d'água, stats e scroll-down animado |
| **Problema** | `Problem.tsx` | 3 cards com parallax scroll, vídeo de fundo e entry animations com rotação |
| **Features** | `Features.tsx` | Slideshow com reveal circular (clip-path) e overlay progressivo |
| **Como Funciona** | `HowItWorks.tsx` | 4 etapas com parallax scroll, spring physics escalonado e hover lift |
| **Depoimentos** | `Testimonials.tsx` | Carrossel auto-play com grupos randomizados e transição fade+slide |
| **FAQ** | `Faq.tsx` | Accordion animado com CSS Grid (`grid-template-rows`) |
| **CTA** | `Cta.tsx` | Seção de conversão com botão de compra |
| **Footer** | `Footer.tsx` | Links, newsletter com validação Zod |

---

## Animações

### Scroll Parallax (Problem + HowItWorks)

Cada elemento rastreia seu progresso de scroll via `useScroll` com offset `["start 0%", "start -30%"]`. O progresso é convertido em opacidade e translação Y usando easing cúbico personalizado:

```
eased = 1 - (1 - clamped)³
```

Isso cria um fade-out suave onde os elementos "afundam" conforme saem da viewport.

### Entry Animations com Spring

Os cards entram com rotações iniciais diferentes (0°, 15°, -10°, 5°) e spring physics escalonados (delay de 0s, 0.15s, 0.3s, 0.45s). O `whileInView` com `viewport={{ once: true }}` garante que a animação acontece apenas uma vez.

### Hover Lift

Cards sobem 24px no hover via `whileHover={{ y: -24 }}` com tween transition de 0.6s. Os números decorativos de fundo ficam fora do wrapper animado para permanecerem estáticos.

### Reveal Circular (Features)

A troca de slides usa `clipPath: circle()` animado de 0% a 150%, criando uma expansão circular a partir do canto direito. A curva de easing `[0.22, 1, 0.36, 1]` dá um efeito de desaceleração suave.

### Carrossel Randomizado (Testimonials)

6 depoimentos são divididos em 3 grupos de 3, randomizados via Fisher-Yates shuffle. O estado inicial é determinístico para evitar hydration mismatch — a randomização acontece em `useEffect` após mount no cliente. Auto-play a cada 6s com `AnimatePresence` para transições crossfade.

### Accordion (FAQ)

Animação de abrir/fechar usa `grid-template-rows: 0fr → 1fr` em vez de `height: auto`, eliminando reflow e glitch visual durante o fechamento.

### Reduced Motion

Todas as animações são desabilitadas via `prefers-reduced-motion: reduce` no CSS, garantindo acessibilidade para usuários sensíveis a movimento.

---

## SEO

- Metadata estática no `layout.tsx` com template de título
- Metadata específica no `page.tsx` com title/description/twitter
- Open Graph image gerada dinamicamente via `next/og` (`ImageResponse`)
- Twitter Card (`summary_large_image`)
- `robots.ts` com sitemap reference
- `sitemap.ts` dinâmico
- JSON-LD estruturado: `Organization`, `Product`, `FAQPage`
- Canonical URL no metadata
- `<html lang="pt-BR">`

---

## Design System

Tokens de cor baseados em Material Design 3 definidos no `globals.css` via `@theme` do Tailwind v4:

- **Tipografia:** Oswald (headlines), Inter (corpo), JetBrains Mono (labels)
- **Cores:** primary (#0058bc), secondary (#45645e), terciary (#595c5e) com variantes container/fixed/dim
- **Espaçamento:** sistema de 8px com tokens para gutter, margins mobile/desktop e max-width
- **Componentes visuais:** glass-card (backdrop-blur), mesh-gradient, hero-glow

---

## Acessibilidade

- Skip link para conteúdo principal
- `aria-label` em botões de navegação e ícones
- `aria-expanded` no accordion
- Touch targets mínimos de 44px
- `maximumScale: 1` no viewport
- Respeito a `prefers-reduced-motion`

---

## Getting Started

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
```

---

## Estrutura de Pastas

```
src/
├── app/
│   ├── globals.css
│   ├── icon.tsx              # Favicon dinâmico
│   ├── layout.tsx            # Root layout + metadata
│   ├── opengraph-image.tsx   # OG image dinâmica
│   ├── page.tsx              # Home page + JSON-LD
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ui/button.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── Faq.tsx
│   ├── Cta.tsx
│   ├── Footer.tsx
│   └── JsonLd.tsx
├── hooks/
│   └── useScrollReveal.ts
├── lib/
│   ├── utils.ts
│   └── validations/
│       └── newsletter.ts
└── types/
```

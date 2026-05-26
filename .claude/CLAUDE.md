# AI Development Rules

This document outlines the technology stack, conventions, and specific library usage guidelines for this Next.js application. Adhering to these rules will help maintain consistency and ensure the AI assistant can effectively understand and modify the codebase.

---

## Tech Stack Overview

| Area           | Technology                                                               |
| -------------- | ------------------------------------------------------------------------ |
| **Framework**  | Next.js (App Router)                                                     |
| **Language**   | TypeScript (strict mode)                                                 |
| **Styling**    | Tailwind v4 CSS                                                          |
| **Forms**      | React Hook Form + Zod                                                    |
| **Validation** | Zod                                                                      |
| **Supabase**   | Supabase _(if used — handled entirely by `supabase-database-expert.md`)_ |
| **State**      | React Context API + `useState` / `useReducer`                            |

---

## Descoberta do Projeto — Faça Isso Antes de Qualquer Código

- Antes de escrever uma linha sequer, você deve entender profundamente o que está sendo construído. Não assuma nada. Não invente requisitos. Pergunte.
- Quando o usuário chegar com uma ideia — mesmo que pareça simples — demonstre interesse genuíno e faça perguntas inteligentes para montar o quebra-cabeça completo do projeto. Pense como um arquiteto de software curioso e cuidadoso, não como uma máquina de gerar código.

### Como conduzir a descoberta

- Leia o que o usuário descreveu e identifique os pontos cegos. Em seguida, pergunte de forma natural e conversacional — não como um formulário burocrático. Mostre que você está pensando junto.

- Abaixo estão as dimensões que você deve investigar. Não precisa fazer todas as perguntas sempre — adapte ao contexto do que já foi dito:

### Identidade e propósito

- Qual problema real esse projeto resolve? Para quem?
- Isso é um produto novo, uma melhoria de algo existente ou uma migração?
- Existe algum concorrente ou referência visual/funcional que o usuário admira?

### Usuários e acesso

- Quem vai usar? Clientes finais, equipe interna, ambos?
- Vai ter sistema de autenticação/login? Se sim: email+senha, magic link, OAuth (Google, GitHub…)?
- Existem diferentes perfis de usuário com permissões distintas? (admin, editor, viewer…)
- O acesso é público, privado ou híbrido?

### Funcionalidades e fluxos

- Quais são as 3 ações mais importantes que um usuário vai fazer no sistema?
- Vai ter dashboard com métricas ou visualizações de dados?
- Existe algum fluxo de aprovação, notificação ou automação?
- O sistema vai enviar emails, SMS ou push notifications?
- Vai ter upload de arquivos ou imagens?

### Dados e integrações

- Vai precisar de banco de dados? Quais entidades você já consegue imaginar? (ex: usuários, produtos, pedidos…)
- Vai integrar com algum serviço externo? (pagamentos, mapas, APIs de terceiros, ERPs…)
- Vai ter alguma lógica de tempo real? (chat, notificações ao vivo, colaboração simultânea…)

### Plataforma e alcance

- É só web? Precisa funcionar bem no celular? Precisa ser PWA (instalável)?
- Tem alguma exigência de SEO ou o app é privado/autenticado?
- Precisa suportar múltiplos idiomas ou internacionalização?
- Tem alguma estimativa de volume? (poucos usuários internos vs. milhares de clientes)

### Contexto e restrições

- Existe um prazo ou alguma entrega prioritária?
- Já tem alguma parte do projeto feita que precisa ser preservada?
- Tem alguma restrição de tecnologia, hospedagem ou custo?

### Postura esperada

- Seja curioso, não mecânico. Se o usuário disser "quero um e-commerce", não saia gerando código — pergunte se vai ter carrinho, múltiplos vendedores, cupons, qual gateway de pagamento, etc.
- Conecte as perguntas. Se o usuário menciona "área do cliente", naturalmente pergunte sobre login, histórico, notificações.
- Quando tiver informação suficiente, resuma o que entendeu e peça confirmação antes de partir para a arquitetura.
- Se o usuário quiser pular a descoberta, respeite — mas registre o que ficou em aberto e avise que poderá precisar voltar nesses pontos.

## ⚠️ Regra de Arquitetura — Não Pode Ser Ignorada

### Ordem de construção obrigatória

A aplicação deve ser construída nesta ordem, sem exceção:

1. Schema do banco de dados — tabelas, campos, relacionamentos e políticas de RLS
2. API Routes do Next.js — toda comunicação com serviços externos acontece aqui
3. Interface da aplicação — o frontend consome apenas as API Routes internas

Antes de escrever qualquer código, apresente o schema completo com tabelas, campos, relacionamentos e políticas de RLS, e aguarde aprovação explícita para seguir para a próxima etapa.

### Regra de comunicação externa — inegociável

Toda e qualquer comunicação com serviços externos — incluindo o Supabase, mas não limitado a ele — deve passar OBRIGATORIAMENTE pelas API Routes do Next.js.

Isso significa:

- PROIBIDO: usar o Supabase Client diretamente em componentes React, hooks, context, páginas ou qualquer arquivo do lado do cliente
- PROIBIDO: fazer fetch() diretamente para URLs externas a partir do browser
- OBRIGATÓRIO: todo acesso ao Supabase acontece exclusivamente em arquivos dentro de /app/api/, usando a service_role_key no servidor
- OBRIGATÓRIO: o frontend só faz chamadas para rotas internas da própria aplicação (ex: /api/units, /api/lists)

Exemplo do que é correto:
[Cliente] → fetch('/api/units') → [API Route] → supabaseAdmin.from('units').select()

Exemplo do que é proibido:
[Cliente] → supabase.from('units').select() ← NUNCA

Essa regra se aplica a qualquer serviço externo que venha a ser adicionado no futuro. O cliente nunca fala diretamente com nada fora da aplicação.

## General Rules

- **Never create a file just because it appears in an example below.** Examples illustrate patterns — only create files when the project actually needs them.
- Sempre use as configurações do Tailwind V4.
- Você não deve trabalhar com banco de dados,migrations, rls ou algo do tipo, sempre chame o responsavel desse setor.

### Fluxo obrigatório — sem exceções

Antes de criar qualquer arquivo, escrever código ou executar comandos:

1. Execute `find C:\Users\labor\.claude\skills -name "SKILL.md"` para listar as skills disponíveis
2. Leia o conteúdo de cada SKILL.md relevante com `cat`
3. Só então comece a produzir

Se não houver skills relevantes, prossiga normalmente.

**Nunca comece a produzir sem antes executar o passo 1.**
Não há exceções para essa regra, mesmo que você acredite conhecer a tarefa.

### Estilo

- Leia o DESIGN.md para obter os estilos corretos para a criação do projeto.

## First Principles

- **Single Responsibility Principle (SRP).** Each function, module, and file should have one reason to change — one clear responsibility. When a file or function grows to handle multiple concerns, split it into smaller, focused units.

- **Open/Closed Principle (OCP).** Software entities should be open for extension but closed for modification. Add new behavior by extending existing abstractions rather than changing proven code.

- **Liskov Substitution Principle (LSP).** Subtypes must be substitutable for their base types without altering the correctness of the program. If a subclass overrides behavior in a way that breaks callers, the hierarchy is wrong.

- **Interface Segregation Principle (ISP).** No client should be forced to depend on methods it does not use. Prefer many small, focused interfaces over one large general-purpose one.

- **Dependency Inversion Principle (DIP).** High-level modules should not depend on low-level modules — both should depend on abstractions. Inject dependencies rather than hardcoding them, so implementations can vary without touching business logic.

## Folder Structure

Only create the folders the project actually needs. The structure below is the maximum possible — not all of it is required.

```
src/
├── app/                     # App Router — routes, layouts, pages, actions
├── components/
│   ├── ui/                  # Reusable visual components
├── lib/
│   ├── validations/         # Zod schemas
│   └── utils.ts             # Utility functions (cn, slugify, etc.)
├── hooks/                   # Custom React hooks (only if reused in 2+ places)
└── types/                   # Global TypeScript types
```

---

## Environment Variables

Always create `.env.local` at the project root and `.env.example` for version control. Never commit `.env.local`.

```env
# .env.local
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=MyApp
```

```env
# .env.example — no real values, safe to commit
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_APP_NAME=
```

---

## Library Usage Guidelines

### 1. Styling

- **Primary choice**: Exclusively use Tailwind CSS utility classes for all styling.
- **Do not** use `style={{}}` inline props except for truly dynamic values (e.g., `style={{ width: \`${progress}%\` }}`).
- **Do not** use CSS-in-JS libraries (Styled Components, Emotion, etc.).
- **Global styles**: Reserve `src/app/globals.css` for Tailwind directives and CSS variable definitions only.
- Always install `clsx` and `tailwind-merge` and create `src/lib/utils.ts` with the `cn()` helper:

```typescript
// src/lib/utils.ts — create this file in every project
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 2. State Management

- **Local state**: Use `useState` and `useReducer` for component-level state.
- **Shared state**: For state shared between multiple components, use React Context API.
- **Do not** introduce external state management libraries (Zustand, Jotai, Redux, etc.) without explicit discussion.

### 3. Routing & Data Fetching

- Use the Next.js App Router (file-system routing in `src/app/`).
- **Server-side**: Use Server Actions (in `app/**/actions.ts`) or Route Handlers (`src/app/api/`) for server-side logic.
- **Client-side**: Use the native `fetch` API.
- Fetch data directly in async Server Components — never with `useEffect`.

_Example — do not create this action. Use as a reference pattern for Server Actions with Zod:_

```typescript
// Pattern: src/app/[route]/actions.ts
"use server";

import { someSchema } from "@/lib/validations/some";
import { revalidatePath } from "next/cache";

export async function createSomethingAction(formData: FormData) {
  const parsed = someSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.flatten().fieldErrors };

  try {
    // perform the operation directly here (e.g. database call via repository)
    revalidatePath("/some-path");
    return { data: result };
  } catch (err) {
    return { error: (err as Error).message };
  }
}
```

### 4. Mobile Optimization

Apply these rules to every interactive or input component:

- Interactive elements (buttons, links, clickable icons): `min-h-[44px] min-w-[44px]`.
- Inputs: always `text-base` (16px) — prevents auto-zoom on iOS.
- Minimum horizontal padding on pages: `px-4`.
- Images: always use `next/image` with a responsive `sizes` prop.

_Example — adapt `sizes` to the actual layout:_

```typescript
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Image description"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
  priority // only for above-the-fold images
/>
```

### 5. TypeScript

- Write all code in TypeScript with `strict: true` in `tsconfig.json`.
- Avoid `any`. Use `unknown` + type narrowing when the type is uncertain.
- Use `interface` for props and contracts; `type` for unions and intersections.

### 6. Utility Functions

- Place general-purpose helper functions in `src/lib/utils.ts`.
- Ensure functions are well-typed and serve a clear, reusable purpose.

### 7. Custom Hooks

- Place custom React hooks in `src/hooks/`.
- Only create a custom hook if the logic is reused across 2 or more components.

---

## Separation of Concerns

| Layer             | Where               | Responsibility                                            |
| ----------------- | ------------------- | --------------------------------------------------------- |
| **Pages**         | `app/**/page.tsx`   | Metadata, fetch data in async Server Components, render   |
| **Actions**       | `app/**/actions.ts` | Server-side mutations — validate with Zod, execute logic  |
| **Repositories**  | `repositories/`     | Single point of database access — see `SUPABASE_AGENT.md` |
| **Components UI** | `components/ui/`    | Reusable visual elements, no business logic               |
| **Hooks**         | `hooks/`            | Reusable state and side-effects (2+ components)           |
| **Lib**           | `lib/`              | External clients, Zod schemas, utilities                  |
| **Types**         | `types/`            | Global types and interfaces                               |

---

## Pre-delivery Checklist

Verify all applicable items before considering a task complete:

- [ ] - O banco de dados foi modelado (se houver desejo do usuário por um banco de dados)
- [ ] - Se usado o supabase: tudo foi feito corretamente, o sub-agent supabase-database-expert foi acionado
- [ ] `.env.local` created and `.env.example` committed
- [ ] `metadata` or `generateMetadata` exported from every `page.tsx`
- [ ] `viewport` with `maximumScale: 1` in root layout
- [ ] Interactive elements with touch targets ≥ 44px
- [ ] Inputs with `text-base` (16px) to prevent iOS auto-zoom
- [ ] Zod validation on the server in every Server Action
- [ ] `next/image` with responsive `sizes` for all images
- [ ] No `console.log` or sensitive data exposed
- [ ] No `any` in TypeScript

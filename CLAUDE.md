# CLAUDE.md - TextUp

## Missão
Criar o TextUp: um produto que melhora qualquer texto usando IA. Foco em UX de produto.

## Filosofia
**Isso é um PRODUTO, não uma ferramenta técnica.**
- Landing page que vende
- Onboarding antes de pedir API key
- Interface limpa e intuitiva
- Feedback instantâneo

## Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **API:** Groq (compatível com OpenAI, tier grátis)
- **Deploy:** Vercel
- **Linguagem:** TypeScript

## Fluxo de Telas

### Tela 1: Landing Page (/)

```
┌─────────────────────────────────────────────────────┐
│  TextUp ✍️                                          │
├─────────────────────────────────────────────────────┤
│                                                     │
│     Melhore qualquer texto                         │
│        em segundos ✨                               │
│                                                     │
│  Emails, posts, mensagens, trabalhos.              │
│  Deixe a IA polir suas palavras.                   │
│                                                     │
│         [ ✍️ Começar agora ]                        │
│                                                     │
├─────────────────────────────────────────────────────┤
│  ANTES E DEPOIS (exemplo visual)                    │
│                                                     │
│  ┌─────────────────┐    ┌─────────────────┐        │
│  │ ❌ Antes        │ →  │ ✅ Depois       │        │
│  │                 │    │                 │        │
│  │ "oi, queria     │    │ "Olá! Gostaria  │        │
│  │ saber se da     │    │ de saber se     │        │
│  │ pra fazer uma   │    │ seria possível  │        │
│  │ reuniao"        │    │ agendarmos uma  │        │
│  │                 │    │ reunião."       │        │
│  └─────────────────┘    └─────────────────┘        │
│                                                     │
├─────────────────────────────────────────────────────┤
│  MODOS DISPONÍVEIS                                  │
│                                                     │
│  💼 Formal    😊 Casual    📝 Curto    ✓ Corrigir  │
│  Mais         Mais         Mais        Só          │
│  profissional descontraído objetivo    erros       │
│                                                     │
├─────────────────────────────────────────────────────┤
│  100% Grátis • BYOK • Seus dados ficam com você    │
│  Feito com 💜 por Clara                            │
└─────────────────────────────────────────────────────┘
```

### Tela 2: Onboarding (/start)

```
┌─────────────────────────────────────────────────────┐
│  ← Voltar                              Passo 1 de 2 │
├─────────────────────────────────────────────────────┤
│                                                     │
│     Configure sua API Key 🔑                       │
│                                                     │
│  O TextUp usa IA para melhorar seus textos.        │
│  Você precisa de uma chave gratuita da Groq.       │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │  📝 Como conseguir (1 minuto):                │ │
│  │                                               │ │
│  │  1. Acesse console.groq.com                   │ │
│  │  2. Crie uma conta gratuita                   │ │
│  │  3. Vá em "API Keys" → criar nova            │ │
│  │  4. Copie e cole aqui                        │ │
│  │                                               │ │
│  │  [ Abrir Groq Console ↗ ]                    │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │ gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx          │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  🔒 Sua chave fica apenas no seu navegador.        │
│                                                     │
│              [ Continuar → ]                        │
└─────────────────────────────────────────────────────┘
```

### Tela 3: Editor (/edit)

```
┌─────────────────────────────────────────────────────┐
│  TextUp ✍️                            [⚙️ Config]   │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Cole seu texto aqui:                              │
│  ┌───────────────────────────────────────────────┐ │
│  │                                               │ │
│  │  oi, queria saber se da pra fazer uma        │ │
│  │  reuniao semana que vem pra gente discutir   │ │
│  │  o projeto. me avisa qdo puder               │ │
│  │                                               │ │
│  │                                               │ │
│  │                                               │ │
│  │                                          📋  │ │
│  └───────────────────────────────────────────────┘ │
│                                   123 caracteres   │
│                                                     │
│  Como você quer o texto?                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐│
│  │💼 Formal │ │😊 Casual │ │📝 Curto  │ │✓ Corrig││
│  └──────────┘ └──────────┘ └──────────┘ └────────┘│
│                                                     │
│            [ ✨ Melhorar texto ]                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Tela 4: Resultado (/edit - mesmo URL, estado diferente)

```
┌─────────────────────────────────────────────────────┐
│  TextUp ✍️                                          │
├─────────────────────────────────────────────────────┤
│                                                     │
│     Texto melhorado! 🎉                            │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │                                               │ │
│  │  Olá! Gostaria de saber se seria possível    │ │
│  │  agendarmos uma reunião na próxima semana    │ │
│  │  para discutirmos o projeto. Por favor,      │ │
│  │  me avise quando puder.                      │ │
│  │                                               │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│     [ 📋 Copiar ]    [ 🔄 Tentar outro modo ]      │
│                                                     │
│  ──────────────────────────────────────────────── │
│                                                     │
│     [ ← Novo texto ]                               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Design

### Visual
- Dark mode (bg-gray-950)
- Gradientes purple/pink (consistente com Clara)
- Glassmorphism sutil
- Animações suaves

### Cores
```css
--purple-500: #a855f7
--pink-500: #ec4899
--gray-950: #030712
```

## Estrutura de Arquivos

```
textup/
├── app/
│   ├── layout.tsx
│   ├── page.tsx             # Landing
│   ├── globals.css
│   ├── start/
│   │   └── page.tsx         # Onboarding
│   ├── edit/
│   │   └── page.tsx         # Editor + Result
│   └── api/
│       └── improve/
│           └── route.ts     # API route
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Textarea.tsx
│   │   ├── Card.tsx
│   │   └── Toast.tsx
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── BeforeAfter.tsx
│   │   └── Modes.tsx
│   ├── onboarding/
│   │   └── ApiKeySetup.tsx
│   └── editor/
│       ├── TextInput.tsx
│       ├── ModeSelector.tsx
│       └── TextResult.tsx
├── lib/
│   ├── groq.ts
│   ├── storage.ts
│   └── prompts.ts
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## API Route

### POST /api/improve

**Request:**
```json
{
  "apiKey": "gsk_xxx",
  "text": "oi, queria saber se da pra fazer uma reuniao",
  "mode": "formal"
}
```

**Response:**
```json
{
  "improved": "Olá! Gostaria de saber se seria possível agendarmos uma reunião."
}
```

### Modos e Prompts (lib/prompts.ts)

```typescript
const MODE_PROMPTS = {
  formal: `Reescreva o texto de forma mais formal e profissional.
- Use linguagem educada e cortês
- Corrija erros de gramática e ortografia
- Mantenha o sentido original
- Não adicione informações novas`,

  casual: `Reescreva o texto de forma mais casual e descontraída.
- Use linguagem amigável e natural
- Pode usar contrações e expressões coloquiais
- Corrija erros óbvios
- Mantenha o tom leve`,

  short: `Reescreva o texto de forma mais curta e direta.
- Remova redundâncias
- Vá direto ao ponto
- Mantenha as informações essenciais
- Corrija erros`,

  fix: `Corrija apenas os erros do texto.
- Corrija gramática e ortografia
- Ajuste pontuação
- NÃO mude o estilo ou tom
- Mantenha o texto o mais próximo possível do original`
}
```

## Validação

```typescript
// API Key Groq
function validateApiKey(key: string): boolean {
  return key.startsWith('gsk_') && key.length > 20
}

// Texto
function validateText(text: string): { valid: boolean; error?: string } {
  if (!text.trim()) return { valid: false, error: 'Digite algum texto' }
  if (text.length > 5000) return { valid: false, error: 'Máximo 5000 caracteres' }
  return { valid: true }
}
```

## Tratamento de Erros

- **401:** "API key inválida. Verifique e tente novamente."
- **429:** "Muitas requisições. Aguarde um momento."
- **500:** "Algo deu errado. Tente novamente."
- **Texto vazio:** "Digite algum texto para melhorar."

## SEO

```typescript
export const metadata = {
  title: 'TextUp - Melhore qualquer texto em segundos',
  description: 'Melhore emails, posts e mensagens com IA. Formal, casual, curto ou só corrigir. 100% grátis.',
  openGraph: {
    title: 'TextUp - Melhore qualquer texto em segundos',
    description: 'Deixe a IA polir suas palavras.',
  },
}
```

## Git & Deploy

- Repo: `AutonomousClara/textup`
- Commits em português
- Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
- Domínio: textup.autonomousclara.com

## Definition of Done

- [ ] Landing page vende o produto
- [ ] Exemplo antes/depois na landing
- [ ] Onboarding explica API key
- [ ] Editor funciona com os 4 modos
- [ ] Copiar funciona
- [ ] Funciona no mobile
- [ ] Erros tratados
- [ ] Build passa sem erros

## Dependências (não esquecer!)

```json
{
  "dependencies": {
    "next": "14.2.21",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5",
    "eslint": "^8",
    "eslint-config-next": "14.2.21"
  }
}
```

**IMPORTANTE:** Incluir `autoprefixer` nas devDependencies!

---

Boa sorte, Ralph! ✨

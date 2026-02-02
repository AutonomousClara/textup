export const MODE_PROMPTS = {
  formal: `Reescreva o texto de forma mais formal e profissional.
- Use linguagem educada e cortês
- Corrija erros de gramática e ortografia
- Mantenha o sentido original
- Não adicione informações novas
- Responda APENAS com o texto melhorado, sem explicações`,

  casual: `Reescreva o texto de forma mais casual e descontraída.
- Use linguagem amigável e natural
- Pode usar contrações e expressões coloquiais
- Corrija erros óbvios
- Mantenha o tom leve
- Responda APENAS com o texto melhorado, sem explicações`,

  short: `Reescreva o texto de forma mais curta e direta.
- Remova redundâncias
- Vá direto ao ponto
- Mantenha as informações essenciais
- Corrija erros
- Responda APENAS com o texto melhorado, sem explicações`,

  fix: `Corrija apenas os erros do texto.
- Corrija gramática e ortografia
- Ajuste pontuação
- NÃO mude o estilo ou tom
- Mantenha o texto o mais próximo possível do original
- Responda APENAS com o texto corrigido, sem explicações`
} as const

export type Mode = keyof typeof MODE_PROMPTS

import { MODE_PROMPTS, Mode } from './prompts'

interface GroqMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

interface GroqResponse {
  choices: Array<{
    message: {
      content: string
    }
  }>
}

interface ImproveTextParams {
  apiKey: string
  text: string
  mode: Mode
}

interface ImproveTextResult {
  improved: string
}

interface ImproveTextError {
  error: string
  code?: string
}

export async function improveText({ apiKey, text, mode }: ImproveTextParams): Promise<ImproveTextResult | ImproveTextError> {
  const systemPrompt = MODE_PROMPTS[mode]
  
  const messages: GroqMessage[] = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: text }
  ]
  
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.3,
        max_tokens: 2048,
      }),
    })
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      
      if (response.status === 401) {
        return { error: 'API key inválida. Verifique e tente novamente.', code: 'INVALID_API_KEY' }
      }
      
      if (response.status === 429) {
        return { error: 'Muitas requisições. Aguarde um momento.', code: 'RATE_LIMIT' }
      }
      
      return { error: 'Algo deu errado. Tente novamente.', code: 'UNKNOWN_ERROR' }
    }
    
    const data: GroqResponse = await response.json()
    const improved = data.choices[0]?.message?.content?.trim()
    
    if (!improved) {
      return { error: 'Não foi possível melhorar o texto.', code: 'EMPTY_RESPONSE' }
    }
    
    return { improved }
    
  } catch (error) {
    console.error('Groq API error:', error)
    return { error: 'Algo deu errado. Tente novamente.', code: 'NETWORK_ERROR' }
  }
}

export function isError(result: ImproveTextResult | ImproveTextError): result is ImproveTextError {
  return 'error' in result
}

import { NextRequest, NextResponse } from 'next/server'
import { improveText, isError } from '@/lib/groq'
import { Mode } from '@/lib/prompts'

interface RequestBody {
  apiKey: string
  text: string
  mode: Mode
}

function validateText(text: string): { valid: boolean; error?: string } {
  if (!text?.trim()) {
    return { valid: false, error: 'Digite algum texto para melhorar.' }
  }
  if (text.length > 5000) {
    return { valid: false, error: 'Máximo 5000 caracteres.' }
  }
  return { valid: true }
}

function validateApiKey(key: string): boolean {
  return key?.startsWith('gsk_') && key.length > 20
}

const validModes: Mode[] = ['formal', 'casual', 'short', 'fix']

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json()
    const { apiKey, text, mode } = body
    
    // Validate API key (só exige se servidor não tem key configurada)
    const hasServerKey = !!process.env.GROQ_API_KEY
    if (!hasServerKey && !validateApiKey(apiKey)) {
      return NextResponse.json(
        { error: 'API key inválida.' },
        { status: 400 }
      )
    }
    
    // Validate text
    const textValidation = validateText(text)
    if (!textValidation.valid) {
      return NextResponse.json(
        { error: textValidation.error },
        { status: 400 }
      )
    }
    
    // Validate mode
    if (!validModes.includes(mode)) {
      return NextResponse.json(
        { error: 'Modo inválido.' },
        { status: 400 }
      )
    }
    
    // Call Groq API
    const result = await improveText({ apiKey, text, mode })
    
    if (isError(result)) {
      const status = result.code === 'INVALID_API_KEY' ? 401 
                   : result.code === 'RATE_LIMIT' ? 429 
                   : 500
      return NextResponse.json({ error: result.error }, { status })
    }
    
    return NextResponse.json({ improved: result.improved })
    
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Algo deu errado. Tente novamente.' },
      { status: 500 }
    )
  }
}

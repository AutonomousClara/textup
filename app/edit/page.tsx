'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import TextInput from '@/components/editor/TextInput'
import ModeSelector, { Mode } from '@/components/editor/ModeSelector'
import TextResult from '@/components/editor/TextResult'
import { getApiKey, clearApiKey } from '@/lib/storage'

type ViewState = 'editor' | 'result'

export default function EditPage() {
  const router = useRouter()
  const [viewState, setViewState] = useState<ViewState>('editor')
  const [text, setText] = useState('')
  const [mode, setMode] = useState<Mode>('formal')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [apiKey, setApiKey] = useState<string | null>(null)
  
  // Check for API key on mount
  useEffect(() => {
    const key = getApiKey()
    if (!key) {
      router.push('/start')
    } else {
      setApiKey(key)
    }
  }, [router])
  
  const handleSubmit = async () => {
    // Validate text
    if (!text.trim()) {
      setError('Digite algum texto para melhorar.')
      return
    }
    
    if (text.length > 5000) {
      setError('Máximo 5000 caracteres.')
      return
    }
    
    setError('')
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/improve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey,
          text,
          mode,
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        setError(data.error || 'Algo deu errado. Tente novamente.')
        return
      }
      
      setResult(data.improved)
      setViewState('result')
      
    } catch (err) {
      setError('Erro de conexão. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleReset = () => {
    setText('')
    setResult('')
    setMode('formal')
    setViewState('editor')
    setError('')
  }
  
  const handleChangeMode = () => {
    setViewState('editor')
  }
  
  const handleConfigClick = () => {
    clearApiKey()
    router.push('/start')
  }
  
  // Don't render until we check for API key
  if (apiKey === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 border-b border-gray-800/50">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            TextUp <span className="text-2xl">✍️</span>
          </Link>
          <button
            onClick={handleConfigClick}
            className="text-gray-500 hover:text-gray-300 transition-colors"
            title="Alterar API Key"
          >
            ⚙️ Config
          </button>
        </div>
      </header>
      
      {/* Content */}
      <main className="flex-1 p-6">
        <div className="max-w-2xl mx-auto">
          {viewState === 'editor' ? (
            <div className="space-y-6">
              <TextInput
                value={text}
                onChange={(value) => {
                  setText(value)
                  setError('')
                }}
                error={error}
              />
              
              <ModeSelector value={mode} onChange={setMode} />
              
              <Button
                onClick={handleSubmit}
                isLoading={isLoading}
                size="lg"
                className="w-full"
              >
                ✨ Melhorar texto
              </Button>
            </div>
          ) : (
            <TextResult
              text={result}
              onReset={handleReset}
              onChangeMode={handleChangeMode}
            />
          )}
        </div>
      </main>
    </div>
  )
}

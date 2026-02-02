'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { saveApiKey, validateApiKey } from '@/lib/storage'

export default function ApiKeySetup() {
  const router = useRouter()
  const [apiKey, setApiKey] = useState('')
  const [error, setError] = useState('')
  const [showKey, setShowKey] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateApiKey(apiKey)) {
      setError('API key inválida. Deve começar com "gsk_"')
      return
    }
    
    saveApiKey(apiKey)
    router.push('/edit')
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card variant="gradient" className="space-y-4">
        <h3 className="font-medium text-white flex items-center gap-2">
          📝 Como conseguir (1 minuto):
        </h3>
        
        <ol className="space-y-2 text-gray-300 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-purple-400">1.</span>
            Acesse{' '}
            <a 
              href="https://console.groq.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              console.groq.com
            </a>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">2.</span>
            Crie uma conta gratuita
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">3.</span>
            Vá em &quot;API Keys&quot; → criar nova
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">4.</span>
            Copie e cole aqui
          </li>
        </ol>
        
        <a 
          href="https://console.groq.com/keys" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button type="button" variant="secondary" size="sm" className="mt-2">
            Abrir Groq Console ↗
          </Button>
        </a>
      </Card>
      
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">
          Sua API Key:
        </label>
        <div className="relative">
          <input
            type={showKey ? 'text' : 'password'}
            value={apiKey}
            onChange={(e) => {
              setApiKey(e.target.value)
              setError('')
            }}
            placeholder="gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            className={`
              w-full px-4 py-3 rounded-xl
              glass text-white placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-500/50
              ${error ? 'ring-2 ring-red-500' : ''}
            `}
          />
          <button
            type="button"
            onClick={() => setShowKey(!showKey)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
          >
            {showKey ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
      
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>🔒</span>
        <span>Sua chave fica apenas no seu navegador.</span>
      </div>
      
      <Button type="submit" size="lg" className="w-full">
        Continuar →
      </Button>
    </form>
  )
}

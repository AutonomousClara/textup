'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Mode } from './ModeSelector'

interface TextResultProps {
  text: string
  onReset: () => void
  onChangeMode: () => void
}

export default function TextResult({ text, onReset, onChangeMode }: TextResultProps) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          Texto melhorado! <span className="text-2xl">🎉</span>
        </h2>
      </div>
      
      <Card variant="gradient" className="min-h-[200px]">
        <p className="text-white whitespace-pre-wrap leading-relaxed">
          {text}
        </p>
      </Card>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={handleCopy} variant="primary">
          {copied ? '✓ Copiado!' : '📋 Copiar'}
        </Button>
        <Button onClick={onChangeMode} variant="secondary">
          🔄 Tentar outro modo
        </Button>
      </div>
      
      <div className="border-t border-gray-800 pt-6">
        <Button onClick={onReset} variant="ghost" className="w-full">
          ← Novo texto
        </Button>
      </div>
    </div>
  )
}

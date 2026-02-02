'use client'

import Textarea from '@/components/ui/Textarea'

interface TextInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export default function TextInput({ value, onChange, error }: TextInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm text-gray-400">
        Cole seu texto aqui:
      </label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Digite ou cole o texto que você quer melhorar..."
        showCount
        error={error}
      />
    </div>
  )
}

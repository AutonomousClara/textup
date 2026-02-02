'use client'

export type Mode = 'formal' | 'casual' | 'short' | 'fix'

interface ModeSelectorProps {
  value: Mode
  onChange: (mode: Mode) => void
}

const modes: Array<{ id: Mode; icon: string; label: string }> = [
  { id: 'formal', icon: '💼', label: 'Formal' },
  { id: 'casual', icon: '😊', label: 'Casual' },
  { id: 'short', icon: '📝', label: 'Curto' },
  { id: 'fix', icon: '✓', label: 'Corrigir' },
]

export default function ModeSelector({ value, onChange }: ModeSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm text-gray-400">
        Como você quer o texto?
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            onClick={() => onChange(mode.id)}
            className={`
              px-4 py-3 rounded-xl text-center transition-all
              ${value === mode.id
                ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-500'
                : 'glass hover:bg-white/10 border-2 border-transparent'
              }
            `}
          >
            <span className="text-xl block mb-1">{mode.icon}</span>
            <span className="text-sm font-medium">{mode.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

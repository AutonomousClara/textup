'use client'

import Card from '@/components/ui/Card'

const modes = [
  {
    icon: '💼',
    title: 'Formal',
    description: 'Mais profissional'
  },
  {
    icon: '😊',
    title: 'Casual',
    description: 'Mais descontraído'
  },
  {
    icon: '📝',
    title: 'Curto',
    description: 'Mais objetivo'
  },
  {
    icon: '✓',
    title: 'Corrigir',
    description: 'Só erros'
  }
]

export default function Modes() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-300">
        Modos disponíveis
      </h2>
      
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {modes.map((mode) => (
          <Card key={mode.title} variant="glass" className="text-center p-4 hover:bg-white/10 cursor-default">
            <span className="text-3xl mb-2 block">{mode.icon}</span>
            <h3 className="font-semibold text-white">{mode.title}</h3>
            <p className="text-sm text-gray-400">{mode.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

'use client'

import Card from '@/components/ui/Card'

export default function BeforeAfter() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-300">
        Veja a diferença
      </h2>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">
        {/* Before */}
        <Card variant="default" className="relative">
          <div className="absolute -top-3 left-4 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm">
            ❌ Antes
          </div>
          <p className="text-gray-300 mt-4 leading-relaxed">
            &quot;oi, queria saber se da pra fazer uma reuniao semana que vem pra gente discutir o projeto. me avisa qdo puder&quot;
          </p>
        </Card>
        
        {/* Arrow (mobile: down, desktop: right) */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
          <span className="text-3xl text-purple-500">→</span>
        </div>
        
        {/* After */}
        <Card variant="gradient" className="relative">
          <div className="absolute -top-3 left-4 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">
            ✅ Depois
          </div>
          <p className="text-white mt-4 leading-relaxed">
            &quot;Olá! Gostaria de saber se seria possível agendarmos uma reunião na próxima semana para discutirmos o projeto. Por favor, me avise quando puder.&quot;
          </p>
        </Card>
      </div>
      
      {/* Mobile arrow */}
      <div className="flex md:hidden justify-center -my-2">
        <span className="text-2xl text-purple-500">↓</span>
      </div>
    </section>
  )
}

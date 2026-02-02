import Link from 'next/link'
import ApiKeySetup from '@/components/onboarding/ApiKeySetup'

export const metadata = {
  title: 'Configurar API Key - TextUp',
}

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Voltar
          </Link>
          <span className="text-sm text-gray-500">Passo 1 de 2</span>
        </div>
      </header>
      
      {/* Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">
              Configure sua API Key <span className="text-2xl">🔑</span>
            </h1>
            <p className="text-gray-400">
              O TextUp usa IA para melhorar seus textos.
              <br />
              Você precisa de uma chave gratuita da Groq.
            </p>
          </div>
          
          <ApiKeySetup />
        </div>
      </main>
    </div>
  )
}

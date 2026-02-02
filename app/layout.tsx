import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TextUp - Melhore qualquer texto em segundos',
  description: 'Melhore emails, posts e mensagens com IA. Formal, casual, curto ou só corrigir. 100% grátis.',
  openGraph: {
    title: 'TextUp - Melhore qualquer texto em segundos',
    description: 'Deixe a IA polir suas palavras.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-gray-950 text-white antialiased`}>
        <main className="relative min-h-screen">
          {/* Background gradient effect */}
          <div className="fixed inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="text-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Melhore qualquer texto
        <br />
        <span className="gradient-text">em segundos</span> ✨
      </h1>
      
      <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto">
        Emails, posts, mensagens, trabalhos.
        <br />
        Deixe a IA polir suas palavras.
      </p>
      
      <Link href="/start">
        <Button size="lg">
          ✍️ Começar agora
        </Button>
      </Link>
    </section>
  )
}

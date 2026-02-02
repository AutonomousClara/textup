'use client'

export default function Footer() {
  return (
    <footer className="py-12 px-4 text-center border-t border-gray-800/50">
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-4">
        <span>100% Grátis</span>
        <span className="text-gray-700">•</span>
        <span>BYOK (Bring Your Own Key)</span>
        <span className="text-gray-700">•</span>
        <span>Seus dados ficam com você</span>
      </div>
      
      <p className="text-sm text-gray-600">
        Feito com 💜 por{' '}
        <a 
          href="https://github.com/AutonomousClara" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          Clara
        </a>
      </p>
    </footer>
  )
}

import Hero from '@/components/landing/Hero'
import BeforeAfter from '@/components/landing/BeforeAfter'
import Modes from '@/components/landing/Modes'
import Footer from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">
            TextUp <span className="text-2xl">✍️</span>
          </h1>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1">
        <Hero />
        <BeforeAfter />
        <Modes />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://textup.autonomousclara.com'),
  title: {
    default: 'TextUp - Melhore qualquer texto em segundos',
    template: '%s | TextUp',
  },
  description: 'Melhore emails, posts e mensagens com IA. 4 modos: Formal, Casual, Curto ou Corrigir. 100% grátis, use sua própria API key.',
  keywords: ['melhorar texto', 'corretor', 'reescrever', 'formal', 'casual', 'IA', 'grátis', 'editor de texto', 'correção'],
  authors: [{ name: 'Clara', url: 'https://autonomousclara.com' }],
  creator: 'Clara',
  publisher: 'AutonomousClara',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://textup.autonomousclara.com',
    siteName: 'TextUp',
    title: 'TextUp - Melhore qualquer texto em segundos',
    description: 'Melhore emails, posts e mensagens com IA. 4 modos de edição.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TextUp - Melhore seu texto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TextUp - Melhore qualquer texto em segundos',
    description: 'Melhore emails, posts e mensagens com IA. 100% grátis.',
    images: ['/og-image.png'],
    creator: '@autonomousclara',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://textup.autonomousclara.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
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
  );
}

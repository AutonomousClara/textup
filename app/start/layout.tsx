import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Configurar API Key',
  description: 'Configure sua API key do Groq para começar a melhorar seus textos. É grátis e leva menos de 1 minuto.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

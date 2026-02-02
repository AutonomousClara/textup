import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editar Texto',
  description: 'Melhore seu texto com IA. Escolha entre Formal, Casual, Curto ou apenas Corrigir. Resultados em segundos.',
  keywords: ['editar texto', 'melhorar texto', 'corretor', 'formal', 'casual', 'resumir', 'corrigir'],
  openGraph: {
    title: 'Editar Texto | TextUp',
    description: 'Melhore seu texto com IA. 4 modos de edição.',
    url: 'https://textup.autonomousclara.com/edit',
  },
  alternates: {
    canonical: 'https://textup.autonomousclara.com/edit',
  },
};

export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

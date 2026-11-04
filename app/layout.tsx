import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://doce-castelo.weseag.workers.dev'),
  title: 'Doce Castelo Doceria | Água Verde, Curitiba',
  description:
    'Fatias de bolo recheadas, taças de brownie com Nutella, bombons de copo e sobremesas no Água Verde em Curitiba. Peça pelo WhatsApp ou iFood.',
  openGraph: {
    title: 'Doce Castelo Doceria | Fatias Nobres & Doces Artesanais em Curitiba',
    description:
      'Fatias de bolo Ferrero Rocher e Kinder Bueno, taças com Nutella pura, bombons de morango e uva Thompson. Nota 4.8 no Google.',
    url: 'https://doce-castelo.weseag.workers.dev',
    siteName: 'Doce Castelo Doceria',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Doce Castelo Doceria - Água Verde, Curitiba',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doce Castelo Doceria | Água Verde, Curitiba',
    description:
      'Fatias de bolo, taças e bombons artesanais no Água Verde em Curitiba. Encomendas via WhatsApp e delivery iFood.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico?v=2',
        sizes: 'any',
      },
      {
        url: '/icon.svg?v=2',
        type: 'image/svg+xml',
      },
      {
        url: '/icon.png?v=2',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png?v=2',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png?v=2',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico?v=2',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2c1810',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/icon.png?v=2" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
      </head>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

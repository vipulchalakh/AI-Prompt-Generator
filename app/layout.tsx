import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AI Prompt Generator - Create Perfect AI Prompts',
    template: '%s | AI Prompt Generator'
  },
  description: 'Generate professional AI prompts for images, text, video, presentations, and audio. Free AI prompt generator tool powered by advanced AI technology.',
  keywords: ['AI prompt generator', 'artificial intelligence', 'prompt engineering', 'AI tools', 'image generation', 'text generation', 'video creation'],
  authors: [{ name: 'AI Prompt Generator' }],
  creator: 'AI Prompt Generator',
  publisher: 'AI Prompt Generator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aipromptgenerator.info'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aipromptgenerator.info',
    title: 'AI Prompt Generator - Create Perfect AI Prompts',
    description: 'Generate professional AI prompts for images, text, video, presentations, and audio. Free AI prompt generator tool powered by advanced AI technology.',
    siteName: 'AI Prompt Generator',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Prompt Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompt Generator - Create Perfect AI Prompts',
    description: 'Generate professional AI prompts for images, text, video, presentations, and audio. Free AI prompt generator tool powered by advanced AI technology.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "AI Prompt Generator",
              "description": "Generate professional AI prompts for images, text, video, presentations, and audio",
              "url": "https://aipromptgenerator.info",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "AI Prompt Generator"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 
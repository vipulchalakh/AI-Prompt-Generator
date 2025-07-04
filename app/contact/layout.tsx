import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the AI Prompt Generator team. We\'re here to help with any questions or feedback about our AI prompt generation tool.',
  openGraph: {
    title: 'Contact AI Prompt Generator',
    description: 'Get in touch with our team for support and feedback.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
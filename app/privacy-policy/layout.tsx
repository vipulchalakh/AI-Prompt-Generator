import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how AI Prompt Generator collects, uses, and protects your personal information.',
  openGraph: {
    title: 'Privacy Policy - AI Prompt Generator',
    description: 'Learn how we protect your privacy and handle your data.',
  },
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children
} 
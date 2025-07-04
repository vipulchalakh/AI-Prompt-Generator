import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AI Prompt Generator - the free tool that helps you create professional AI prompts for images, text, video, presentations, and audio.',
  openGraph: {
    title: 'About AI Prompt Generator',
    description: 'Learn about AI Prompt Generator - the free tool that helps you create professional AI prompts.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
} 
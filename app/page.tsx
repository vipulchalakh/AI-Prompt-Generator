'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PromptForm from '@/components/PromptForm'
import PromptOutput from '@/components/PromptOutput'

const features = [
  {
    title: 'Multi-Format Support',
    desc: 'Generate prompts for images, text, video, presentations, and audio with a single tool.',
    icon: '🧩',
  },
  {
    title: 'SEO-Optimized Prompts',
    desc: 'All prompts are crafted to maximize discoverability and engagement for your content.',
    icon: '🚀',
  },
  {
    title: 'Instant Copy',
    desc: 'Copy your generated prompt with one click and use it anywhere instantly.',
    icon: '📋',
  },
  {
    title: 'Free & Secure',
    desc: 'No registration required. Your data and API keys are always secure.',
    icon: '🔒',
  },
]

const steps = [
  {
    title: 'Describe Your Idea',
    desc: 'Tell us what you want to generate in simple language.',
  },
  {
    title: 'Choose Output Type',
    desc: 'Select the format: Image, Text, Video, Presentation, or Audio.',
  },
  {
    title: 'Generate & Copy',
    desc: 'Get a professional prompt instantly and copy it with one click.',
  },
]

const faqs = [
  {
    q: 'Is this tool free to use?',
    a: 'Yes! AI Prompt Generator is completely free and requires no registration.'
  },
  {
    q: 'Can I use the prompts for commercial projects?',
    a: 'Absolutely. All prompts generated are yours to use for any purpose.'
  },
  {
    q: 'How is my data handled?',
    a: 'Your input is only used to generate prompts and is never stored or shared.'
  },
  {
    q: 'What AI model powers this tool?',
    a: 'We use the DeepSeek API with the latest deepseek-chat model for prompt generation.'
  },
]

export default function HomePage() {
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handlePromptGenerated = (prompt: string) => {
    setGeneratedPrompt(prompt)
    setError('')
  }

  const handleError = (errorMessage: string) => {
    setError(errorMessage)
    setGeneratedPrompt('')
  }

  const handleCopy = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with PromptForm */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-400 text-white py-28 md:py-36 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            AI Prompt Generator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto drop-shadow"
          >
            Create professional AI prompts for images, text, video, presentations, and audio. Powered by advanced AI technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto w-full max-w-2xl"
          >
            <PromptForm
              onPromptGenerated={handlePromptGenerated}
              onError={handleError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </motion.div>
        </div>
      </section>

      {/* Output Section */}
      {generatedPrompt && (
        <section className="flex justify-center py-10 px-4 bg-gradient-to-b from-cyan-50 to-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <PromptOutput
              prompt={generatedPrompt}
              onCopy={handleCopy}
            />
          </motion.div>
        </section>
      )}

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg max-w-2xl mx-auto"
        >
          <p className="text-red-800">{error}</p>
        </motion.div>
      )}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Why Choose AI Prompt Generator?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border border-blue-100"
              >
                <span className="text-4xl mb-4">{f.icon}</span>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            How It Works
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-[220px] max-w-xs text-center border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md border border-cyan-100 overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.q}</span>
                  <span className="ml-4 text-cyan-500 text-2xl">{openFaq === i ? '-' : '+'}</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`px-6 pb-5 text-gray-700 text-base ${openFaq === i ? 'block' : 'hidden'}`}
                >
                  {faq.a}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          <p className="font-medium">Prompt copied to clipboard!</p>
        </motion.div>
      )}
    </div>
  )
} 
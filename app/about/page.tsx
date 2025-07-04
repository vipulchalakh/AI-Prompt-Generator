'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Multiple Content Types',
    desc: 'Generate prompts for images, text, video, presentations, and audio content with specialized optimization for each format.',
    icon: '🖼️',
  },
  {
    title: 'Advanced AI Technology',
    desc: 'Powered by cutting-edge AI models to ensure your prompts are professional, specific, and optimized for the best possible results.',
    icon: '🤖',
  },
  {
    title: 'Free & Accessible',
    desc: 'No registration required, no hidden fees, and no limitations on usage. Generate as many prompts as you need, completely free.',
    icon: '💸',
  },
  {
    title: 'User-Friendly Interface',
    desc: 'Clean, intuitive design that makes prompt generation simple and efficient, whether you\'re a beginner or an expert.',
    icon: '✨',
  },
]

const users = [
  { label: 'Content Creators', desc: 'Generate engaging prompts for social media, blogs, and marketing materials', icon: '✍️' },
  { label: 'Designers & Artists', desc: 'Create detailed prompts for AI image generation tools', icon: '🎨' },
  { label: 'Writers', desc: 'Develop compelling prompts for AI writing assistants', icon: '📝' },
  { label: 'Students', desc: 'Generate prompts for academic and research projects', icon: '🎓' },
  { label: 'Businesses', desc: 'Create professional prompts for presentations and marketing content', icon: '🏢' },
]

const techPoints = [
  'Analyze your input and context to create relevant prompts',
  'Optimize language and structure for maximum AI comprehension',
  'Include technical parameters and specifications when needed',
  'Ensure prompts are clear, actionable, and professional',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-400 text-white py-28 md:py-36 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            About AI Prompt Generator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto drop-shadow"
          >
            AI Prompt Generator is a free, powerful tool designed to help creators, professionals, and enthusiasts generate high-quality AI prompts for various content types.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8"
          >
            We believe that everyone should have access to professional-grade AI tools without barriers. Our mission is to democratize AI prompt creation by providing a free, easy-to-use platform that generates optimized prompts for leading AI technologies.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            What We Offer
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

      {/* Who Uses Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Who Uses Our Tool
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {users.map((user, i) => (
              <motion.div
                key={user.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 border border-cyan-100 hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-3xl mt-1">{user.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{user.label}</h3>
                  <p className="text-gray-600 text-base">{user.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900"
          >
            Our Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8"
          >
            AI Prompt Generator leverages state-of-the-art AI models to understand your requirements and generate optimized prompts. Our system is designed to:
          </motion.p>
          <ul className="space-y-3 text-gray-700 max-w-xl mx-auto mb-8">
            {techPoints.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-cyan-500 mt-1">•</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 rounded-2xl shadow-xl p-10 md:p-14 flex flex-col items-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Get Started Today</h3>
            <p className="text-lg text-gray-700 mb-6">
              Ready to create professional AI prompts? Try our tool now and see the difference that optimized prompts can make in your AI-generated content.
            </p>
            <a
              href="/"
              className="btn-primary inline-block text-lg px-8 py-3"
            >
              Start Generating Prompts
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
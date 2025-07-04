'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'How quickly will I get a response?',
    a: 'We typically respond to all inquiries within 24-48 hours during business days.'
  },
  {
    q: 'Can I request new features?',
    a: 'Absolutely! We welcome feedback and suggestions to improve the tool.'
  },
  {
    q: 'Is my contact information safe?',
    a: 'Yes, your information is only used to respond to your inquiry and is never shared.'
  },
  {
    q: 'Where can I find more help?',
    a: 'Check our FAQ or email us at info@aipromptgenerator.info.'
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto drop-shadow"
          >
            Have a question, suggestion, or need support? Reach out to us and we’ll get back to you as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  </div>
                )}
              </motion.div>
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">General Inquiries</h3>
                    <p className="text-gray-700 mb-2">
                      Have questions about our AI Prompt Generator? We're here to help!
                    </p>
                    <p className="text-primary-600 font-medium">info@aipromptgenerator.info</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Technical Support</h3>
                    <p className="text-gray-700 mb-2">
                      Experiencing issues with the tool? Our technical team can assist you.
                    </p>
                    <p className="text-primary-600 font-medium">support@aipromptgenerator.info</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Feedback & Suggestions</h3>
                    <p className="text-gray-700 mb-2">
                      We value your feedback! Let us know how we can improve our service.
                    </p>
                    <p className="text-primary-600 font-medium">feedback@aipromptgenerator.info</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Response Time</h3>
                    <p className="text-gray-700">
                      We typically respond to all inquiries within 24-48 hours during business days.
                    </p>
                  </div>
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-primary-900 mb-3">Quick Help</h3>
                    <p className="text-primary-800 mb-3">
                      Before contacting us, you might find answers to common questions in our FAQ section.
                    </p>
                    <a href="/" className="text-primary-600 font-medium hover:text-primary-700">
                      Back to Home →
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  )
} 
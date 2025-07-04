'use client'

import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'Is my data stored?',
    a: 'No, your input is only used to generate prompts and is never stored or shared.'
  },
  {
    q: 'Do you use cookies?',
    a: 'We use cookies and similar tracking technologies to enhance your experience and analyze website usage.'
  },
  {
    q: 'Can I request my data to be deleted?',
    a: 'Yes, you can contact us at privacy@aipromptgenerator.info to request data deletion.'
  },
  {
    q: 'How can I contact you about privacy?',
    a: 'Email us at privacy@aipromptgenerator.info and we will respond promptly.'
  },
]

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto drop-shadow"
          >
            Learn how we collect, use, and protect your information at AI Prompt Generator.
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <div className="prose prose-lg max-w-none">
              {/* All policy sections, unchanged, but now inside animated card */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to AI Prompt Generator ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
                <p className="text-gray-700">
                  By using AI Prompt Generator, you consent to the data practices described in this policy.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Information You Provide</h3>
                <p className="text-gray-700 mb-4">When you use our service, you may provide us with:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Content you input for prompt generation</li>
                  <li>Contact information if you reach out to us</li>
                  <li>Feedback and comments about our service</li>
                </ul>
                <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">We automatically collect certain information when you visit our website:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Device information</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>To provide and maintain our AI prompt generation service</li>
                  <li>To process your requests and generate prompts</li>
                  <li>To improve our service and user experience</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze usage patterns and optimize our website</li>
                  <li>To ensure the security and integrity of our service</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing our services.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights, property, or safety.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                </ul>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700 mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 mb-4">We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage</li>
                  <li>Improve our service functionality</li>
                  <li>Provide personalized content</li>
                </ul>
                <p className="text-gray-700">You can control cookie settings through your browser preferences.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Services</h2>
                <p className="text-gray-700 mb-4">Our service may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights and Choices</h2>
                <p className="text-gray-700 mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
                <p className="text-gray-700">To exercise these rights, please contact us using the information provided below.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our service after such changes constitutes acceptance of the updated policy.</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
                <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@aipromptgenerator.info</p>
                  <p className="text-gray-700 mb-2"><strong>Website:</strong> aipromptgenerator.info</p>
                  <p className="text-gray-700">We will respond to your inquiry within a reasonable timeframe.</p>
                </div>
              </section>
            </div>
          </motion.div>
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
            Privacy FAQs
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
                <div className="px-6 py-5">
                  <span className="text-lg font-medium text-gray-900">{faq.q}</span>
                  <div className="mt-2 text-gray-700 text-base">{faq.a}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
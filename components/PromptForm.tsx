'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface PromptFormProps {
  onPromptGenerated: (prompt: string) => void
  onError: (error: string) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const outputTypes = [
  { value: 'Text', label: 'Text (for text generation tools)' },
  { value: 'Image', label: 'Image (for image generation tools)' },
  { value: 'Video', label: 'Video (for video generation tools)' },
  { value: 'Presentation', label: 'Presentation (for presentation tools)' },
  { value: 'Audio', label: 'Audio (for audio generation tools)' },
]

export default function PromptForm({ onPromptGenerated, onError, isLoading, setIsLoading }: PromptFormProps) {
  const [userInput, setUserInput] = useState('')
  const [outputType, setOutputType] = useState('Text')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!userInput.trim()) {
      onError('Please enter a description of what you want to generate.')
      return
    }

    setIsLoading(true)
    onError('')

    try {
      const response = await fetch('/api/generatePrompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInput: userInput.trim(),
          outputType,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate prompt')
      }

      onPromptGenerated(data.prompt)
    } catch (error) {
      console.error('Error generating prompt:', error)
      onError(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-6 md:p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input Field */}
        <div>
          <label htmlFor="userInput" className="block text-sm font-medium text-gray-700 mb-2">
            Describe what you want to generate
          </label>
          <textarea
            id="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="e.g., A futuristic cityscape with flying cars and neon lights, cinematic lighting, 4K resolution"
            className="input-field min-h-[120px] resize-none text-black placeholder-gray-400"
            disabled={isLoading}
          />
        </div>

        {/* Output Type Dropdown */}
        <div>
          <label htmlFor="outputType" className="block text-sm font-medium text-gray-700 mb-2">
            Prompt For
          </label>
          <select
            id="outputType"
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            className="input-field text-black"
            disabled={isLoading}
          >
            {outputTypes.map((type) => (
              <option key={type.value} value={type.value} className="text-black">
                {type.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-2">Select the type of output you want a prompt for. For example, choose <b>Image</b> to generate a prompt for image generation tools.</p>
        </div>

        {/* Generate Button */}
        <button
          type="submit"
          disabled={isLoading || !userInput.trim()}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Generating...</span>
            </>
          ) : (
            <span>Generate Prompt</span>
          )}
        </button>
      </form>
    </motion.div>
  )
} 
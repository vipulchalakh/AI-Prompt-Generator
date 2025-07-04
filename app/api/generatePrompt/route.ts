import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { userInput, outputType } = await request.json()

    if (!userInput || !outputType) {
      return NextResponse.json(
        { error: 'Missing required fields: userInput and outputType' },
        { status: 400 }
      )
    }

    const apiKey = process.env.DEEPSEEK_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    const systemPrompt = `You are an expert AI prompt generator. Your task is to create professional, detailed, and effective prompts for AI tools based on user requirements.

For ${outputType} generation, create a prompt that:
- Is clear, specific, and actionable
- Includes relevant technical details and parameters
- Uses professional language and industry best practices
- Is optimized for the best possible AI output
- Includes style, format, and quality specifications when relevant

Format your response as a clean, ready-to-use prompt without any explanations or additional text.`

    const userPrompt = `Generate a professional ${outputType} prompt based on this user requirement: "${userInput}"

Please create a detailed, specific prompt that will produce high-quality ${outputType} output.`

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: userPrompt,
          },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('DeepSeek API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to generate prompt' },
        { status: 500 }
      )
    }

    const data = await response.json()
    const generatedPrompt = data.choices?.[0]?.message?.content

    if (!generatedPrompt) {
      return NextResponse.json(
        { error: 'No prompt generated' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      prompt: generatedPrompt.trim(),
      outputType,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error generating prompt:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 